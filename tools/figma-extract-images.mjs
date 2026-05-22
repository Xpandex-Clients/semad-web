#!/usr/bin/env node
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { resolve } from "node:path";

const FIGMA = resolve(process.cwd(), "client-input/figma");
const tree = JSON.parse(await readFile(resolve(FIGMA, "tree.json"), "utf8"));
const map = JSON.parse(await readFile(resolve(FIGMA, "images-map.json"), "utf8")).meta.images;

const targetId = process.argv[2];
function find(n, id) {
  if (n.id === id) return n;
  for (const c of n.children || []) { const r = find(c, id); if (r) return r; }
  return null;
}

const node = targetId ? find(tree.document, targetId) : tree.document;
if (!node) { console.error("not found"); process.exit(1); }

const refs = new Set();
function walk(n) {
  for (const f of n.fills || []) if (f.type === "IMAGE" && f.imageRef) refs.add(f.imageRef);
  for (const c of n.children || []) walk(c);
}
walk(node);

const list = [...refs].map(r => ({ ref: r, url: map[r] || null }));
console.log(`# ${list.length} imageRefs found ${targetId ? `in ${targetId}` : "in document"}`);
for (const e of list) console.log(`${e.ref}\t${e.url ? "OK" : "MISSING"}`);

const outDir = resolve(FIGMA, "assets");
await mkdir(outDir, { recursive: true });

for (const e of list) {
  if (!e.url) continue;
  const dest = resolve(outDir, `${e.ref}.png`);
  try {
    const res = await fetch(e.url);
    if (!res.ok) { console.warn(`  fail ${e.ref}: ${res.status}`); continue; }
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(dest, buf);
    process.stdout.write(`. `);
  } catch (err) {
    console.warn(`  err ${e.ref}: ${err.message}`);
  }
}
console.log("\ndone");
