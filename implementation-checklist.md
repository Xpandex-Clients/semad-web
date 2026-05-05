# implementation-checklist.md — semad-web (CEMAD)

> Plan completo del proyecto en 16 fases. Marca `[x]` en tiempo real al cerrar cada tarea. Una intención = un commit.

Última actualización: 2026-05-05.

> **Estado:** Fases 1, 2, 3, 4, 7 y 8 completadas (ContactForm aplazado a Fase 9; SEO con TODOs cliente documentados). Fase 5 con stubs `noindex,follow`. **Fase 6 BLOQUEADA por material del cliente**. Próximo: **Fase 9 — backend/formularios** (Astro Action contact.submit + Resend + anti-bot).

---

## Fase 1 — Fundamentos

- [x] Repo Astro scaffoldeado (`npm create astro@latest`)
- [x] Briefing canónico en `client-input/briefing.md`
- [x] Material de marca en `client-input/assets/brand/` (manual + extraídos)
- [x] `.gitignore`, `.claudeignore`, `.env.example`, `.claude/settings.json`
- [x] `CLAUDE.md` con stack, comandos, reglas
- [x] `CONTEXT-project.md` con identidad y decisiones iniciales
- [x] Stack premium instalado (Preact, Tailwind 4, MDX, sitemap, icon, fontsource)
- [x] `astro.config.mjs` con integraciones
- [x] `tsconfig.json` con paths `@features/*`, `@shared/*`, `@assets/*`
- [x] Estructura de carpetas `src/{features,shared,content,actions}`
- [x] Tokens CEMAD en `src/shared/styles/theme.css`
- [x] `siteConfig.ts` y `services.ts` en `src/shared/config/`
- [x] Primer commit del scaffold premium

## Fase 2 — Sistema de diseño

- [x] `design-system.md` documentado (paleta, tipo, escalas, easings)
- [x] `src/shared/ui/primitives/Button.astro` (primary/secondary/ghost/outline/submarca; sm/md/lg; min-44px target)
- [x] `Container.astro` (narrow/default/wide)
- [x] `Section.astro` (tone paper/paper-soft/ink/gold/submarca; spacing tight/default/loose/none)
- [x] `Heading.astro` (display/title/subtitle; h1-h4 + visual independiente)
- [x] `Card.astro` (flat/elevated/outline; con accent line top)
- [x] `Badge.astro` (gold/teal/rose/silver/copper/ink/muted; accent custom)
- [x] `Logo.astro` brand component (principal/vertical/sello/isotipo; tone color/white/ink)
- [x] Storyboard visual en `/dev/styleguide` (noindex + excluido de sitemap + Disallow en robots.txt)

## Fase 3 — Layout y navegación

- [x] `src/shared/ui/layout/Header.astro` (logo + nav + CTA contacto + dropdown desktop submarcas)
- [x] `src/shared/ui/layout/Footer.astro` (contacto + submarcas + legales + IG + horarios)
- [x] `MobileMenu.tsx` (Preact island, focus trap, close on Esc, body scroll lock, restore focus, target ≥ 44×44)
- [x] `Layout.astro` con `<head>` SEO + ViewTransitions (`ClientRouter`) + slot `head` + prop `bare`
- [x] Skip-link a `#main` (WCAG)
- [x] `src/shared/config/navigation.ts` (single source of truth para Header/MobileMenu/Footer)
- [x] Build passes sobre las 13 rutas (incl. 5 submarcas dinámicas, blog, legales, contacto, doctora)

## Fase 4 — Interactividad (islas Preact)

- [x] `MobileMenu` (cerrado en Fase 3)
- [x] `FaqAccordion` — ARIA expanded/controls, role=region, single-open default, hidratado `client:visible`
- [~] `ServiceCarousel` — **decisión: NO se implementa.** Grid responsive ya funciona en Home, embla añadiría ~12kb gz sin valor real para 5 items. Reabrir si UX-UI senior lo pide tras review.
- [x] `WhatsAppFAB` — FAB flotante, dismissible por sesión, hidratado `client:idle`, oculto en `bare` layouts
- [ ] `ContactForm` — pospuesto a Fase 9 (depende de Astro Action + Resend)

## Fase 5 — Contenido

- [x] `content-plan.md` con copy concreto por página (versión inicial)
- [~] Home: CTA gold antes del footer + submarcas grid + bloque doctora; testimonios `[TODO]`
- [~] 5 landings de submarca dinámicas: hero color propio, claim, CTA. Falta listado tratamientos + FAQ + copy validado
- [~] `/dra-abigail-cevallos`: layout listo; falta bio + foto `[TODO con cliente]`
- [~] `/contacto`: hero + canales (tel/WhatsApp/IG); formulario en Fase 9
- [~] **Blog v1**: schema Zod commiteado, índice `/blog` con estado vacío. Falta `/blog/[slug]`, RSS, internal linking
- [ ] Plan editorial seed: 5 artículos arranque (1 por submarca + 1 sobre la doctora) `[TODO: redactar con cliente]`
- [ ] Microcopy de estados (loading/success/error formulario)
- [ ] 404 + 500 con marca

## Fase 6 — Imágenes

- [ ] `images-plan.md` con mood board, prompts IA y stock fallback
- [ ] Logos en `public/brand/` (SVG cuando la cliente los aporte; PNG export del PDF como interim)
- [ ] Favicon + apple-touch-icon + maskable
- [ ] Hero matriz: retrato premium luminoso (stock licenciado o sesión propia `[TODO]`)
- [ ] 5 imágenes hero por submarca (paleta de la submarca)
- [ ] Foto de la doctora `[TODO: solicitar a cliente]`
- [ ] Optimización: AVIF + WebP, srcset responsive, lazy loading
- [ ] OG image 1200×630 con marca y tagline
- [ ] Alt text descriptivo en todas las imágenes (a11y)

## Fase 7 — Animaciones

- [x] Hero: fade-in + 8px rise con stagger por elemento (logo/h1/p/CTAs), CSS keyframe `hero-rise` 600ms `var(--ease-out)`
- [x] Cards de submarca: hover lift + shadow ya provistos por `Card.astro` (sin código duplicado)
- [x] Reveal on scroll: utilidad `.reveal/.is-visible` + isla Preact `Reveal` (IntersectionObserver, una sola vez, `unobserve` tras dispararse)
- [x] `prefers-reduced-motion`: doble guarda — global `@layer base` + override explícito en cada utilidad de motion; isla Reveal detecta `matchMedia` y revela inmediatamente
- [x] ViewTransitions: `<ClientRouter />` activado en Layout (Fase 3)

## Fase 8 — SEO técnico

- [x] `seo-plan.md` con keywords + intención por página + apéndice §9 con review del seo-strategist
- [x] `<head>` enriquecido: og:site_name, og:image fallback (1200×630), twitter card completa, theme-color brand, prop `noindex` por página
- [x] Schema JSON-LD vía `@graph`:
  - Home: `MedicalClinic`+`LocalBusiness` + `WebSite` + `Physician` (ref) cruzados por `@id`
  - `[submarca]`: `Service` + `BreadcrumbList`
  - `/dra-abigail-cevallos`: `Physician` (full) + `BreadcrumbList`, `og:type=profile`
  - `/contacto`: `MedicalClinic` (compact, principalmente horarios+dirección) + `BreadcrumbList`
  - `/blog`: `Blog` + `BreadcrumbList` (funciona con colección vacía)
- [x] `medicalSpecialty` corregido: `["Dermatology","PlasticSurgery"]`
- [x] `robots.txt` con `Disallow: /_astro/` + sitemap-index referenced
- [x] Sitemap: filtra `/dev/` y páginas legales; `lastmod` + `changefreq=weekly` (9 URLs)
- [x] `og:locale=es_ES` (hreflang aplazado hasta confirmar idiomas extra; aún no hay)
- [x] Internal linking: anchor texts documentados en seo-plan §9.2 — pendiente aplicar en copy (Fase copy)
- [x] Slugs limpios sin acentos
- [~] Submarcas marcadas `noindex,follow` hasta tener copy validado (riesgo YMYL thin-content)
- [ ] `/vibe-seo-audit` post-launch sobre BUILD producción
- [ ] `[cliente]` Foto OG por página, GBP, nº colegiada para `Person.memberOf`, geo coords exactas

## Fase 9 — Backend / formularios

- [ ] Astro Action `contact.submit` con validación Zod (provider abstraído para swap fácil)
- [ ] Anti-bot (Turnstile o honeypot mínimo)
- [ ] Email transaccional **Resend** (default) → `info@cemadclinic.com` `[TODO: confirmar destinatario]`. Migración a Brevo en 1 archivo si la cliente lo prefiere
- [ ] Confirmación al usuario (auto-reply con datos)
- [ ] Logs estructurados (sin datos PII más allá del estrictamente necesario)
- [ ] Mensajes de error i18n (ES)
- [ ] Tests Playwright del happy path + casos error

## Fase 10 — Accesibilidad (WCAG 2.2 AA)

- [ ] Contraste 4.5:1 (texto normal) y 3:1 (grande) en todas las combinaciones de marca
- [ ] Navegación 100% por teclado (tabular orden lógico, focus visible)
- [ ] Skip-links activos
- [ ] Targets táctiles ≥ 44×44 en móvil
- [ ] ARIA correcto (form errors con `aria-describedby`, accordion `aria-expanded`)
- [ ] Auditoría con `/vibe-a11y-audit` + axe-core en Playwright
- [ ] Lighthouse A11y ≥ 95 sobre BUILD producción

## Fase 11 — Performance

- [ ] Lighthouse Perf ≥ 90 sobre `npm run build && npm run preview` (NO dev server)
- [ ] LCP < 2.5s, INP < 200ms, CLS < 0.1
- [ ] Bundle JS razonable (objetivo total islas < 60kb gzip)
- [ ] Fuentes con `font-display: swap`, subset `latin` solamente
- [ ] Imágenes hero con `loading="eager"` + `fetchpriority="high"`
- [ ] Resto de imágenes lazy
- [ ] `/vibe-perf-audit` ejecutado

## Fase 12 — Seguridad

- [ ] Headers en `.htaccess` o equivalente: HSTS, X-Frame-Options DENY, X-Content-Type-Options nosniff, Referrer-Policy strict-origin-when-cross-origin, Permissions-Policy mínimo
- [ ] CSP estricta (revisar islas Preact + Google Fonts inline)
- [ ] Sin secretos en código ni en logs
- [ ] Validación server-side Zod en cada Action
- [ ] Rate limit del formulario contacto
- [ ] `/vibe-security-review` pre-deploy

## Fase 13 — Compliance

- [ ] Aviso legal con datos identificativos del responsable `[TODO]`
- [ ] Política de privacidad RGPD (responsable, finalidades, base legal, derechos, encargados)
- [ ] Política de cookies + banner consentimiento (CMP simple, sin trackers de terceros si no son necesarios)
- [ ] Texto consentimiento checkbox en formulario contacto
- [ ] Aviso de tratamiento de datos médicos (LOPDGDD art. 9 categorías especiales) — relevante si formulario pide motivo de consulta

## Fase 14 — Testing

- [ ] Vitest unit en helpers/utils críticos
- [ ] Playwright e2e: home, una submarca, formulario contacto (happy + error)
- [ ] Lighthouse-ci budgets (perf, a11y, best-practices, SEO)
- [ ] Visual regression rudimentaria (snapshots de hero principales)

## Fase 15 — Deploy

- [ ] `/vibe-deploy-hostinger` configurado (GitHub Actions → FTPS Hostinger)
- [ ] Subdominio staging (ej. `staging.cemadclinic.com` o `dev.cemadclinic.com`) `[TODO: confirmar]`
- [ ] `.htaccess` con headers de seguridad y rewrite a HTTPS
- [ ] DNS apuntando al servidor `187.124.60.15`
- [ ] HTTPS con cert válido (Let's Encrypt en Hostinger)
- [ ] Test desde producción: smoke + Lighthouse
- [ ] PR a `main` → producción (con go del usuario)

## Fase 16 — Release-ready

- [ ] Handover doc para la cliente (`docs/handover-cliente.md`): cómo ver analytics, cómo pedir cambios, contacto soporte
- [ ] Backup inicial del sitio
- [ ] Monitoring básico (uptime + Lighthouse mensual programado)
- [ ] Tag de versión `v1.0.0` + changelog
- [ ] Reunión post-launch con cliente
