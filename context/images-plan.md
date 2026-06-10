# images-plan.md — semad-web (CEMAD)

> Plan visual: mood board, imágenes necesarias por sección, fuentes (cliente / stock / IA), prompts de generación y procesado. Fase 6 del checklist. Ejecutar con `image-art-director` + `/vibe-image-pipeline` + `/vibe-image-edit` + `/vibe-media-optimize`.

Última actualización: 2026-05-05.

---

## 1. Mood board (definido por el manual de identidad)

### Atmósfera
- **Luminosa, cálida** — luz natural, dorado suave, blanco crema.
- **Piel realzada** — brillo saludable, sin retoque exagerado.
- **Femenina y elegante** — sin tópicos, sin "antes/después" ostentoso.
- **Macro de detalle** — gotas de serum, joyería sutil, diamantes (paleta corporativa).
- **Rostros enteros, miradas frontales** — confianza, conexión.
- **Composiciones con espirales áureas** (ratio Φ) cuando refuerce un hero.

### Anti-mood (NO hacer)
- Imágenes "antes/después" agresivas.
- Stock genérico de medicina con guantes de látex y jeringas.
- Sonrisas exageradas en publicidad farmacéutica.
- Caras IA inventadas (regla del kickoff).
- Photoshop excesivo / piel de plástico.

---

## 2. Paleta visual por contexto

| Contexto | Tonalidad dominante | Apoyo |
|---|---|---|
| Hero matriz / Home | Dorado luminoso `--color-gold-light` | Blanco, ink |
| IV Therapy | Turquesa `--color-teal` | Gotas, líquidos cristalinos |
| Anti-Aging | Rosa palo `--color-rose` | Pieles maduras radiantes |
| Hair Clinic | Plata + neutro | Cabello sano, brillo natural |
| Láser Dermoestético | Cobre `--color-copper` | Texturas piel, luz dramática |

---

## 3. Inventario por página

### 3.1 Home

| Slot | Tipo | Especificación | Fuente | Estado |
|---|---|---|---|---|
| Hero principal | Retrato premium femenino | Modelo 30-50 años, piel luminosa, mirada calmada, fondo dorado o blanco/marble | Stock licenciado (Adobe Stock / Unsplash+) | `[TODO: sourcing]` |
| Tarjetas submarca (×5) | 1 imagen evocativa por submarca | Ratio 4:5, color de submarca dominante, detalle (gotas/cabello/piel) | Stock + procesado con duotono | `[TODO]` |
| Sobre la doctora teaser | Retrato real Dra. Cevallos | Sesión propia, fondo neutro o clínica | **Cliente** | `[TODO: solicitar]` |
| Sección "razones" | 3 iconos vectoriales | De Lucide, color gold | Built-in | OK |
| OG image | 1200×630, marca + tagline | Diseño propio sobre fondo dorado | Built-in design | `[TODO: diseñar]` |

### 3.2 Landings de submarca (×5)

Cada una:
- 1 hero del color de submarca (rostro o detalle macro).
- 3-6 thumbnails de tratamientos (ratio 1:1 o 4:5). `[TODO: sourcing]`
- 1 imagen de aparatología si aplica (Láser, Hair, IV). `[TODO: cliente o stock médico licenciado]`

### 3.3 Sobre la doctora

| Slot | Tipo | Fuente |
|---|---|---|
| Hero retrato | Foto profesional de la Dra. Cevallos en clínica | **Cliente** `[TODO]` |
| Galería instalaciones | 3-5 fotos clínica | **Cliente** `[TODO]` |

### 3.4 Contacto

- Mapa Valencia con marcador (Google Maps embed o estático).

### 3.5 Brand assets

- Logos en `public/brand/`: `cemad-logo.svg`, `cemad-logo-vertical.svg`, `cemad-isotipo.svg`, versiones blanco/dorado/negro.
  - **Estado actual:** vectoriales NO disponibles. Se han extraído PNGs del PDF en `client-input/assets/brand/extracted/` como interim. `[TODO: solicitar SVG/AI a cliente]`.
- Favicon set: 32, 16, 180 (apple-touch), 192 maskable, 512 maskable.
- OG image plantilla: fondo dorado, isotipo blanco, tagline en script.

---

## 4. Sourcing strategy

### 4.1 Prioridad
1. **Sesión propia de la clínica** (idealmente, para rostro de la doctora y instalaciones).
2. **Stock licenciado premium** (Adobe Stock, Unsplash+, Pexels Pro) para retratos genéricos.
3. **Generación IA** solo para: detalles macro abstractos (gotas, texturas, espirales áureas decorativas) — **NUNCA caras de personas reales**.

### 4.2 Stock recomendado

- **Adobe Stock** keywords: `aesthetic medicine portrait`, `skin glow woman`, `serum drop macro`, `golden ratio beauty`.
- **Unsplash+** colección "Beauty & Wellness".
- Coherencia: filtrar siempre por temperatura cálida + iluminación natural.

### 4.3 Generación IA (Adobe Firefly / Midjourney)

> Solo para apoyos abstractos. Nunca caras reales/inventadas que pretendan ser pacientes/staff.

**Prompts ejemplo (texturas + macros):**

- "Macro photography of a serum drop falling, cinematic lighting, golden honey background, sharp focus, depth of field, 4k"
- "Abstract golden spiral pattern, soft gradient, luxury aesthetic, minimalist, cream and gold tones"
- "Liquid gold texture flowing, slow motion still, premium beauty product aesthetic"
- "Crystal facet macro detail, turquoise blue, refractive light, ultra detailed"

---

## 5. Procesado y optimización (Fase 11 — `/vibe-media-optimize`)

- Format: AVIF (primario) + WebP (fallback) + JPEG (legacy).
- Sizes responsive con `srcset`: 480, 768, 1024, 1440, 1920.
- Calidad: AVIF q60 / WebP q75 (visual lossless en retratos).
- LCP heroes: dimensiones explícitas + `fetchpriority="high"` + preload en `<head>`.
- Lazy load por defecto en el resto.
- Filtros consistentes: ligero aumento de cálido (+5 temp), curvas suaves para piel.

---

## 6. Alt text guidelines (a11y + SEO)

- **Decorativas:** `alt=""` y `aria-hidden="true"`.
- **Informativas:** descripción concreta + función. NO meta-keywords stuffing.
  - ✅ "Dra. Abigail Cevallos Madrid sonriendo en consulta"
  - ❌ "doctora medicina estética valencia mejor antiaging Cevallos"
- **De marca:** `alt="CEMAD — Aesthetic Anti-Aging Clinic"`

---

## 7. Pendientes priorizados

1. `[CRÍTICO]` Logo en SVG/AI/EPS (cliente).
2. `[CRÍTICO]` Foto profesional de la Dra. Cevallos.
3. `[ALTO]` Fotos de la clínica (recepción, sala de tratamiento, equipamiento).
4. `[ALTO]` Sourcing de retratos stock para hero matriz + 5 submarcas (≈ 6 imágenes).
5. `[MEDIO]` Diseñar OG image en marca.
6. `[MEDIO]` Generar/sourcing 4-6 thumbnails por submarca (≈ 25 imágenes).
7. `[BAJO]` Patrones decorativos del manual (p. 50) como recurso de fondo.
