#!/usr/bin/env node
/**
 * Recorre tree.json y extrae tokens de diseño aplicados en el archivo:
 *   - colores únicos (fills sólidos + strokes)
 *   - tipografías (familia / peso / tamaño / line-height / letter-spacing)
 *   - radios
 *   - sombras / efectos
 *   - grids / autolayout
 *
 * Salida: client-input/figma/tokens.json (resumen agregado) + tokens.md (legible).
 */
import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const FIGMA = resolve(process.cwd(), "client-input/figma");
const tree = JSON.parse(await readFile(resolve(FIGMA, "tree.json"), "utf8"));

const colors = new Map();
const typography = new Map();
const radii = new Set();
const shadows = new Map();

function rgbHex(c) {
  const f = (v) => Math.round(v * 255).toString(16).padStart(2, "0");
  return `#${f(c.r)}${f(c.g)}${f(c.b)}`.toUpperCase();
}

function visit(node, depth = 0) {
  // fills
  for (const f of node.fills || []) {
    if (f.type === "SOLID" && f.visible !== false) {
      const hex = rgbHex(f.color);
      const a = (f.opacity ?? f.color.a ?? 1).toFixed(2);
      const key = `${hex}@${a}`;
      colors.set(key, (colors.get(key) || 0) + 1);
    }
  }
  // strokes
  for (const s of node.strokes || []) {
    if (s.type === "SOLID" && s.visible !== false) {
      const hex = rgbHex(s.color);
      colors.set(`${hex}@stroke`, (colors.get(`${hex}@stroke`) || 0) + 1);
    }
  }
  // text styles
  if (node.type === "TEXT" && node.style) {
    const st = node.style;
    const key = JSON.stringify({
      family: st.fontFamily,
      weight: st.fontWeight,
      size: Math.round(st.fontSize),
      lh: st.lineHeightPx ? Math.round(st.lineHeightPx) : undefined,
      ls: st.letterSpacing ? +st.letterSpacing.toFixed(2) : undefined,
    });
    typography.set(key, (typography.get(key) || 0) + 1);
  }
  // radii
  if (node.cornerRadius !== undefined && node.cornerRadius !== 0) {
    radii.add(node.cornerRadius);
  }
  if (Array.isArray(node.rectangleCornerRadii)) {
    node.rectangleCornerRadii.forEach((r) => r && radii.add(r));
  }
  // effects
  for (const e of node.effects || []) {
    if (e.visible === false) continue;
    if (e.type === "DROP_SHADOW" || e.type === "INNER_SHADOW") {
      const key = `${e.type}:${e.offset?.x ?? 0},${e.offset?.y ?? 0}/${e.radius}/${e.spread ?? 0}/${rgbHex(e.color)}@${(e.color?.a ?? 1).toFixed(2)}`;
      shadows.set(key, (shadows.get(key) || 0) + 1);
    }
  }
  for (const c of node.children || []) visit(c, depth + 1);
}

visit(tree.document);

// sort by frequency desc
const sortByFreq = (m) =>
  [...m.entries()].sort((a, b) => b[1] - a[1]).map(([k, v]) => ({ key: k, count: v }));

const summary = {
  colors: sortByFreq(colors),
  typography: sortByFreq(typography).map((e) => ({ ...e, key: JSON.parse(e.key) })),
  radii: [...radii].sort((a, b) => a - b),
  shadows: sortByFreq(shadows),
};

await writeFile(resolve(FIGMA, "tokens.json"), JSON.stringify(summary, null, 2));

// Markdown legible
const md = [];
md.push("# Figma — design tokens detectados\n");
md.push(`Generated from \`tree.json\` (file: CLINICA CEMAD).\n`);

md.push("## Colores (top 40 por frecuencia de uso)\n");
md.push("| hex | usos | nota |");
md.push("|---|---|---|");
for (const c of summary.colors.slice(0, 40)) {
  md.push(`| \`${c.key}\` | ${c.count} | |`);
}

md.push("\n## Tipografía (combinaciones distintas, top 20)\n");
md.push("| familia | peso | tamaño px | line-height px | letter-spacing | usos |");
md.push("|---|---|---|---|---|---|");
for (const t of summary.typography.slice(0, 20)) {
  const k = t.key;
  md.push(`| ${k.family} | ${k.weight} | ${k.size} | ${k.lh ?? "—"} | ${k.ls ?? "—"} | ${t.count} |`);
}

md.push("\n## Radios usados\n");
md.push(summary.radii.map((r) => `${r}px`).join(" · "));

md.push("\n\n## Sombras\n");
md.push("| tipo | offset | blur | spread | color | usos |");
md.push("|---|---|---|---|---|---|");
for (const s of summary.shadows.slice(0, 20)) {
  const [t, rest] = s.key.split(":");
  const [off, blur, sp, col] = rest.split("/");
  md.push(`| ${t} | ${off} | ${blur} | ${sp} | \`${col}\` | ${s.count} |`);
}

await writeFile(resolve(FIGMA, "tokens.md"), md.join("\n"));

console.log("✓ tokens.json + tokens.md →", FIGMA);
console.log("Colors:", summary.colors.length, "Typography:", summary.typography.length, "Radii:", summary.radii.length, "Shadows:", summary.shadows.length);
