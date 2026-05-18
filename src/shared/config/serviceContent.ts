/**
 * CEMAD — contenido editorial por submarca.
 *
 * Fuentes: web actual cemadclinic.com (menú + intros + testimonios),
 * manual de identidad CEMAD pp. 24 / 41, briefing del proyecto.
 *
 * IMPORTANTE: toda lista de tratamientos, indicaciones, FAQs y proceso
 * es una propuesta editorial basada en el catálogo del menú y en
 * convenciones del sector. Cualquier dato médico concreto (duraciones,
 * fórmulas, plataformas, número de sesiones) está marcado
 * `[TODO: validar con la doctora]` en el cuerpo del contenido.
 *
 * NO se incluyen precios ni claims de eficacia.
 */

export type Treatment = { name: string; summary: string };
export type Indication = string;
export type ProcessStep = { step: number; title: string; summary: string };
export type Faq = { q: string; a: string };

export type ServiceContent = {
  slug: string;
  longDescription: string;
  treatments: Treatment[];
  indications: Indication[];
  process: ProcessStep[];
  faqs: Faq[];
  ctaCopy: string;
};

export const serviceContent: Record<string, ServiceContent> = {
  "medicina-estetica": {
    slug: "medicina-estetica",
    longDescription:
      "CEMAD Medicina Estética es la línea matriz de la clínica: tratamientos faciales y corporales mínimamente invasivos diseñados para realzar la armonía natural del rostro sin alterar la identidad del paciente. Combina diagnóstico médico riguroso con el criterio artístico de la Dra. Abigail Cevallos para resolver signos visibles de la edad, asimetrías, pérdida de volumen, arrugas dinámicas o gestos cansados. Está pensada para pacientes que buscan resultados naturales, mantenidos en el tiempo y sin cirugía, en un entorno médico de confianza en el centro de Valencia.",
    treatments: [
      { name: "Ácido hialurónico", summary: "Relleno reabsorbible para devolver volumen, hidratar la piel en profundidad y suavizar surcos faciales con resultado inmediato y natural." },
      { name: "Neuromoduladores (toxina botulínica)", summary: "Relajación de la musculatura responsable de arrugas dinámicas (entrecejo, frente, patas de gallo) preservando la expresividad del rostro." },
      { name: "Aumento y perfilado de labios", summary: "Diseño personalizado de volumen, hidratación y contorno labial con ácido hialurónico de alta densidad." },
      { name: "Armonización facial", summary: "Plan integral que combina rellenos, neuromoduladores e inductores para reequilibrar tercios y proporciones del rostro." },
      { name: "Inductores de colágeno", summary: "Bioestimuladores inyectables que activan la producción propia de colágeno para mejorar firmeza y calidad de piel a medio plazo." },
      { name: "Hilos tensores", summary: "Hilos reabsorbibles que reposicionan tejidos descolgados y estimulan colágeno, con efecto lifting progresivo y sin cirugía." },
      { name: "Mesoterapia facial / vitaminas faciales", summary: "Microinfiltraciones de vitaminas, antioxidantes y ácido hialurónico no reticulado para revitalizar e iluminar la piel." },
    ],
    indications: [
      "Pérdida de volumen en pómulos, sienes o mentón",
      "Arrugas de expresión en tercio superior",
      "Surcos nasogenianos o código de barras peribucal",
      "Labios finos, deshidratados o asimétricos",
      "Flacidez incipiente facial o de óvalo",
      "Pacientes que rechazan la cirugía estética",
    ],
    process: [
      { step: 1, title: "Consulta y diagnóstico estético", summary: "Valoración médica con la doctora: análisis facial, historia clínica y objetivos del paciente." },
      { step: 2, title: "Diseño del plan personalizado", summary: "Propuesta escrita con tratamientos, secuenciación, expectativas realistas y presupuesto cerrado." },
      { step: 3, title: "Tratamiento en consulta", summary: "Ejecución en gabinete médico con materiales certificados y protocolo de asepsia clínica." },
      { step: 4, title: "Revisión y seguimiento", summary: "Control a las 2-4 semanas y seguimiento a largo plazo para mantener un resultado natural." },
    ],
    faqs: [
      { q: "¿Los resultados son naturales?", a: "Sí. La filosofía CEMAD prioriza preservar la identidad del paciente; trabajamos con diseño facial individualizado, no con protocolos estándar." },
      { q: "¿Duele?", a: "La mayoría de tratamientos se realizan con anestesia tópica. Las molestias son mínimas y puntuales." },
      { q: "¿Cuánto duran los resultados?", a: "Depende del tratamiento: ácido hialurónico de 9 a 18 meses, neuromoduladores de 4 a 6 meses, inductores de colágeno hasta 2 años. [TODO: validar con la doctora]" },
      { q: "¿Puedo hacer vida normal después?", a: "Sí, en casi todos los tratamientos puedes incorporarte de inmediato. Solo se recomienda evitar deporte intenso y calor 24-48h." },
      { q: "¿Hay riesgos?", a: "Cualquier acto médico tiene riesgos. Trabajamos solo con productos homologados y bajo supervisión médica, lo que minimiza los efectos adversos." },
    ],
    ctaCopy: "Reserva tu valoración facial con la doctora",
  },

  "iv-therapy": {
    slug: "iv-therapy",
    longDescription:
      "CEMAD IV Therapy es la línea de sueroterapia intravenosa de la clínica: infusiones de vitaminas, minerales, antioxidantes y aminoácidos administradas bajo prescripción y supervisión médica. Pensada para pacientes que quieren reforzar su energía, sistema inmune, recuperación deportiva, luminosidad de piel o procesos detox de forma medicalizada y segura, con un diagnóstico previo que permite personalizar cada fórmula. Su promesa: “Eleva tu Poderío gota a gota”. [TODO: validar con la doctora qué fórmulas IV ofrece CEMAD]",
    treatments: [
      { name: "Cóctel inmunidad", summary: "Vitamina C en alta dosis, zinc y antioxidantes para reforzar defensas. [TODO: validar fórmula]" },
      { name: "Cóctel energizante / vitalidad", summary: "Complejo B, magnesio y aminoácidos para combatir fatiga, estrés y bajo rendimiento. [TODO: validar fórmula]" },
      { name: "Antioxidante / glutatión", summary: "Glutatión IV, el antioxidante maestro, para luminosidad de piel y soporte detox hepático. [TODO: validar fórmula]" },
      { name: "NAD+ longevity", summary: "Infusión de NAD+ para soporte mitocondrial y programas de longevidad celular. [TODO: validar si se ofrece]" },
      { name: "Detox", summary: "Combinación de antioxidantes y aminoácidos para apoyar la depuración tras periodos de excesos o estrés oxidativo." },
      { name: "Beauty: piel y cabello", summary: "Biotina, vitamina C, zinc y aminoácidos para reforzar la calidad de piel, uñas y cabello desde el interior." },
    ],
    indications: [
      "Fatiga crónica, estrés o bajo rendimiento",
      "Defensas bajas o convalecencia",
      "Piel apagada, deshidratada o falta de luminosidad",
      "Recuperación deportiva o post-viaje",
      "Programa antienvejecimiento integral",
      "Carencias nutricionales detectadas en analítica",
    ],
    process: [
      { step: 1, title: "Valoración médica y analítica", summary: "Historia clínica, objetivos y, cuando procede, analítica previa para personalizar la fórmula." },
      { step: 2, title: "Prescripción de la fórmula", summary: "La doctora prescribe el cóctel adecuado en función de la indicación y del estado del paciente." },
      { step: 3, title: "Sesión de infusión", summary: "Administración intravenosa en sala confortable bajo supervisión sanitaria, con una duración aproximada de 45-60 min. [TODO: validar tiempo]" },
      { step: 4, title: "Seguimiento y plan", summary: "Recomendación de pauta (sesión única, ciclo o mantenimiento) según objetivos." },
    ],
    faqs: [
      { q: "¿Es seguro?", a: "Sí, siempre que se realice bajo prescripción y supervisión médica, con materiales estériles y fórmulas farmacéuticas. En CEMAD nunca se administra sin valoración previa." },
      { q: "¿Cuánto dura una sesión?", a: "Entre 30 y 60 minutos según fórmula. [TODO: validar]" },
      { q: "¿Notaré el efecto enseguida?", a: "Muchos pacientes refieren mejoría de energía y bienestar en 24-48h; el efecto antioxidante y de piel se construye con ciclos." },
      { q: "¿Cuántas sesiones necesito?", a: "Depende del objetivo: puede ser puntual o en ciclos de varias sesiones para programas antienvejecimiento o detox." },
      { q: "¿Sustituye a una buena alimentación?", a: "No. La sueroterapia complementa, no reemplaza, los hábitos saludables. Es un refuerzo medicalizado en momentos puntuales o programas dirigidos." },
    ],
    ctaCopy: "Diseña tu cóctel IV con valoración médica previa",
  },

  "anti-aging-avanzado": {
    slug: "anti-aging-avanzado",
    longDescription:
      "CEMAD Anti-Aging Avanzado es la línea premium de longevidad y rejuvenecimiento integral de la clínica. Combina diagnóstico médico profundo (analíticas hormonales, marcadores de inflamación, perfil nutricional) con tratamientos de medicina regenerativa, bioestimulación y tecnología no quirúrgica para frenar y revertir signos visibles del envejecimiento facial y corporal. Está dirigida a pacientes a partir de 40-45 años que quieren un plan a medio y largo plazo, no un tratamiento puntual: firmeza, calidad de piel, vitalidad y prevención de patologías asociadas a la edad. Su promesa: “Tu Belleza no tiene fecha de caducidad”. [TODO: validar con la doctora qué componentes incluye el programa anti-aging de CEMAD]",
    treatments: [
      { name: "Endoláser / endolifting", summary: "Remodelación de alta precisión mediante fibra óptica que tensa la piel desde el interior, sin cirugía y con resultados naturales y duraderos." },
      { name: "Radiofrecuencia con microagujas", summary: "Estimulación dérmica profunda para mejorar firmeza, textura, cicatrices y flacidez sin tiempo de baja." },
      { name: "Inductores de colágeno", summary: "Bioestimuladores inyectables para regenerar la matriz dérmica desde dentro." },
      { name: "Hilos tensores", summary: "Reposicionamiento de tejidos descolgados con efecto lifting progresivo y bioestimulación asociada." },
      { name: "Programa de rejuvenecimiento integral", summary: "Plan multimodal personalizado que combina diagnóstico, tratamientos médico-estéticos y seguimiento longitudinal." },
      { name: "Perfil hormonal y longevidad", summary: "Estudio hormonal y nutricional para detectar carencias y diseñar el plan antiaging desde la causa. [TODO: validar oferta]" },
    ],
    indications: [
      "Flacidez facial o corporal moderada",
      "Pérdida de calidad de piel (textura, luminosidad, elasticidad)",
      "Pacientes 40+ que buscan prevención y mantenimiento, no parche puntual",
      "Postcirugía o postembarazo con cambios estructurales",
      "Alternativa al lifting quirúrgico",
      "Programa integral de longevity",
    ],
    process: [
      { step: 1, title: "Diagnóstico avanzado", summary: "Análisis facial 360º, antecedentes, hábitos y, si procede, analítica hormonal o nutricional." },
      { step: 2, title: "Plan estratégico personalizado", summary: "Diseño multimodal (médico + tecnológico + hábitos) con horizonte temporal a 6, 12 o 24 meses." },
      { step: 3, title: "Intervención de precisión", summary: "Ejecución del plan en sesiones secuenciadas combinando endoláser, bioestimulación e infiltraciones." },
      { step: 4, title: "Acompañamiento a largo plazo", summary: "Revisiones periódicas y ajuste del plan según evolución." },
    ],
    faqs: [
      { q: "¿Es una alternativa real a la cirugía?", a: "En muchos casos sí, especialmente cuando la flacidez es leve o moderada. La doctora indica cuándo conviene cirugía y cuándo medicina regenerativa. [TODO: validar]" },
      { q: "¿Cuándo se ven los resultados?", a: "Algunos efectos son inmediatos (tensado), pero la bioestimulación se manifiesta entre 1 y 6 meses, mejorando progresivamente." },
      { q: "¿Es un tratamiento único o varios?", a: "Es un programa: lo habitual son varias sesiones combinadas en un plan a medio plazo, no un acto aislado." },
      { q: "¿Hay baja social?", a: "Habitualmente mínima: enrojecimiento o pequeñas marcas 24-72h según tratamiento. [TODO: validar por técnica]" },
      { q: "¿A qué edad conviene empezar?", a: "Desde los 35-40 años la prevención es más efectiva que la corrección posterior. Cada plan se adapta a la edad biológica del paciente." },
    ],
    ctaCopy: "Diseña tu plan anti-aging con diagnóstico avanzado",
  },

  "hair-clinic": {
    slug: "hair-clinic",
    longDescription:
      "CEMAD Hair Clinic es la unidad de medicina y cirugía capilar de la clínica. Aborda la salud del cabello con un enfoque médico integral: diagnóstico tricológico avanzado, estudio hormonal y genético cuando procede, tratamientos médicos para frenar la caída, regeneración con bioterapias y, cuando está indicado, injerto capilar mediante técnicas de micropunción. Está pensada para hombres y mujeres con alopecia androgénica, efluvio, alopecia areata, miniaturización del folículo o pacientes que ya tienen pérdida estructural y buscan restauración. Su promesa: “Siente el poder de tu Renacimiento Capilar”.",
    treatments: [
      { name: "Injerto capilar (micropunción FUE)", summary: "Trasplante folicular unidad a unidad con técnica de micropunción para zonas con pérdida estructural." },
      { name: "Plasma rico en plaquetas (PRP)", summary: "Infiltraciones del propio plasma del paciente para estimular el folículo y frenar la caída." },
      { name: "Mesoterapia capilar", summary: "Microinyecciones de cócteles de vitaminas, aminoácidos y factores de crecimiento en cuero cabelludo." },
      { name: "Tratamiento láser capilar", summary: "Fotobiomodulación para estimular el folículo y mejorar densidad en alopecias incipientes." },
      { name: "Regeneración con células madre", summary: "Bioterapia avanzada para reactivar folículos miniaturizados. [TODO: validar técnica concreta]" },
      { name: "Micropigmentación capilar", summary: "Tatuaje médico para densificar visualmente zonas claras o disimular cicatrices." },
      { name: "Trichoscan digital y estudio genético", summary: "Diagnóstico de precisión: densidad folicular, miniaturización y predisposición genética a la alopecia." },
      { name: "Perfil hormonal y nutrición capilar", summary: "Análisis hormonal y nutricional para tratar la caída desde la causa, no solo el síntoma." },
    ],
    indications: [
      "Alopecia androgénica masculina o femenina",
      "Efluvio telógeno (post-parto, estrés, dieta)",
      "Cabello debilitado, fino o con pérdida de densidad",
      "Cicatrices o zonas sin cabello tras cirugías",
      "Receso de entradas o coronilla en hombres",
      "Diagnóstico capilar preventivo",
    ],
    process: [
      { step: 1, title: "Diagnóstico tricológico", summary: "Trichoscan digital, historia clínica y, según caso, estudio hormonal o genético." },
      { step: 2, title: "Plan capilar personalizado", summary: "Combinación de tratamientos médicos, regenerativos y, si procede, injerto." },
      { step: 3, title: "Tratamiento", summary: "Ejecución de las sesiones (PRP, mesoterapia, láser) y/o cirugía de injerto en quirófano." },
      { step: 4, title: "Seguimiento capilar", summary: "Controles a 3, 6 y 12 meses con comparativa fotográfica y reevaluación del plan." },
    ],
    faqs: [
      { q: "¿Cómo sé si soy candidato a injerto?", a: "Mediante diagnóstico tricológico con trichoscan. El injerto solo está indicado en alopecias estables y con zona donante suficiente." },
      { q: "¿Se ven los resultados del injerto inmediatamente?", a: "No. El cabello injertado cae a las semanas y comienza a crecer entre el mes 3 y 4. El resultado definitivo se valora a los 12 meses." },
      { q: "¿Es doloroso el implante capilar?", a: "Se realiza con anestesia local. Las molestias durante y después son leves y controlables." },
      { q: "¿Puedo evitar el injerto con tratamientos médicos?", a: "En muchas alopecias incipientes, sí. Cuanto antes se diagnostique, más eficaz es el tratamiento médico (PRP, mesoterapia, fármacos)." },
      { q: "¿Las mujeres también pueden hacerse injerto?", a: "Sí, cuando la alopecia femenina lo indica. Cada caso requiere valoración individual." },
    ],
    ctaCopy: "Empieza por tu diagnóstico capilar avanzado",
  },

  "laser-dermoestetico": {
    slug: "laser-dermoestetico",
    longDescription:
      "CEMAD Láser Dermoestético es la unidad tecnológica de la clínica: tratamientos con plataformas láser y de luz de última generación para resolver problemas dermatológicos y estéticos con precisión médica. Aborda manchas, lesiones vasculares, cicatrices, textura irregular, acné activo y secuelas, depilación definitiva, rejuvenecimiento facial y patologías dermatológicas (psoriasis, dermatitis, tatuajes). Está pensada para pacientes que buscan un resultado medible, supervisado por médico, con tecnología homologada y protocolos personalizados a su fototipo y diagnóstico.",
    treatments: [
      { name: "Depilación láser médica", summary: "Depilación definitiva con diodo o alejandrita supervisada por médico, adaptada a fototipo y zona." },
      { name: "Láser CO2 fraccionado", summary: "Rejuvenecimiento profundo: textura, cicatrices, arrugas finas y manchas. [TODO: validar plataforma concreta]" },
      { name: "Endoláser", summary: "Láser intersticial para tensado cutáneo de alta precisión sin cirugía (compartido con Anti-Aging Avanzado)." },
      { name: "Eliminación de manchas", summary: "Tratamiento dirigido de lentigos, manchas solares y melasma con plataformas específicas según el tipo de pigmento." },
      { name: "Cicatrices y textura", summary: "Láser fraccionado y radiofrecuencia microagujas para cicatrices de acné, quirúrgicas o estrías." },
      { name: "Acné activo y secuelas", summary: "Combinación de láser, peeling médico y dermatología para acné inflamatorio y marcas residuales." },
      { name: "Eliminación de tatuajes", summary: "Láser Q-switched o picosegundos para fragmentar pigmento y eliminar tatuajes progresivamente. [TODO: validar tecnología]" },
      { name: "Dermatología (psoriasis, dermatitis)", summary: "Abordaje médico-tecnológico para patologías dermatológicas crónicas." },
    ],
    indications: [
      "Manchas solares, lentigos o melasma",
      "Cicatrices de acné, quirúrgicas o estrías",
      "Vello no deseado en cualquier zona",
      "Textura irregular, poros dilatados o piel apagada",
      "Tatuajes que quieran eliminarse",
      "Patología dermatológica diagnosticada (acné, psoriasis, dermatitis)",
    ],
    process: [
      { step: 1, title: "Consulta médica dermatológica", summary: "Diagnóstico de la lesión o indicación, fototipo, antecedentes y contraindicaciones." },
      { step: 2, title: "Selección de plataforma láser", summary: "Elección de la tecnología adecuada (CO2, diodo, Q-switched, IPL, etc.) según patología y piel." },
      { step: 3, title: "Sesiones de tratamiento", summary: "Número de sesiones variable según indicación, espaciadas según protocolo médico." },
      { step: 4, title: "Cuidados post y revisión", summary: "Protocolo postratamiento (fotoprotección estricta, cuidados específicos) y control de resultado." },
    ],
    faqs: [
      { q: "¿El láser sirve para todas las pieles?", a: "No todas las plataformas son aptas para todos los fototipos. En CEMAD se selecciona la tecnología adecuada para cada piel para minimizar riesgos." },
      { q: "¿Cuántas sesiones necesito?", a: "Depende del tratamiento: depilación entre 6 y 10, manchas o cicatrices entre 3 y 6, tatuajes pueden requerir 6-12 sesiones. [TODO: validar]" },
      { q: "¿Duele?", a: "Sensación variable según tratamiento. Se usa enfriamiento, anestésicos tópicos o, en casos puntuales, anestesia local." },
      { q: "¿Hay riesgos en verano?", a: "Algunos láseres (manchas, fraccionado, depilación) requieren evitar exposición solar antes y después. Se planifica el calendario según la estación." },
      { q: "¿El resultado es permanente?", a: "Depende: la depilación es definitiva con sesiones de mantenimiento; las manchas pueden reaparecer sin fotoprotección; las cicatrices mejoran progresivamente." },
    ],
    ctaCopy: "Reserva tu valoración con láser dermoestético",
  },
};
