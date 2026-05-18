/**
 * CEMAD — submarcas / líneas de servicio.
 * Cada una con color, claim y promesa propia (manual de identidad).
 */

export type ServiceLine = {
  slug: string;
  name: string;
  fullName: string;
  shortClaim: string;
  longClaim: string;
  color: string;       // hex de marca (token)
  colorVar: string;    // var CSS del token
  ariaColor: string;   // versión accesible para texto sobre fondo claro
};

export const services: readonly ServiceLine[] = [
  {
    slug: "medicina-estetica",
    name: "Medicina Estética",
    fullName: "CEMAD Medicina Estética",
    shortClaim: "Tu Mejor Versión",
    longClaim: "Donde la ciencia y el arte se unen para revelar Tu Mejor Versión.",
    color: "#bd9b5f",
    colorVar: "var(--color-gold)",
    ariaColor: "var(--color-gold-dark)",
  },
  {
    slug: "iv-therapy",
    name: "IV Therapy",
    fullName: "CEMAD IV Therapy",
    shortClaim: "Eleva tu Poderío",
    longClaim: "Eleva tu Poderío gota a gota.",
    color: "#4cb8c3",
    colorVar: "var(--color-teal)",
    ariaColor: "var(--color-teal-dark)",
  },
  {
    slug: "anti-aging-avanzado",
    name: "Anti-Aging Avanzado",
    fullName: "CEMAD Anti-Aging Avanzado",
    shortClaim: "Sin fecha de caducidad",
    longClaim: "Tu Belleza no tiene fecha de caducidad.",
    color: "#dfc2c4",
    colorVar: "var(--color-rose)",
    ariaColor: "var(--color-copper)",
  },
  {
    slug: "hair-clinic",
    name: "Hair Clinic",
    fullName: "CEMAD Hair Clinic",
    shortClaim: "Renacimiento Capilar",
    longClaim: "Siente el poder de tu Renacimiento Capilar.",
    color: "#b1b1b1",
    colorVar: "var(--color-silver)",
    ariaColor: "var(--color-ink)",
  },
  {
    slug: "laser-dermoestetico",
    name: "Láser Dermoestético",
    fullName: "CEMAD Láser Dermoestético",
    shortClaim: "Poder del Láser",
    longClaim:
      "Transforma tu piel con el Poder del Láser y la precisión de la tecnología.",
    color: "#8b634a",
    colorVar: "var(--color-copper)",
    ariaColor: "var(--color-copper)",
  },
] as const;
