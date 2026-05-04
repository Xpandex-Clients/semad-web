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

- **Astro 6.x estático** (`output: 'static'`).
  - Razón: catálogo + landing premium con poca edición frecuente. SEO + performance fuertes. Hosting barato (Hostinger plan single, FTPS).
  - Alternativas descartadas: WordPress (la cliente no necesita editar diariamente; el coste de mantenimiento es mayor); Next.js (overkill, no hay app multi-rol).
- **Tailwind 4** vía `@tailwindcss/vite` con tokens CEMAD en `src/shared/styles/theme.css`.
- **Preact** (`compat: false`) para islas interactivas (menú móvil, FAQ, formularios). React no.
- **Tipografías:** licencias Erstoria/Gotham/Corinthia no confirmadas → fallback Cormorant Garamond / Inter Variable / Pinyon Script (Google Fonts vía `@fontsource*`). [TODO: confirmar licencias]
- **Iconos:** `astro-icon` + Lucide + Simple Icons.
- **Tests:** Vitest + Playwright.

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
/contacto                  → Form + mapa + WhatsApp
/aviso-legal · /politica-privacidad · /politica-cookies
```

> [TODO: validar AI con cliente — ¿blog?, ¿catálogo de tratamientos individuales por submarca?, ¿precios públicos?]

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
