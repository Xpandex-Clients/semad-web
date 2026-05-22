#!/usr/bin/env node
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const FIGMA = resolve(process.cwd(), "client-input/figma");
const tree = JSON.parse(await readFile(resolve(FIGMA, "tree.json"), "utf8"));

const target = process.argv[2];
if (!target) { console.error("usage: <node-id>"); process.exit(1); }

function find(n, id) {
  if (n.id === id) return n;
  for (const c of n.children || []) {
    const r = find(c, id);
    if (r) return r;
  }
  return null;
}

const node = find(tree.document, target);
if (!node) { console.error("not found"); process.exit(1); }

const rgbHex = (c) => {
  const f = (v) => Math.round(v * 255).toString(16).padStart(2, "0");
  return `#${f(c.r)}${f(c.g)}${f(c.b)}`.toUpperCase();
};

function summarize(n) {
  const bb = n.absoluteBoundingBox || {};
  const x = Math.round(bb.x ?? 0), y = Math.round(bb.y ?? 0);
  const w = Math.round(bb.width ?? 0), h = Math.round(bb.height ?? 0);
  let fill = "";
  if (n.fills?.[0]?.type === "SOLID" && n.fills[0].visible !== false) {
    fill = ` fill=${rgbHex(n.fills[0].color)}`;
  } else if (n.fills?.[0]?.type === "IMAGE") {
    fill = ` IMG:${n.fills[0].imageRef?.slice(0, 8)}`;
  }
  const text = n.type === "TEXT"
    ? ` "${(n.characters || "").replace(/\s+/g, " ").slice(0, 200)}"`
    : "";
  const st = n.style ? ` ${n.style.fontFamily}@${n.style.fontWeight}/${Math.round(n.style.fontSize || 0)}` : "";
  return `${n.type.padEnd(11)} y=${String(y).padStart(5)} h=${String(h).padStart(5)} w=${String(w).padStart(4)} ${n.name}${fill}${st}${text}`;
}

const root = node.absoluteBoundingBox || {};
console.log(`# ${node.name} · ${node.id}`);
console.log(`# size ${Math.round(root.width)}×${Math.round(root.height)}`);

const sortedKids = (node.children || []).slice().sort((a, b) => {
  return (a.absoluteBoundingBox?.y ?? 0) - (b.absoluteBoundingBox?.y ?? 0);
});

console.log("\n## Children top-level (sorted by Y)\n");
for (const c of sortedKids) console.log(summarize(c));
