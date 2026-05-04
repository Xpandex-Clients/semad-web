# Briefing — CEMAD Aesthetic Anti-Aging Clinic

> Briefing canónico reformateado a partir del transcript de la reunión inicial (`briefing-original.txt`) y el **Manual de Identidad Corporativa CEMAD** (39 pp, en `assets/brand/CEMAD-manual-identidad.pdf`). Cuando el transcript original entra en conflicto con el manual de marca, **prevalece el manual** (es la fuente oficial de la cliente). El transcript hablaba de "Smart Clinic" como nombre genérico — la marca real es CEMAD.

---

## 1. Identidad del cliente

- **Marca:** CEMAD® — *Aesthetic Anti-Aging Clinic*
- **Tagline matriz:** *"Donde la ciencia y el arte se unen para revelar Tu Mejor Versión"*
- **Cliente / propietaria:** Dra. Abigail Cevallos Madrid (Medicina Estética)
- **Ubicación:** Calle Isabel la Católica 4, piso 1-2, CP 46004 — Valencia, España
- **Teléfono:** +34 672 30 05 91
- **Instagram:** [@cemadclinic](https://instagram.com/cemadclinic)
- **Web objetivo:** `www.cemadclinic.com`
- **Estado de web previa:** existe una página anterior (URL/accesos pendientes de confirmar). Servirá como punto de referencia, no como base técnica — el nuevo sitio se construye desde cero con stack premium.

## 2. Posicionamiento

Clínica de medicina estética y antienvejecimiento de gama alta en el centro histórico de Valencia. Posicionamiento **premium** apoyado en:

- Identidad visual cuidada (manual de 39 pp con tipografías propias, dorado/turquesa Pantone, sistema de submarcas con paletas diferenciadas).
- Discurso "ciencia + arte" — autoridad médica con sensibilidad estética.
- Razón áurea como elemento conceptual (logo construido sobre Φ = 1.618).
- Doctora identificable como cara visible (Dra. Abigail Cevallos Madrid).

## 3. Líneas de servicio (submarcas)

El manual define **5 submarcas** con color y promesa propia, todas bajo la marca matriz CEMAD:

| Submarca | Color | Promesa / claim |
|---|---|---|
| **CEMAD Medicina Estética** | Dorado `#bd9b5f` (matriz) | *"Donde la ciencia y el arte se unen para revelar Tu Mejor Versión"* |
| **CEMAD IV Therapy** | Turquesa `#4cb8c3` | *"Eleva tu Poderío gota a gota"* |
| **CEMAD Anti-Aging Avanzado** | Rosa palo `#dfc2c4` | *"Tu Belleza no tiene fecha de caducidad"* |
| **CEMAD Hair Clinic** | Plata / gris `#b1b1b1` | *"Siente el poder de tu Renacimiento Capilar"* |
| **CEMAD Láser Dermoestético** | Cobre `#8b634a` | *"Transforma tu piel con el Poder del Láser y la precisión de la tecnología"* |

## 4. Objetivos del proyecto web

> [TODO: confirmar con cliente] El briefing original no especifica objetivos cuantitativos. Asumimos para arrancar (revisar en feedback):

1. **Captación de leads cualificados** — formulario de contacto + reserva de primera consulta.
2. **Autoridad médica** — perfil de la Dra. Cevallos Madrid, formación, enfoque.
3. **Catálogo de servicios estructurado por submarca** — cada línea con su landing dedicada y paleta propia.
4. **SEO local Valencia** — clínica estética Valencia, medicina estética Valencia centro, antiaging Valencia.
5. **Conversión vía WhatsApp / llamada** — CTA persistente con teléfono +34 672 30 05 91.

## 5. Audiencia objetivo

> [TODO: validar con cliente]

- **Primaria:** mujeres 35-60 años, residentes Valencia y área metropolitana, con poder adquisitivo medio-alto, interesadas en tratamientos antienvejecimiento, medicina estética facial/corporal y bienestar.
- **Secundaria:** público masculino 35-55 (hair clinic, anti-aging, IV therapy).
- **Tono esperado:** confianza, calidez, sofisticación, rigor médico — nada agresivo ni de "antes/después" cliché.

## 6. Sistema de diseño (extraído del manual de marca)

### Paleta cromática

**Colores primarios corporativos**

| Token | Hex | Pantone | Uso |
|---|---|---|---|
| `gold` | `#bd9b5f` | 7562 C | Color matriz, acentos, logos |
| `gold-light` | `#ffd38d` | — | Tints, fondos suaves |
| `gold-dark` | `#8d7449` | — | Profundidad, hover |
| `teal` | `#4cb8c3` | 319 C | Secundario corporativo, IV Therapy |
| `teal-light` | `#b5dfe7` | — | Tints |
| `teal-dark` | `#398087` | — | Hover/profundidad |

**Colores de submarca**

| Token | Hex | Pantone | Submarca |
|---|---|---|---|
| `rose` | `#dfc2c4` | 5035 C | Anti-Aging Avanzado |
| `silver` | `#b1b1b1` | 4281 C | Hair Clinic |
| `copper` | `#8b634a` | 876 C | Láser Dermoestético |

**Neutros**

| Token | Hex | Uso |
|---|---|---|
| `ink` | `#1d1d1b` | Texto principal sobre fondo claro |
| `paper` | `#ffffff` | Fondo principal |
| `paper-soft` | `#f4f4f4` | Fondos secundarios |
| `mute` | `#9d9d9c` | Texto secundario, bordes |

### Tipografía

| Rol | Fuente declarada | Fallback web (Google Fonts) |
|---|---|---|
| Display / Títulos serif elegante | **Erstoria Regular** | **Cormorant Garamond** o **Playfair Display** (similar serif refinada) |
| Cuerpo / UI | **Gotham Book Regular** | **Inter** o **Montserrat** (sans humanista) |
| Subtítulos con peso | **Gotham Bold** | **Inter Bold** / **Montserrat Bold** |
| Script decorativa (claims, "Tu Mejor Versión") | **Corinthia Regular** | **Pinyon Script** o **Allura** (Google Fonts) |

> **Nota técnica:** Erstoria, Gotham y Corinthia son licenciadas. Si la cliente no aporta licencia web, usaremos los fallbacks de Google Fonts (gratuitos y de calidad similar). Dejar `[TODO: confirmar licencia tipográfica]`.

### Estilo fotográfico (del manual)

- Retratos de mujer en primer plano, piel luminosa, maquillaje limpio.
- Iluminación cálida, fondos lisos o degradados sutiles (frecuentemente del color de la submarca).
- Macros de detalle (gotas de serum, joyas, diamantes) como apoyo conceptual.
- Composiciones con razón áurea visible (espirales sobre rostros).
- **NUNCA** caras IA inventadas — usar stock licenciado o sesión propia de la clínica si la cliente la aporta.

### Iconografía / patrones

- Isotipo "CM" entrelazado en círculo con tagline circular *"Aesthetic Anti-Aging Clinic"*.
- Patrones de fondo con repetición del isotipo en bajo contraste (ver pp. 50 del manual).
- Elementos de espiral áurea como recurso decorativo.

## 7. Arquitectura de información (propuesta inicial)

> [TODO: validar] El briefing no especifica navegación. Propuesta basada en estructura típica de clínica premium + 5 submarcas:

```
/                          → Home (hero matriz + 5 submarcas + doctora + testimonios + contacto)
/medicina-estetica         → Submarca dorada
/anti-aging-avanzado       → Submarca rosa
/iv-therapy                → Submarca turquesa
/hair-clinic               → Submarca plata
/laser-dermoestetico       → Submarca cobre
/dra-abigail-cevallos      → Sobre la doctora (perfil, formación, enfoque)
/contacto                  → Formulario + mapa Valencia + WhatsApp + horarios
/aviso-legal               → Compliance
/politica-privacidad       → RGPD
/politica-cookies          → Cookies
```

## 8. Stack técnico

- **Framework:** Astro 6.2.2 (ya scaffoldeado en este repo)
- **Estilos:** Tailwind 4 con tokens del manual aplicados a `theme.css`
- **Interactividad:** islas Preact donde sea necesaria (acordeones FAQ, menú móvil, formulario)
- **Contenido:** Content Collections para servicios y posts (si hay blog)
- **Formularios:** Astro Actions + integración con email/CRM (a definir)
- **Imágenes:** `<Image>` de Astro con AVIF/WebP, lazy loading
- **Animaciones:** sutiles, honrando `prefers-reduced-motion`
- **A11y:** WCAG 2.2 AA

## 9. Deploy

- **Hosting:** Hostinger (servidor `187.124.60.15`, ya configurado en memoria del agente)
- **Pipeline:** GitHub Actions → FTPS → Hostinger (skill `vibe-deploy-hostinger`)
- **Dominio:** `cemadclinic.com` — [TODO: confirmar si ya está registrado y si hostinger tiene acceso]
- **Entornos:** staging (subdominio) → producción (vía PR a main)

## 10. Hitos / plazos

> [TODO: confirmar plazos con cliente] El briefing original no especifica fechas ni presupuesto.

Estimación interna:
- Fase 1-3 (fundamentos + design system + layout): semana 1
- Fase 4-7 (interactividad + contenido + imágenes + animaciones): semana 2-3
- Fase 8-12 (SEO + formularios + a11y + perf + sec): semana 4
- Fase 13-16 (compliance + tests + deploy staging + go-live): semana 5

## 11. Pendientes a confirmar con la cliente (`[TODO]`)

1. Objetivos cuantitativos de captación (leads/mes esperados).
2. Audiencia primaria/secundaria — validar perfil propuesto.
3. Servicios concretos dentro de cada submarca (lista detallada y precios si aplica).
4. Formación de la Dra. Cevallos Madrid (CV, especialidades, colegiación) para la página "Sobre".
5. Testimonios y casos reales (con consentimiento firmado para publicación).
6. Sesión fotográfica propia o uso de stock con consistencia visual.
7. Licencia web de Erstoria / Gotham / Corinthia, o conformidad con fallbacks Google Fonts.
8. Acceso a la web previa (URL, hosting actual, contenido reaprovechable).
9. Dominio `cemadclinic.com`: ¿registrado? ¿quién lo gestiona?
10. RGPD: responsable de tratamiento, finalidades, encargados (formulario contacto).
11. Integración CRM/email marketing (Mailchimp, Brevo, ActiveCampaign…).
12. Política de citas: formulario simple, calendario en línea, integración con software clínico (Doctoralia, Agenda Pro)…
13. Idiomas: español únicamente, o también valenciano / inglés.

## 12. Materiales del cliente recibidos

- ✅ `client-input/briefing-original.txt` — transcript reunión inicial (con discrepancias resueltas en este briefing canónico).
- ✅ `client-input/assets/brand/CEMAD-manual-identidad.pdf` — manual completo de identidad (39 pp).
- ⏳ Pendiente: foto de la doctora, fotos de la clínica, logos en SVG/PNG vectoriales, fuentes tipográficas con licencia.
