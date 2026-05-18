# CONTEXT-project.md — semad-web (CEMAD)

> Memoria viva entre sesiones. Cada decisión no trivial, cada cambio de rumbo, cada acuerdo con la cliente se anota aquí. **Siempre con fecha**. Sustituye al "qué estábamos haciendo" perdido entre sesiones.

---

## Identidad del proyecto

| Campo | Valor |
|---|---|
| **Slug repo** | `semad-web` |
| **Marca** | CEMAD® — Aesthetic Anti-Aging Clinic |
| **Cliente** | Dra. Abigail Cevallos Madrid (Medicina Estética) |
| **Ubicación** | Valencia, España |
| **Dominio** | `cemadclinic.com` |
| **Stack** | Astro 6.x · Tailwind 4 · Preact (islas) · Hostinger (FTPS) |
| **Working dir** | `/Users/carlos/Abadesa/semad-web/semad-web/` |

> **Nota sobre el slug:** el repo se llama `semad-web` pero la marca es `CEMAD`. Es probable que sea typo del scaffolding inicial. Mantenemos `semad-web` como nombre técnico (renombrar repo + remoto sería destructivo y no aporta) — el dominio público es `cemadclinic.com`.

---

## Decisiones técnicas (con fecha)

### 2026-05-05 — Stack

- **Astro 6.x estático** (`output: 'static'`). Confirmado por usuario: nadie del lado cliente edita la web → no necesitamos CMS.
- **Tailwind 4** vía `@tailwindcss/vite` con tokens CEMAD en `src/shared/styles/theme.css`.
- **Preact** (`compat: false`) para islas interactivas (menú móvil, FAQ, formularios). React no.
- **Tipografías:** Erstoria y Gotham son comerciales sin licencia web confirmada → uso sustitutos prácticamente idénticos en Google Fonts: **Playfair Display** (didone como Erstoria) + **Montserrat Variable** (geométrica como Gotham). **Corinthia** sí está en Google Fonts → usamos la oficial. Migración 1-línea cuando la cliente aporte licencias web de Erstoria/Gotham.
- **Iconos:** `astro-icon` + Lucide + Simple Icons.
- **Tests:** Vitest + Playwright.

### 2026-05-05 — Confirmaciones de la cliente (kickoff)

- **Plazo:** sin prisa → priorizamos calidad sobre velocidad. No comprometemos hito en `risks.md`.
- **Conversión principal:** reservas de primera consulta. Flujo: formulario corto + WhatsApp como vía paralela. CTA persistente.
- **Edición:** la cliente no editará habitualmente. Stack estático confirmado.
- **Logo:** vectorial oficial pendiente; uso PNG/SVG trazado desde el PDF como interim.
- **Blog:** SÍ entra en v1. Content Collection `src/content/blog/` con MDX. Estrategia editorial en `seo-plan.md` y `content-plan.md`.
- **Forms:** integración con **Resend** por defecto (DX simple, transaccional limpio). Decisión swappable a Brevo si la cliente quiere panel propio de email marketing.

### 2026-05-05 — Identidad visual

- **Paleta:** dorado `#bd9b5f` matriz + turquesa `#4cb8c3` secundario + 3 colores de submarca (rosa `#dfc2c4`, plata `#b1b1b1`, cobre `#8b634a`).
- **Submarcas:** 5 líneas verticales (Medicina Estética, IV Therapy, Anti-Aging Avanzado, Hair Clinic, Láser Dermoestético) — cada una con landing dedicada y paleta propia.
- **Tagline matriz:** *"Donde la ciencia y el arte se unen para revelar Tu Mejor Versión"*.
- **Concepto:** razón áurea (Φ) presente en logo, espirales decorativas, retratos.

### 2026-05-05 — Arquitectura de información (provisional)

```
/                          → Home (hero matriz + 5 submarcas + doctora + contacto)
/medicina-estetica
/iv-therapy
/anti-aging-avanzado
/hair-clinic
/laser-dermoestetico
/dra-abigail-cevallos      → Sobre la doctora
/blog                      → Índice del blog (MDX content collection)
/blog/[slug]               → Artículo individual
/contacto                  → Form + mapa + WhatsApp
/aviso-legal · /politica-privacidad · /politica-cookies
```

> [TODO: validar AI con cliente — ¿catálogo de tratamientos individuales por submarca?, ¿precios públicos?, ¿categorías y tags del blog?]

---

## Acuerdos con la cliente

> Cada acuerdo verbal/email confirmado va a `client-input/decisiones/<YYYY-MM-DD>-<asunto>.md`. Aquí solo el índice.

- _Pendiente reunión inicial de validación del briefing canónico._

---

## TODOs cliente-verificables abiertos

Datos que NO podemos inventar — esperamos confirmación de la cliente antes de usarlos en copy o schemas:

1. Email de contacto público (asumido `info@cemadclinic.com`).
2. Horarios reales (asumido L-V mañana/tarde, S mañana, D cerrado).
3. Coordenadas exactas para schema LocalBusiness (asumidas centro Valencia).
4. Nº colegiada Dra. Cevallos Madrid + formación + bio profesional.
5. Lista detallada de tratamientos por submarca + precios (si se publican).
6. Testimonios + casos reales (con consentimiento firmado RGPD).
7. Licencia web tipográfica (Erstoria / Gotham / Corinthia).
8. Sesión fotográfica propia (rostro de la doctora, clínica, equipamiento).
9. Dominio `cemadclinic.com` — registrado, en qué proveedor, acceso.
10. Integración CRM/email (Mailchimp / Brevo / ActiveCampaign).
11. Software de citas (Doctoralia, Agenda Pro, formulario simple).
12. Idiomas (ES + valenciano + inglés? por defecto ES único).
13. Plazo deseado, presupuesto, urgencias.

---

## Riesgos abiertos

Ver `risks.md` para detalle.

---

## Próximo paso

**Fase 2 — Sistema de diseño:** documentar `design-system.md` con paleta, tipografía, escalas, easings y crear primitives (Button, Section, Container, Heading, Card, Badge) en `src/shared/ui/primitives/`.

---

## 2026-05-18 — Análisis competitivo cemadclinic.com (live)

Sesión de refinamiento con agente de análisis sobre la web actual en producción.

### Stack legacy detectado
- WordPress 6.9.4 + OceanWP + Thrive Architect (page builder).
- 5 familias tipográficas conviviendo (Cormorant Garamond, Manrope, Open Sans, Roboto, Kanit). Incoherente.
- Sin AVIF/WebP, sin srcset serio. Logo PNG escalado.
- jQuery + jQuery UI + jQuery Migrate + GTM + GA4.

### Bugs graves en producción (oportunidad de superación)
- 3 H1 vacíos en home.
- Meta description ausente en home y `/endolaser/`.
- `/endolaser/` con placeholder publicado: "Enter your text here..." y FAQs "Content Toggle Headline" sin rellenar.
- Stack pesado → LCP ~2.5-3.5s en 4G.

### Puntos fuertes a igualar
1. Tagline diferenciadora: *"Construimos salud y estética. No marketing barato."* — postura clara.
2. Concepto narrativo "Método Kintsugi" (territorio propio de marca).
3. Paleta consistente dorado champagne + nude + carbón.
4. Wordmark serif elegante.
5. Form de captación simple visible en hero secundario.

### Debilidades aprovechables
1. Cero trust signals reales above-fold (sin nº colegiado visible, sin años, sin Doctoralia, sin reseñas Google).
2. Fotografía 100% stock-like, genérica. Sin retratos médicos, sin instalaciones, sin equipamiento, sin antes/después.
3. SEO técnico roto (H1 múltiples vacíos + meta description null + página con Lorem publicada).
4. Testimonios anónimos solo con iniciales ("F. Ros", "T. Carrasco"). Baja credibilidad.
5. Performance lastrada por Thrive/jQuery.

### Movimientos aplicados en esta web para superarla
- **Tipografía 3 familias coherentes** (Playfair Display + Montserrat + Corinthia) en lugar de 5.
- **Schema JSON-LD completo**: MedicalClinic + LocalBusiness + Physician + Service + Breadcrumb + FAQ.
- **Meta description y H1 únicos** por página vía `Layout.astro` + props.
- **Hero con retrato editorial real** (extraído del manual de marca, AVIF+WebP, priority).
- **Trust bar above-fold** con 4 micro-datos (años, especialidades, primera consulta, colegiada). Cifras [TODO confirmar].
- **Card hover con accent dorado animado** (scaleX 0.3→1), link-reveal underline.
- **Header con regla dorada al scroll**.
- **Section submarca con overlay** para garantizar contraste 4.5:1 sobre rose/silver.
- **Astro static + Preact islands selectivos** → JS shipped objetivo <60kb gz.
- **hreflang es-ES + x-default** + canonical absoluto.
- **`.htaccess` con HSTS, X-Frame-Options DENY, cache immutable para `/_astro/`**.

### Estrategia pendiente (requiere material cliente)
1. **Sesión de fotografía propia**: retrato Dra., clínica vacía iluminada, equipamiento real, manos detalle. Reemplaza el 100% stock que la live usa.
2. **Trust signals reales**: nº colegiada, años exactos, rating Google, embed Doctoralia, casos antes/después con consentimiento.
3. **Páginas servicio con contenido validado médicamente** (mínimo 800 palabras por submarca, FAQ específica).
4. **Testimonios con foto y nombre completo** (con consentimiento), embeds Doctoralia/Google reviews.
5. **Sticky CTA móvil "Reservar valoración"**.
6. **Galería antes/después con lightbox y consentimiento**.
