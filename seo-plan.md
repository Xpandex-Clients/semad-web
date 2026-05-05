# seo-plan.md — semad-web (CEMAD)

> Estrategia SEO: keywords, intención, schemas, internal linking. La validación detallada se hace en Fase 8 con el subagente `seo-strategist` y la skill `/vibe-seo-audit`.

Última actualización: 2026-05-05 (apéndice §9 con revisión seo-strategist).

---

## 1. Estrategia general

- **Localización:** SEO local Valencia (clínica con dirección física verificable).
- **Idioma único:** `es-ES` (hreflang `es-ES`, lang `es`).
- **Intención dominante:** transaccional + informacional medio-alto (usuarias evaluando clínicas).
- **Diferenciadores:** marca premium identificable, doctora visible, 5 líneas de servicio especializadas.
- **Authority signal:** clínica médica con responsable colegiada (`MedicalBusiness` / `MedicalClinic` schema).

---

## 2. Keywords por página

> [TODO: validación con búsqueda real (ahrefs/semrush) en Fase 8.] Volúmenes estimados informados; refinar antes de copy final.

### 2.1 Home (`/`)

**Primary:**
- `clínica medicina estética Valencia` (alta intención local)
- `clínica antiaging Valencia`
- `medicina estética Valencia centro`

**Secondary:**
- `Dra. Abigail Cevallos Madrid` (marca personal)
- `CEMAD clínica`
- `medicina estética anti-aging Valencia`

### 2.2 `/medicina-estetica`

**Primary:**
- `medicina estética Valencia`
- `tratamientos faciales Valencia`

**Secondary:**
- `botox Valencia` `[TODO: confirmar si se ofrece]`
- `ácido hialurónico Valencia`
- `mesoterapia facial Valencia`

### 2.3 `/iv-therapy`

**Primary:**
- `IV therapy Valencia`
- `vitaminoterapia intravenosa Valencia`

**Secondary:**
- `sueroterapia estética Valencia`
- `terapia intravenosa antiaging`

### 2.4 `/anti-aging-avanzado`

**Primary:**
- `tratamiento antiaging Valencia`
- `medicina antienvejecimiento Valencia`

**Secondary:**
- `rejuvenecimiento facial Valencia`
- `tratamiento antiarrugas Valencia`

### 2.5 `/hair-clinic`

**Primary:**
- `clínica capilar Valencia`
- `tratamiento caída cabello Valencia`

**Secondary:**
- `mesoterapia capilar Valencia`
- `injerto capilar Valencia` `[TODO: confirmar si se ofrece]`

### 2.6 `/laser-dermoestetico`

**Primary:**
- `láser dermoestético Valencia`
- `depilación láser Valencia` `[TODO: confirmar si se ofrece]`

**Secondary:**
- `rejuvenecimiento láser Valencia`
- `manchas piel láser Valencia`

### 2.7 `/dra-abigail-cevallos`

**Primary:**
- `Dra. Abigail Cevallos Madrid`
- `médica estética Valencia`

**Secondary:**
- `mejor médica estética Valencia` (long-tail aspiracional)

### 2.8 `/blog` y `/blog/[slug]` (v1)

> Estrategia: contenido informacional medio-alto + autoridad médica. Cada artículo enlaza a su submarca y al CTA de reserva.

**Categorías iniciales** (alineadas con submarcas):
- `medicina-estetica`, `iv-therapy`, `anti-aging`, `hair-clinic`, `laser`, `clinica` (general).

**Pillar topics seed:**
- "Primera consulta medicina estética" (informacional / awareness)
- "Tratamiento antiaging serio vs marketing" (autoridad)
- "Vitaminoterapia intravenosa: beneficios y mitos" (informacional)
- "Caída del cabello en mujeres: causas y tratamientos" (alta intención)
- "Visión de la medicina estética con criterio" (Dra. Cevallos, autoridad personal)

Cada post incluirá `Article` JSON-LD con `author` Person, `mainEntityOfPage`, `image`, `datePublished`, `inLanguage es-ES`.

---

## 3. Schemas JSON-LD

### 3.1 Home — `MedicalClinic` (extiende `LocalBusiness`)

```json
{
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "CEMAD — Aesthetic Anti-Aging Clinic",
  "url": "https://cemadclinic.com",
  "logo": "https://cemadclinic.com/brand/cemad-logo.svg",
  "image": "https://cemadclinic.com/og/home.jpg",
  "telephone": "+34672300591",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Calle Isabel la Católica 4, piso 1-2",
    "postalCode": "46004",
    "addressLocality": "Valencia",
    "addressRegion": "Comunidad Valenciana",
    "addressCountry": "ES"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": "[TODO]", "longitude": "[TODO]" },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Mo","Tu","We","Th","Fr"], "opens": "10:00", "closes": "20:00" }
  ],
  "medicalSpecialty": ["Dermatology", "PlasticSurgery"],
  "priceRange": "€€€",
  "sameAs": [ "https://instagram.com/cemadclinic" ]
}
```

### 3.2 `Person` (Dra. Cevallos)

En `/dra-abigail-cevallos`. Incluir `worksFor` referenciando la `MedicalClinic`, `jobTitle`, `alumniOf` `[TODO]`, `memberOf` (colegios profesionales) `[TODO]`.

### 3.3 `Service` (cada submarca)

Cada landing publica un `Service` con `provider` referenciando la `MedicalClinic`, `serviceType`, `areaServed`, `description`, lista de `hasOfferCatalog` con tratamientos individuales `[TODO]`.

### 3.4 `BreadcrumbList`

En cada subpágina (Home › Especialidades › [Submarca]).

### 3.5 `Article` (cada post del blog)

En cada `/blog/[slug]`. Incluye `headline`, `image`, `author` (referencia a `Person` Dra. Cevallos), `publisher` (referencia a `MedicalClinic`), `datePublished`, `dateModified`, `mainEntityOfPage`, `inLanguage` es-ES.

### 3.6 `WebSite` con `SearchAction`

Solo si añadimos buscador interno (probablemente no en v1).

---

## 4. Meta tags por página

Pattern:
- `<title>`: `<keyword principal> | CEMAD Valencia` (≤ 60 chars)
- `<meta description>`: 120–155 chars, incluye keyword principal + diferenciador + CTA implícito
- `og:title`, `og:description`, `og:image` (1200×630), `og:type` (`website` o `article`)
- `twitter:card`: `summary_large_image`
- `<link rel="canonical">` en cada página

### Ejemplos

**Home**
- Title: "Medicina estética y antiaging en Valencia | CEMAD"
- Desc: "CEMAD es la clínica de medicina estética y antiaging de la Dra. Cevallos Madrid en el centro de Valencia. Tu mejor versión, en manos expertas."

**Medicina Estética**
- Title: "Medicina estética en Valencia | CEMAD"
- Desc: "Tratamientos faciales y corporales personalizados. Diagnóstico médico, tecnología avanzada, resultados naturales. Reserva tu primera consulta."

---

## 5. Internal linking

- Home → 5 submarcas (cards) + sobre la doctora.
- Sobre la doctora → 5 submarcas (footer de página) + contacto.
- Cada submarca → 4 submarcas relacionadas (footer "También te puede interesar") + sobre la doctora.
- Footer global con las 5 submarcas en cada página.

---

## 6. Sitemap y robots

- `sitemap.xml` generado por `@astrojs/sitemap` con todas las páginas estáticas.
- `robots.txt`: allow all, point a sitemap.
- Excluir `/_dev/` (storyboard interno) si se publica.

---

## 7. Performance como SEO

- Core Web Vitals: LCP < 2.5s, INP < 200ms, CLS < 0.1.
- Imágenes hero con `fetchpriority="high"` y `loading="eager"`.
- Resto lazy.
- Fonts con `font-display: swap`.

---

## 8. Pendientes Fase 8

- [x] Search intent validation parcial (revisión seo-strategist 2026-05-05; volúmenes a verificar con SEMrush/Ahrefs antes del calendario editorial)
- [ ] Coordenadas GPS exactas para schema
- [ ] Lista oficial de tratamientos por submarca (impacta `Service.hasOfferCatalog`)
- [ ] Foto OG por página (ver `images-plan.md`)
- [ ] Confirmar nº colegiada + colegios profesionales para `Person.memberOf`
- [ ] Verificar si la web previa tiene URLs indexadas → plan de redirecciones 301
- [ ] Google Search Console + Bing Webmaster setup post-launch
- [ ] Google Business Profile (creación/reclamación) — prioridad 1 SEO local
- [ ] Citaciones NAP coherentes (Doctoralia, Top Doctors, Páginas Amarillas, etc.)

---

## 9. Apéndice — Revisión seo-strategist (2026-05-05)

> Refinamientos sobre el plan base. Las acciones críticas/altas que dependen sólo de implementación ya están aplicadas en el repo en este commit.

### 9.1 Schemas — correcciones aplicadas

- `medicalSpecialty`: `CosmeticDentistry` ❌ → `["Dermatology", "PlasticSurgery"]` ✅
- `Person` → preferir subtipo `Physician` (señal E-E-A-T más fuerte que `Person` plano).
- `@id` absolutos para todas las entidades — habilita referencias cruzadas (`MedicalClinic.employee` referencia a doctora por `@id` en lugar de duplicar).
- `Service` se mantiene; `MedicalProcedure` requeriría validación clínica del catálogo.
- `FAQPage` schema queda **bloqueado** hasta que las FAQs estén validadas médicamente (Fase 5). Las provisionales no emiten schema.
- Páginas legales: sin schema (anti-patrón).

### 9.2 Internal linking — anchor texts

Reemplazar el "Descubrir →" genérico de las cards de Home por anchors específicos que incluyan keyword + ciudad (queda para Fase copy con copywriter):

| Destino | Anchor recomendado |
|---|---|
| `/medicina-estetica` | "Medicina Estética en Valencia" |
| `/iv-therapy` | "IV Therapy Valencia" |
| `/anti-aging-avanzado` | "Anti-Aging Avanzado Valencia" |
| `/hair-clinic` | "Hair Clinic Valencia" |
| `/laser-dermoestetico` | "Láser Dermoestético Valencia" |
| `/dra-abigail-cevallos` | "Conoce a la Dra. Abigail Cevallos Madrid" |
| `/contacto` (CTA) | "Reserva tu primera consulta en CEMAD" |

### 9.3 Keywords adicionales (sin volúmenes — verificar)

- Diferenciador médico vs. centro estético: `clínica médica estética Valencia`, `medicina estética con médico Valencia`, `consulta medicina estética Valencia`.
- IV Therapy: usar paralelamente `terapia intravenosa vitaminas Valencia`, `nutrición intravenosa Valencia`, `suero vitaminas Valencia` (mercado ES busca menos en inglés que en cierre premium).
- Hair Clinic: `caída capilar tratamiento Valencia`, `alopecia androgenética Valencia`, `PRP capilar Valencia`.
- Láser: `manchas solares láser Valencia`, `cicatrices láser Valencia`, **evitar competir** con cadenas de bajo coste por "depilación láser Valencia" salvo posicionar como "depilación láser médica Valencia".
- Doctora: evitar superlativos ("mejor médica…") — riesgo YMYL. Preferir `médica especialista en medicina estética Valencia`.
- Blog informacional (alcance nacional): `qué es la mesoterapia facial`, `diferencia entre medicina estética y cirugía plástica`, `cuánto dura el bótox`, `pérdida de cabello en mujeres tratamiento`.

`[TODO Fase 8 verify]` — todas las anteriores requieren validación de volumen y dificultad antes de priorizar el calendario editorial.

### 9.4 Riesgos críticos

- **Thin content en submarcas stub**: aplicado `noindex, follow` en `[submarca].astro` hasta que llegue copy validado. Retirar página a página tras Fase 5.
- **E-E-A-T débil en `/dra-abigail-cevallos`**: foto, bio, nº colegiada y formación son **prioridad 1 cliente** — sin esto el schema `Physician` carece de sustento verificable.
- **JSON-LD + ViewTransitions**: verificar con DevTools tras `npm run build && npm run preview` que el `<head>` se reemplaza correctamente al navegar entre páginas (Astro maneja swap automático del head, pero confirmamos).
- **Google Business Profile**: para una clínica con dirección física en Valencia, GBP es igual o más importante que el SEO orgánico (Map Pack domina las SERPs locales).

