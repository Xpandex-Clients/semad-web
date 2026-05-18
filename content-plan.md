# content-plan.md — semad-web (CEMAD)

> Estructura de contenido + copy concreto por página. Todo cliente-verificable se marca `[TODO: confirmar con cliente]`. **NO usar copy con TODO en producción** — bloquea la fase 15.

> Fase 5 del checklist. Skeleton inicial generado en kickoff; el copy definitivo se redacta con el subagente `copy-writer-es` o la skill `/vibe-copy-conversion`.

Última actualización: 2026-05-05.

---

## 1. Voz y tono

### Atributos
- **Confianza médica** (autoridad, rigor, precisión).
- **Calidez femenina** (cercanía, cuidado, empatía).
- **Sofisticación discreta** (premium sin ostentación).
- **Resultado, no transformación traumática** (lenguaje positivo, "revelar Tu Mejor Versión", no "arreglar").

### Hacer
- Frases cortas, ritmo claro.
- Verbos en presente y segunda persona ("descubre", "siente", "transforma").
- Datos concretos siempre que existan (años de práctica, certificaciones) — `[TODO: solicitar]`.
- Llamadas a la acción específicas: "Reserva tu primera consulta", "Habla con la doctora".

### Evitar
- "Antes y después" cliché y promesas exageradas.
- Tecnicismos médicos sin explicar (riesgo de barrera).
- Lenguaje paternalista ("no te preocupes, mujer").
- Capitalización innecesaria, signos de exclamación múltiples.

---

## 2. Mapa de contenido

```
/                          Home
/medicina-estetica         Submarca dorado
/iv-therapy                Submarca turquesa
/anti-aging-avanzado       Submarca rosa
/hair-clinic               Submarca plata
/laser-dermoestetico       Submarca cobre
/dra-abigail-cevallos      Sobre la doctora
/blog                      Índice del blog
/blog/[slug]               Artículo individual
/contacto                  Form + WhatsApp + mapa
/aviso-legal
/politica-privacidad
/politica-cookies
404                        Estado de error con marca
```

> [TODO: validar con cliente] ¿Catálogo de tratamientos individuales por submarca? ¿Categorías y tags del blog?

---

## 3. Home

### 3.1 Hero
- **H1 (display):** "Donde la ciencia y el arte se unen para revelar"
- **H1 (script, énfasis):** *Tu Mejor Versión*
- **Lead:** "CEMAD es la clínica de medicina estética y antienvejecimiento de la Dra. Abigail Cevallos Madrid en el corazón de Valencia." `[TODO: validar wording]`
- **CTA primario:** "Reserva tu primera consulta" → `/contacto`
- **CTA secundario:** "Conoce nuestras especialidades" → scroll a sección submarcas

### 3.2 Submarcas
Grid de 5 tarjetas, cada una con:
- Imagen característica de la submarca (color de fondo)
- Nombre + claim corto
- Promesa larga (1 frase)
- CTA "Descubrir →" a su landing

(Datos en `src/shared/config/services.ts`).

### 3.3 Sobre la doctora (teaser)
- **H2:** "La medicina estética es una ciencia de detalles."
- **Párrafo:** "Dra. Abigail Cevallos Madrid lidera CEMAD con más de `[TODO: nº]` años de experiencia en medicina estética y antienvejecimiento avanzado." `[TODO: confirmar trayectoria]`
- Foto de la doctora (ver Fase 6 — `[TODO: solicitar]`)
- CTA "Conoce a la doctora" → `/dra-abigail-cevallos`

### 3.4 Razones para elegir CEMAD
3 columnas con icono + título + 1 línea:
1. **Diagnóstico médico personalizado** — tratamientos diseñados para tu piel, tu edad y tus objetivos.
2. **Tecnología avanzada** — equipamiento certificado en láser, IV, anti-aging.
3. **Resultados naturales** — la diferencia se nota; el cambio, no.

### 3.5 Testimonios (`[TODO: solicitar a cliente con consentimiento RGPD firmado`])
Si no hay testimonios reales, **omitir esta sección**. No inventar.

### 3.6 Contacto teaser
- **H2:** "Empieza por una conversación."
- Tres canales: teléfono, WhatsApp, formulario.
- Mapa pequeño de Calle Isabel la Católica 4, Valencia.

---

## 4. Landings de submarca (estructura común)

Cada submarca usa su color como acento en hero, botones y badges. Estructura:

1. **Hero** — fondo del color de submarca (variante saturada en el manual), logo CEMAD + nombre submarca, claim corto en script + claim largo en serif, CTA "Reserva consulta".
2. **¿Qué es?** — descripción del enfoque y principales tratamientos. `[TODO: contenido por submarca con cliente]`
3. **Tratamientos / servicios** — listado en cards con título, descripción breve, duración, indicaciones.  `[TODO]`
4. **Tecnología / aparatología** — si aplica (sobre todo Láser, Hair, IV).
5. **Cómo es la primera consulta** — desmitifica el proceso, baja la fricción.
6. **FAQ** — 4-6 preguntas frecuentes específicas de la submarca. `[TODO: redactar]`
7. **CTA final** — "Reserva tu primera consulta de [submarca]".

> Los textos específicos de cada tratamiento son cliente-verificables (efectos, duración, contraindicaciones) — **siempre `[TODO]` hasta validación médica**.

### 4.1 Claims por submarca (del manual, ya confirmados)

| Submarca | Claim corto | Claim largo |
|---|---|---|
| Medicina Estética | "Tu Mejor Versión" | "Donde la ciencia y el arte se unen para revelar Tu Mejor Versión." |
| IV Therapy | "Eleva tu Poderío" | "Eleva tu Poderío gota a gota." |
| Anti-Aging Avanzado | "Sin fecha de caducidad" | "Tu Belleza no tiene fecha de caducidad." |
| Hair Clinic | "Renacimiento Capilar" | "Siente el poder de tu Renacimiento Capilar." |
| Láser Dermoestético | "Poder del Láser" | "Transforma tu piel con el Poder del Láser y la precisión de la tecnología." |

---

## 5. Dra. Abigail Cevallos Madrid

> Página clave para autoridad médica. Mucho `[TODO]` hasta CV de la cliente.

- **Hero** con foto de la doctora `[TODO]` + nombre + título.
- **Bio:** trayectoria, formación, especialidades, congresos. `[TODO: CV completo]`
- **Filosofía:** por qué hace lo que hace, qué busca para sus pacientes (1-2 párrafos).
- **Colegiación:** nº `[TODO]`, organismos a los que pertenece `[TODO]`.
- **CTA:** "Reserva una consulta con la Dra. Cevallos" → `/contacto`.

---

## 6. Contacto

- **Hero corto:** "Estamos a una conversación." + dirección + horarios (de `siteConfig.hours`).
- **Formulario:** nombre, email, teléfono, motivo (opciones: información general, reservar consulta, otro), mensaje breve, checkbox RGPD.
  - **Sin datos médicos** (motivo libre opcional, no obligatorio).
  - Microcopy debajo del checkbox: "Solo te contactaremos para responder tu consulta. Nunca compartiremos tus datos."
- **Mapa** Google Maps embebido (privacy-friendly, lazy load).
- **CTA WhatsApp** flotante persistente con `siteConfig.contact.whatsapp`.

### 6.1 Microcopy estados formulario
- Loading: "Enviando tu mensaje…"
- Success: "Recibido. Te respondemos en menos de 24 horas."
- Error: "No hemos podido enviar tu mensaje. Llámanos al `+34 672 30 05 91` o vuelve a intentarlo."

---

## 7. Blog (v1)

> Confirmado por la cliente como parte del v1. Función dual: SEO temático + autoridad médica.

### 7.1 Estructura técnica

- `src/content/blog/*.mdx` con schema Zod: `title`, `description`, `pubDate`, `updatedDate?`, `author`, `submarca?` (slug de la submarca relacionada), `tags?`, `cover` (imagen), `draft?`.
- Índice `/blog` con paginación 9 por página, filtro por submarca.
- Página individual `/blog/[slug]` con TOC, share, "lecturas relacionadas" (misma submarca o tag).
- RSS feed en `/rss.xml`.
- Schema JSON-LD `Article` por post.

### 7.2 Plan editorial seed (5 artículos para arrancar)

> Borradores pendientes de redactar con el subagente `copy-writer-es` y validar con la cliente. **Cero claims sin verificar**.

| # | Submarca | Tema (intención) | Keyword principal aprox |
|---|---|---|---|
| 1 | Medicina Estética | "Qué esperar de tu primera consulta de medicina estética" (informacional, baja fricción) | `primera consulta medicina estética` |
| 2 | Anti-Aging Avanzado | "Anti-aging real vs marketing: cómo distinguir un tratamiento serio" (informacional, autoridad) | `tratamiento antiaging serio` |
| 3 | IV Therapy | "Vitaminoterapia intravenosa: para qué sí, para qué no" (informacional + filtro de leads) | `vitaminoterapia intravenosa beneficios` |
| 4 | Hair Clinic | "Caída del cabello en mujeres: causas, diagnóstico y tratamientos posibles" (informacional, alta intención) | `caída cabello mujeres tratamiento` |
| 5 | Sobre la doctora | "Por qué fundé CEMAD: mi visión de la medicina estética" (autoridad personal) | `medicina estética con criterio Valencia` |

### 7.3 Voz del blog

Misma voz general (confianza médica + calidez), con un punto más didáctico — se permite explicar conceptos médicos siempre con vocabulario accesible. Cada post cierra con un CTA suave a su submarca relacionada.

### 7.4 Frecuencia

> [TODO: confirmar con cliente] Propuesta: 1 artículo cada 3 semanas tras el lanzamiento. Mantiene SEO vivo sin forzar producción.

---

## 8. 404 y 500

### 404
- **H1:** "Esta página se ha tomado un descanso de belleza."
- **Lead:** "Pero CEMAD sigue aquí. Vuelve al inicio o explora nuestras especialidades."
- CTAs: "Volver al inicio", "Ver especialidades".

### 500
- **H1:** "Algo no ha salido como esperábamos."
- **Lead:** "Estamos solucionándolo. Mientras tanto, puedes contactarnos directamente."
- CTAs: teléfono + WhatsApp.

---

## 8. Footer

3 columnas + cinta inferior:

1. **CEMAD**
   - Logo
   - Tagline matriz
   - Dirección Valencia + teléfono + email

2. **Especialidades**
   - 5 enlaces a submarcas

3. **Contacto**
   - Formulario corto / "Reserva consulta"
   - WhatsApp · Instagram

**Cinta inferior:**
- © 2026 CEMAD® · Aesthetic Anti-Aging Clinic
- Aviso legal · Privacidad · Cookies

---

## 9. Pendientes (priorizado)

1. `[CRÍTICO]` Bio + colegiación + CV de la Dra. Cevallos Madrid.
2. `[CRÍTICO]` Lista de tratamientos por submarca con copy validado médicamente.
3. `[CRÍTICO]` Aviso legal + Privacidad + Cookies (texto definitivo).
4. `[ALTO]` Testimonios (si los hay) con consentimientos firmados.
5. `[ALTO]` FAQ por submarca (mínimo 4 cada una).
6. `[MEDIO]` Cifras de trust (años de experiencia, pacientes atendidos, etc.).
7. `[MEDIO]` Email definitivo de recepción del formulario.
