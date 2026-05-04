# risks.md — semad-web (CEMAD)

> Riesgos abiertos del proyecto. Cada uno con impacto, probabilidad, mitigación y owner. Revísalo antes de cada hito.

Última actualización: 2026-05-05.

| # | Riesgo | Impacto | Prob. | Mitigación | Owner |
|---|---|---|---|---|---|
| R1 | **Tipografías licenciadas (Erstoria, Gotham) sin licencia web confirmada** | Bajo-medio: render visual muy próximo con sustitutos | Alta | Sustitutos idénticos en Google Fonts: **Playfair Display** (didone como Erstoria) + **Montserrat Variable** (geométrica como Gotham). **Corinthia** sí está en Google Fonts → usamos la oficial. Migración a Erstoria/Gotham con cambio 1-línea cuando la cliente aporte woff2 con licencia web | Cliente / Carlos |
| R2 | **No hay logo en SVG/AI** — solo en PDF de manual | Bajo si el PDF tiene calidad; alto si hay que redibujar | Media | Extraer del PDF como PNG/SVG mientras la cliente envía vectoriales. `[TODO: solicitar kit de marca]` | Cliente |
| R3 | **Fotografía propia inexistente** — manual usa stock o fotos no contractuales | Alto en autenticidad y SEO local | Alta | Stock licenciado consistente con el mood del manual + sesión propia cuando se pueda agendar | Cliente |
| R4 | **Cifras / claims cliente-verificables vacíos** (años de experiencia, nº pacientes, premios) | Medio: copy más débil | Alta | Dejar `[TODO: confirmar]` y usar copy emocional/conceptual hasta validar | Cliente |
| R5 | **Datos médicos en formulario** (motivo de consulta) caen en LOPDGDD art. 9 | Alto: incumplimiento RGPD | Media | Diseñar formulario que NO pida motivo médico — solo nombre, email, teléfono, "te llamamos para informarte". Si se necesita motivo, consentimiento explícito reforzado | Carlos |
| R6 | **Dominio cemadclinic.com no confirmado** (registrado, gestionado por quién) | Bloqueante para deploy | Media | Confirmar en kickoff con cliente. Plan B: subdominio temporal en Hostinger | Cliente |
| R7 | **Web previa con SEO existente** | Bajo si se hacen redirecciones | Media | Auditar URLs antiguas → 301 al nuevo árbol. Sitemap antiguo a Google Search Console | Carlos |
| R8 | **5 submarcas → riesgo de fragmentación visual** (cada una con paleta) | Medio: marca matriz pierde fuerza | Media | Reglas estrictas de ratio: 70% dorado matriz / 30% submarca. Layout consistente cross-submarca | Carlos |
| R9 | **Plazos no acordados** | Alto en gestión de expectativas | Alta | Confirmar plazo en kickoff, documentar en `CONTEXT-project.md`, plan B fase 1 (info) + fase 2 (formulario+integraciones) | Cliente |
| R10 | **Texto de aviso legal / privacidad sin abogado** | Alto: riesgo legal | Media | Plantilla genérica RGPD-compliant + nota visible "borrador, validar con asesor legal" hasta firma | Cliente |
| R11 | **Cara real de la doctora en imágenes hero** | Bajo: estándar en clínicas | Baja | Usar foto profesional con consentimiento firmado. Si no, ilustración conceptual | Cliente |
| R12 | **Mezcla idiomas (ES + valenciano + inglés)** no decidida | Medio: rework si se decide tarde | Media | Default ES único. Si se confirma multilingüe, planificar i18n en Fase 5 antes de escribir copy | Cliente |
| R14 | **Blog vacío en lanzamiento** sin línea editorial confirmada | Medio: SEO no se activa de inmediato | Alta | Lanzar con 3-5 artículos seed (1 por submarca + 1 sobre la doctora). Usar `seo-plan.md` para temas de bajo volumen / alta intención. Cliente valida tono y aprueba publicación | Cliente / Carlos |
| R15 | **Resend vs Brevo decisión pendiente** | Bajo: integración aislada en Action `contact.submit` | Baja | Default Resend (DX simple). Migración a Brevo en 1 archivo si la cliente quiere panel propio de email marketing | Cliente |
| R13 | **Stock fotográfico recurrente entre competidores** | Bajo-medio en diferenciación | Media | Combinar stock con elementos visuales propios (espirales áureas, patrones de marca) y micro-interacciones únicas | Carlos |
