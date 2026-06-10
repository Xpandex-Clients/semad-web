# design-system.md — semad-web (CEMAD)

> Sistema de diseño operativo. Fuente única de tokens, primitives y patrones. Cualquier valor visual debe vivir aquí (o derivarse de aquí). Si no encaja, **es decisión de marca, no estilismo**: no añadas un color/fuente/easing nuevo sin actualizar este doc.

Última actualización: 2026-05-05.

---

## 1. Fundamentos de marca (extraídos del manual de identidad)

- **Identidad:** clínica de medicina estética y antienvejecimiento premium en Valencia.
- **Concepto:** ciencia + arte. Razón áurea (Φ = 1.618) como principio compositivo.
- **Personalidad visual:** sofisticada, cálida, precisa, femenina, con autoridad médica.
- **5 submarcas:** Medicina Estética (matriz, dorado), IV Therapy (turquesa), Anti-Aging Avanzado (rosa palo), Hair Clinic (plata), Láser Dermoestético (cobre).

---

## 2. Paleta cromática

> Definida en `src/shared/styles/theme.css` como tokens `@theme`. Usar siempre vía variable CSS, nunca hex literal en componentes.

### 2.1 Primarios (matriz CEMAD)

| Token | Hex | Pantone | OKLCH (theme.css) | Uso recomendado |
|---|---|---|---|---|
| `--color-gold` | `#bd9b5f` | 7562 C | `oklch(73% .085 78)` | Color matriz, acentos, logo, botón primario |
| `--color-gold-light` | `#ffd38d` | — | `oklch(89% .085 82)` | Tints, fondos suaves, hover oscuro→claro |
| `--color-gold-dark` | `#8d7449` | — | `oklch(56% .075 76)` | Texto sobre fondos claros, focus ring |
| `--color-teal` | `#4cb8c3` | 319 C | `oklch(72% .075 200)` | Secundario, IV Therapy |
| `--color-teal-light` | `#b5dfe7` | — | `oklch(87% .045 210)` | Tints turquesa |
| `--color-teal-dark` | `#398087` | — | `oklch(53% .065 205)` | Texto sobre claro |

### 2.2 Submarcas

| Token | Hex | Pantone | Submarca |
|---|---|---|---|
| `--color-rose` | `#dfc2c4` | 5035 C | Anti-Aging Avanzado |
| `--color-silver` | `#b1b1b1` | 4281 C | Hair Clinic |
| `--color-copper` | `#8b634a` | 876 C | Láser Dermoestético |

### 2.3 Neutros

| Token | Hex | Uso |
|---|---|---|
| `--color-ink` | `#1d1d1b` | Texto principal sobre claro |
| `--color-paper` | `#ffffff` | Fondo principal |
| `--color-paper-soft` | `#f4f4f4` | Fondo secundario / cards |
| `--color-mute` | `#9d9d9c` | Texto secundario, bordes sutiles |

### 2.4 Reglas de uso

- **Ratio canónico:** 70% dorado matriz + 30% submarca. La submarca apoya, no domina.
- **Contraste mínimo:** texto cuerpo sobre fondos claros usar `--color-ink` (siempre cumple AA). Sobre fondos de submarca pastel (rose, silver), usar `--color-ink` o `--color-gold-dark`.
- **Texto sobre dorado liso (#bd9b5f):** usar blanco (`--color-paper`) — verificado AA para tamaños ≥ 18px.
- **Logo sobre fondo:** dorado en fondos claros; blanco en fondos oscuros o de submarca saturada.

---

## 3. Tipografía

### 3.1 Familias

| Rol | Familia oficial (manual) | Web (implementación) | Notas |
|---|---|---|---|
| Display / títulos | **Erstoria Regular** (serif didone) | **Playfair Display** (Google Fonts) — `@fontsource/playfair-display` | Sustituto prácticamente idéntico (didone con alto contraste). Migrar a Erstoria cuando la cliente aporte licencia web (woff2). |
| Cuerpo / UI | **Gotham Book Regular** | **Montserrat Variable** — `@fontsource-variable/montserrat` | Geométrica como Gotham, alta legibilidad. Subset latin. Migrar a Gotham cuando la cliente aporte licencia web. |
| Subtítulo con peso | **Gotham Bold** | **Montserrat 600/700** (mismo paquete) | |
| Script decorativa | **Corinthia Regular** | **Corinthia** (Google Fonts) — `@fontsource/corinthia` | Familia OFICIAL, disponible directamente. Para "Tu Mejor Versión" y claims estilizados. |

### 3.2 Escala (modular 1.250)

| Token | Valor | Px | Uso |
|---|---|---|---|
| `--text-xs` | 0.75rem | 12 | Captions, microcopy |
| `--text-sm` | 0.875rem | 14 | Texto secundario |
| `--text-base` | 1rem | 16 | Cuerpo principal |
| `--text-lg` | 1.125rem | 18 | Subtítulos UI |
| `--text-xl` | 1.25rem | 20 | Lead paragraphs |
| `--text-2xl` | 1.5rem | 24 | H4 |
| `--text-3xl` | 1.875rem | 30 | H3 |
| `--text-4xl` | 2.5rem | 40 | H2 |
| `--text-5xl` | 3.25rem | 52 | H1 mobile |
| `--text-6xl` | 4.25rem | 68 | H1 desktop / hero |

### 3.3 Reglas

- Títulos siempre con `font-family: var(--font-display)`, `font-weight: 500`, `letter-spacing: -0.01em`, `line-height: 1.15`.
- Cuerpo `line-height: 1.6` (legibilidad), max-width ~70 caracteres (`max-w-[70ch]`).
- Script (`var(--font-script)`) **solo para claims puntuales** ("Tu Mejor Versión", "Eleva tu Poderío"). Nunca para párrafos ni navegación.
- Mayúsculas (`text-transform: uppercase`) reservadas a etiquetas y labels — añadir `letter-spacing: 0.08em`.
- `font-display: swap` siempre.

---

## 4. Espaciado y layout

### 4.1 Spacing scale (4-step)

`--spacing-1..32` (0.25rem..8rem). Usar siempre múltiplos de 0.25rem (4px).

### 4.2 Containers

| Token | Max-width | Uso |
|---|---|---|
| `--container-narrow` | 64rem (1024) | Páginas de texto largo (privacidad, aviso legal) |
| `--container-default` | 76rem (1216) | Páginas estándar (servicios, sobre) |
| `--container-wide` | 90rem (1440) | Hero, secciones inmersivas |

### 4.3 Padding canónico de sección

- `padding-block: clamp(3rem, 8vw, 6rem)` (mobile→desktop)
- `padding-inline: clamp(1rem, 4vw, 2rem)`

---

## 5. Radii y shadows

| Token | Valor |
|---|---|
| `--radius-xs` | 0.25rem (botones small, badges) |
| `--radius-sm` | 0.5rem (inputs) |
| `--radius-md` | 0.75rem (cards) |
| `--radius-lg` | 1rem (modales, hero cards) |
| `--radius-xl` | 1.5rem (containers ilustrados) |
| `--radius-full` | 9999px (avatars, pills) |

| Token | Uso |
|---|---|
| `--shadow-card` | Cards en reposo |
| `--shadow-hover` | Cards al hover |
| `--shadow-modal` | Modales y popovers |

---

## 6. Easings y duraciones

| Token | Curva |
|---|---|
| `--ease-out` | `cubic-bezier(0.22, 1, 0.36, 1)` — entradas, hovers |
| `--ease-in-out` | `cubic-bezier(0.65, 0, 0.35, 1)` — transiciones largas |

| Duración | Valor | Uso |
|---|---|---|
| `--duration-fast` | 150ms | Hovers, focus |
| `--duration-base` | 240ms | Aparición de elementos |
| `--duration-slow` | 400ms | Hero reveal, transiciones de página |

> Toda animación honra `prefers-reduced-motion: reduce` (regla global en `globals.css`).

---

## 7. Primitives (a implementar en Fase 2)

Ubicación: `src/shared/ui/primitives/`.

| Componente | Variantes | Notas |
|---|---|---|
| `<Button>` | `primary` (gold), `secondary` (outline ink), `ghost` (text), `submarca` (color por prop) | Tamaños sm/md/lg. Min-height 44 móvil. |
| `<Container>` | `narrow`, `default`, `wide` | Wraps en `<div>` con max-width y padding-inline canónico |
| `<Section>` | tone: `paper`, `paper-soft`, `ink`, `gold`, `submarca` (color por prop) | Padding-block canónico |
| `<Heading>` | levels h1-h4, opcional `script` para subtítulos decorativos | font-family display por defecto |
| `<Card>` | `flat`, `elevated`, `outline` | Radius md, shadow opcional |
| `<Badge>` | colors gold/teal/rose/silver/copper | Etiquetas de submarca |
| `<Logo>` | `vertical`, `horizontal`, `isotipo` | Tamaños responsive |
| `<Quote>` | con script tipográfico para destacados | Para hero claim |

---

## 8. Iconografía

- **Lucide** como set principal (UI: arrow, menu, x, phone, mail, calendar, instagram, whatsapp).
- **Simple Icons** para redes sociales con marca registrada.
- **Iconos de marca CEMAD:** isotipo "CM" entrelazado en círculo (extraído del manual, p. 20).
- Tamaño base 20px (cuerpo), 24px (UI), 32px (hero accent).
- Stroke-width consistente: 1.5 en Lucide.

---

## 9. Reglas no negociables (heredadas del manual)

- **Logo:** no rotar, no modificar tagline, no cambiar tipografía, no añadir efectos. Conservar área de seguridad (altura de la "C" alrededor del logotipo).
- **Tamaño mínimo digital:** logotipo 140px ancho, isotipo 35px ancho.
- **Sobre fotos oscuras o coloridas:** versión blanca del logo. Sobre fondo claro: versión dorada.
- **Patrones decorativos:** disponibles en `client-input/assets/brand/extracted/` (p. 50). Usarlos en fondos secundarios con opacidad baja (≤ 15%).

---

## 10. Pendientes de validación

- [ ] Validar visualmente con la cliente que Playfair Display + Montserrat son aceptables como sustitutos de Erstoria + Gotham (mostrar render lado a lado del logo y H1).
- [ ] Solicitar a la cliente las licencias web de Erstoria y Gotham; si las aporta (woff2), migración 1-línea (cambiar `--font-display` y `--font-body` en `theme.css`).
- [ ] Confirmar tono de copy ante la cliente: ¿más cálido/cercano o más técnico/médico?
- [ ] Validar contraste de submarcas pastel (rose, silver) en headings — ¿usamos `--color-ink` o el dark de la submarca?
- [ ] Aprobación del moodboard fotográfico (Fase 6) para definir filtro/tonalidad común
