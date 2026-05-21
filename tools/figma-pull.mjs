#!/usr/bin/env node
/**
 * Volcado del archivo Figma "CLINICA CEMAD" a client-input/figma/.
 *
 * Uso:
 *   FIGMA_TOKEN=figd_... node tools/figma-pull.mjs
 *
 * Salida:
 *   client-input/figma/
 *     ├─ tree.json         árbol completo de páginas + nodos
 *     ├─ styles.json       estilos de marca (colores, tipos, sombras)
 *     ├─ summary.md        resumen legible (páginas y frames principales)
 *     ├─ frames/<page>/<frame>.png    cada top-level frame exportado PNG @2x
 *     └─ assets/<id>.{png,svg}        nodos con `exportSettings`
 *
 * NO commitea el token. NO commitea los binarios (gitignored).
 */
import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const TOKEN = process.env.FIGMA_TOKEN;
if (!TOKEN) {
  console.error("FIGMA_TOKEN env var requerida");
  process.exit(1);
}

const FILE_KEY = "2TKJzpgEADzqgO7EBDjgUp";
const OUT = resolve(process.cwd(), "client-input/figma");
const API = "https://api.figma.com/v1";
const HEADERS = { "X-Figma-Token": TOKEN };

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function get(path) {
  const res = await fetch(`${API}${path}`, { headers: HEADERS });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`GET ${path} → ${res.status}: ${body.slice(0, 200)}`);
  }
  return res.json();
}

function slug(name) {
  return (name || "frame")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
}

async function ensureDir(p) {
  await mkdir(p, { recursive: true });
}

async function downloadTo(url, file) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`download ${url} → ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(file, buf);
}

async function main() {
  await ensureDir(OUT);
  await ensureDir(resolve(OUT, "frames"));
  await ensureDir(resolve(OUT, "assets"));

  console.log("· Fetch file tree…");
  const file = await get(`/files/${FILE_KEY}`);
  await writeFile(resolve(OUT, "tree.json"), JSON.stringify(file, null, 2));
  console.log(`  ${file.name} · last_modified ${file.lastModified}`);

  // styles separately for cleaner extraction
  console.log("· Fetch styles…");
  const styles = await get(`/files/${FILE_KEY}/styles`);
  await writeFile(resolve(OUT, "styles.json"), JSON.stringify(styles, null, 2));

  // collect top-level frames per page (skip Graveyard)
  const pages = (file.document?.children || []).filter(
    (p) => p.name !== "Graveyard",
  );

  const summary = [
    `# Figma — ${file.name}`,
    "",
    `Last modified: ${file.lastModified}`,
    `Version: ${file.version}`,
    `Pages procesadas: ${pages.length}`,
    "",
  ];

  for (const page of pages) {
    const pageSlug = slug(page.name);
    await ensureDir(resolve(OUT, "frames", pageSlug));
    const frames = (page.children || []).filter(
      (n) => n.type === "FRAME" || n.type === "COMPONENT" || n.type === "INSTANCE",
    );

    summary.push(`## ${page.name} (\`${page.id}\`)`);
    summary.push("");
    for (const f of frames) {
      summary.push(`- **${f.name}** · \`${f.id}\` · ${f.absoluteBoundingBox?.width || "?"}×${f.absoluteBoundingBox?.height || "?"}px`);
    }
    summary.push("");

    if (!frames.length) continue;

    // Figma image API: pedimos un frame por request para evitar timeout.
    // Frames muy grandes (homepage tipo 1440×11000px) deben ir a scale=1.
    for (let i = 0; i < frames.length; i++) {
      const f = frames[i];
      const w = f.absoluteBoundingBox?.width || 0;
      const h = f.absoluteBoundingBox?.height || 0;
      // Frames altos (homepage etc): scale 1 evita timeout.
      const scale = w * h > 4_000_000 ? 1 : 2;
      const outFile = resolve(
        OUT,
        "frames",
        pageSlug,
        `${slug(f.name)}__${f.id.replace(":", "-")}.png`,
      );
      // Skip si ya existe (idempotente)
      try {
        const { statSync } = await import("node:fs");
        if (statSync(outFile).size > 1024) {
          console.log(`· Skip ${page.name} [${i + 1}/${frames.length}] ${f.name} (cached)`);
          continue;
        }
      } catch {}
      console.log(`· Render ${page.name} [${i + 1}/${frames.length}] ${f.name} · ${w}×${h} scale=${scale}`);
      let imgRes;
      for (let attempt = 0; attempt < 3; attempt++) {
        try {
          imgRes = await get(
            `/images/${FILE_KEY}?ids=${encodeURIComponent(f.id)}&format=png&scale=${scale}`,
          );
          if (!imgRes.err) break;
          console.warn(`  · attempt ${attempt + 1} err:`, imgRes.err);
        } catch (e) {
          console.warn(`  · attempt ${attempt + 1} fail:`, e.message);
        }
        await sleep(2500 * (attempt + 1));
      }
      const url = imgRes?.images?.[f.id];
      if (!url) {
        console.warn(`  · no url for ${f.name} (${f.id}), skip`);
        continue;
      }
      try {
        await downloadTo(url, outFile);
      } catch (e) {
        console.warn("  · download failed:", f.name, e.message);
      }
      await sleep(250);
    }
  }

  await writeFile(resolve(OUT, "summary.md"), summary.join("\n"));
  console.log("· Done →", OUT);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
