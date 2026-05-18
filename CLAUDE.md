# CLAUDE.md — semad-web (CEMAD)

> Memoria persistente del proyecto para Claude. Léeme entero antes de tocar nada en este repo.

## Proyecto

- **Marca:** CEMAD® — Aesthetic Anti-Aging Clinic
- **Cliente:** Dra. Abigail Cevallos Madrid
- **Ubicación:** Valencia, España
- **Dominio objetivo:** `cemadclinic.com`
- **Tagline:** *"Donde la ciencia y el arte se unen para revelar Tu Mejor Versión"*

## Stack

- **Framework:** Astro 6.x (output: `static`)
- **UI:** Tailwind 4 (vía `@tailwindcss/vite`) + tokens CEMAD en `src/shared/styles/theme.css`
- **Islas interactivas:** Preact (`@astrojs/preact`, `compat: false`)
- **Contenido:** Content Collections (`src/content/servicios`, `src/content/blog`)
- **Tipografía web:** Cormorant Garamond (display, fallback Erstoria), Inter (UI, fallback Gotham), Pinyon Script (script, fallback Corinthia) — vía `@fontsource*`
- **Iconos:** `astro-icon` + Lucide + Simple Icons
- **Imágenes:** `<Image>` + `<Picture>` Astro, AVIF/WebP
- **Animaciones:** CSS + GSAP solo donde aporte; siempre `prefers-reduced-motion`
- **Tests:** Vitest + Playwright
- **Lint/format:** Biome
- **Deploy:** Hostinger (FTPS) vía GitHub Actions — runbook `vibe-deploy-hostinger`

## Comandos

```bash
npm run dev            # localhost:4321
npm run build          # build producción a dist/
npm run preview        # preview del build
```

## Convenciones

- **Carpetas:** `src/features/<feature>/{ui,islands,server,...}` para features verticales; `src/shared/` para tokens, primitives, layout, SEO, lib.
- **Naming:** componentes `PascalCase.astro`/`.tsx`; utilidades `camelCase.ts`.
- **TS paths:** `@features/*`, `@shared/*`, `@assets/*` (definidos en `tsconfig.json`).
- **Islas Preact:** sólo donde haya estado/interactividad real; el resto es Astro estático.
- **Commits:** Conventional Commits, mensaje en inglés imperativo, ≤72 chars subject. Una intención por commit.
- **Ramas:** `main` (protegida — sólo vía PR), `work/<feature>` para trabajo, `staging` para preview.
- **A11y:** WCAG 2.2 AA, contraste 4.5:1 (texto normal) / 3:1 (grande), focus visible, target ≥ 44×44 móvil.
- **Performance:** Lighthouse sobre BUILD producción (no dev), Perf ≥ 90, A11y ≥ 95.

## Reglas no negociables

- NUNCA `git push --force`, ni push directo a `main`.
- NUNCA modificar archivos del cliente en `client-input/` (lectura solo).
- NUNCA inventar cifras, premios, testimonios o claims verificables — usar `[TODO: confirmar con cliente]` y avanzar.
- NUNCA caras IA inventadas — sólo stock licenciado o sesión propia de la clínica.
- NUNCA commitear `.env*`, secretos, credenciales.
- NUNCA `--no-verify` sin permiso explícito.
- SIEMPRE honrar `prefers-reduced-motion` en cada animación.

## Modo autónomo

- Edita archivos del proyecto, comitea Conventional Commits atómicos al cerrar cada intención, push a `work/*` y `staging`.
- Pausa y pregunta sólo si: falta dato crítico, audit cae bajo threshold sin fix obvio, decisión cliente-verificable, modificación a `.env`/`wp-config`/`.htaccess`, cambio que cruza >3 features, o promoción a producción.

## Material del cliente

- `client-input/briefing.md` — briefing canónico (fuente de verdad).
- `client-input/briefing-original.txt` — transcript original (no modificar).
- `client-input/assets/brand/CEMAD-manual-identidad.pdf` — manual de identidad (39 pp).
- `client-input/assets/brand/extracted/` — páginas e imágenes extraídas del manual (referencia visual).
- `client-input/decisiones/` — acuerdos verbales/email confirmados con la cliente (cada uno en su `.md` con fecha).

## Estado del proyecto

Ver `implementation-checklist.md` (16 fases). Ver `CONTEXT-project.md` para decisiones acumuladas. Ver `risks.md` para riesgos abiertos.

## Hostinger

- Servidor: `187.124.60.15` · Usuario `u670959166` · Puerto `65002` · Clave `~/.ssh/hostinger_deploy` (en memoria del agente).
- Deploy: ver runbook `cicd-hostinger-v2`.
