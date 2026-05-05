# implementation-checklist.md — semad-web (CEMAD)

> Plan completo del proyecto en 16 fases. Marca `[x]` en tiempo real al cerrar cada tarea. Una intención = un commit.

Última actualización: 2026-05-05.

> **Estado:** Fases 1, 2 y 3 completadas. Fase 5 con stubs de páginas (rutas vivas, copy `[TODO]` por bloque). Próximo: Fase 4 — islas Preact restantes (FAQ, carousel, FAB, ContactForm en Fase 9).

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

- [ ] `MobileMenu` (ya en Fase 3)
- [ ] `FaqAccordion` (radix-style, ARIA expanded, animado con CSS)
- [ ] `ServiceCarousel` (5 submarcas, embla-carousel si aporta)
- [ ] `WhatsAppFAB` (botón flotante con teléfono `siteConfig.contact.whatsapp`)
- [ ] `ContactForm` (Preact + Astro Action backend en Fase 9)

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

- [ ] Hero: fade-in suave del display + script (CSS, 400ms ease-out)
- [ ] Cards de submarca: hover sutil (transform + shadow, 240ms)
- [ ] Reveal on scroll en secciones secundarias (IntersectionObserver, 1 vez)
- [ ] Honor `prefers-reduced-motion` en cada animación (verificado en QA)
- [ ] Transiciones entre páginas con ViewTransitions (opt-in, fallback graceful)

## Fase 8 — SEO técnico

- [ ] `seo-plan.md` con keywords + intención por página
- [ ] `<head>` canónico, OG, Twitter card por página
- [ ] Schema JSON-LD: `LocalBusiness` (Home), `MedicalBusiness`/`MedicalClinic`, `Person` (doctora), `Service` por submarca, `BreadcrumbList`, `WebSite` con SearchAction
- [ ] `robots.txt` + `sitemap.xml` (vía `@astrojs/sitemap`)
- [ ] hreflang `es-ES` + `og:locale`
- [ ] Internal linking entre submarcas y home
- [ ] Slugs limpios sin acentos (`/medicina-estetica`)
- [ ] Auditoría SEO con `/vibe-seo-audit`

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
