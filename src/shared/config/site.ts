/**
 * CEMAD — site config
 * Fuente única de verdad para datos del negocio.
 * Cualquier dato cliente-verificable [TODO] está marcado como tal.
 */

export const siteConfig = {
  name: "CEMAD",
  legalName: "CEMAD® — Aesthetic Anti-Aging Clinic",
  tagline: "Donde la ciencia y el arte se unen para revelar Tu Mejor Versión",
  description:
    "Clínica de medicina estética y antienvejecimiento en el centro de Valencia. Medicina estética, anti-aging avanzado, IV therapy, hair clinic y láser dermoestético.",
  locale: "es-ES",
  url: "https://cemadclinic.com",

  contact: {
    phone: "+34672300591",
    phoneDisplay: "+34 672 30 05 91",
    whatsapp: "+34672300591",
    email: "info@cemadclinic.com", // [TODO: confirmar con cliente]
    instagram: "https://instagram.com/cemadclinic",
    instagramHandle: "@cemadclinic",
  },

  address: {
    street: "Calle Isabel la Católica 4, piso 1-2",
    postalCode: "46004",
    locality: "Valencia",
    region: "Comunidad Valenciana",
    country: "ES",
    countryName: "España",
    // [TODO: confirmar coordenadas exactas para schema LocalBusiness y mapa]
    geo: { lat: 39.4699, lng: -0.3763 },
  },

  doctor: {
    name: "Dra. Abigail Cevallos Madrid",
    role: "Medicina Estética",
    // [TODO: solicitar a cliente: nº colegiada, formación, especialidades, bio]
    collegiateNumber: "[TODO]",
    bio: "[TODO: bio profesional confirmada por la cliente]",
  },

  hours: {
    // [TODO: confirmar horarios reales]
    monday:    "10:00–14:00, 16:00–20:00",
    tuesday:   "10:00–14:00, 16:00–20:00",
    wednesday: "10:00–14:00, 16:00–20:00",
    thursday:  "10:00–14:00, 16:00–20:00",
    friday:    "10:00–14:00, 16:00–20:00",
    saturday:  "10:00–14:00",
    sunday:    "Cerrado",
  },
} as const;

export type SiteConfig = typeof siteConfig;
