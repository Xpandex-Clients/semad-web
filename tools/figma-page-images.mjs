#!/usr/bin/env node
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const FIGMA = resolve(process.cwd(), "client-input/figma");
const tree = JSON.parse(await readFile(resolve(FIGMA, "tree.json"), "utf8"));

const targetId = process.argv[2];
function find(n, id) {
  if (n.id === id) return n;
  for (const c of n.children || []) { const r = find(c, id); if (r) return r; }
  return null;
}
const node = find(tree.document, targetId);
if (!node) { console.error("not found"); process.exit(1); }

const root = node.absoluteBoundingBox || {};
const rootX = Math.round(root.x || 0);
const rootY = Math.round(root.y || 0);

function walk(n, out) {
  const bb = n.absoluteBoundingBox || {};
  for (const f of n.fills || []) {
    if (f.type === "IMAGE" && f.imageRef) {
      out.push({
        ref: f.imageRef.slice(0, 8),
        x: Math.round((bb.x || 0) - rootX),
        y: Math.round((bb.y || 0) - rootY),
        w: Math.round(bb.width || 0),
        h: Math.round(bb.height || 0),
        name: (n.name || "").slice(0, 40),
      });
    }
  }
  for (const c of n.children || []) walk(c, out);
}
const out = [];
walk(node, out);
out.sort((a, b) => (a.y - b.y) || (a.x - b.x));
console.log(`# ${node.name} ${node.id} — ${out.length} fills`);
console.log(`Y     X     W     H     REF       NAME`);
for (const e of out) {
  console.log(`${String(e.y).padStart(5)} ${String(e.x).padStart(5)} ${String(e.w).padStart(5)} ${String(e.h).padStart(5)}  ${e.ref}  ${e.name}`);
}
