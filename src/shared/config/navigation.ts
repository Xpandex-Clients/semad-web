/**
 * CEMAD — navegación principal (Figma 2025-12-02).
 *
 * 7 entradas planas (sin dropdown) según el frame "Clinica Cemad - Menu" (217:2519).
 * El CTA "Reserva tu cita" se renderiza aparte como botón outline.
 */

import { services } from "./services";

export type NavItem = {
  label: string;
  href: string;
  hasChildren?: boolean;
};

/** Navegación principal del header (desktop + mobile). */
export const primaryNav: readonly NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Método Kintsugi", href: "/metodo-kintsugi" },
  { label: "Centro Capilar", href: "/centro-capilar" },
  { label: "Medicina Estética", href: "/medicina-estetica" },
  { label: "Medicina Integrativa", href: "/medicina-integrativa" },
  { label: "Musas CEMAD", href: "/musas-cemad" },
  { label: "Dra. Abigail y Equipo", href: "/dra-abigail-y-equipo" },
] as const;

/** Áreas/especialidades para el footer (Figma 2025-12-02).
 *  Sustituye al submarcasNav legacy: ahora apunta a las páginas dedicadas
 *  creadas según el Figma. Mantiene `submarcasNav` como alias para no
 *  romper imports históricos. */
export const submarcasNav = [
  {
    label: "Método Kintsugi",
    shortLabel: "Método Kintsugi",
    href: "/metodo-kintsugi",
    color: services[0].color,
    shortClaim: "Filosofía clínica",
  },
  {
    label: "Centro Capilar",
    shortLabel: "Centro Capilar",
    href: "/centro-capilar",
    color: services[3].color,
    shortClaim: "Tricología y cirugía",
  },
  {
    label: "Medicina Estética",
    shortLabel: "Medicina Estética",
    href: "/medicina-estetica",
    color: services[0].color,
    shortClaim: "Armonía y belleza",
  },
  {
    label: "Medicina Integrativa",
    shortLabel: "Medicina Integrativa",
    href: "/medicina-integrativa",
    color: services[1].color,
    shortClaim: "Longevidad",
  },
  {
    label: "Musas CEMAD",
    shortLabel: "Musas CEMAD",
    href: "/musas-cemad",
    color: services[2].color,
    shortClaim: "Historias reales",
  },
] as const;

/** Enlaces legales (footer). */
export const legalNav: readonly NavItem[] = [
  { label: "Aviso legal", href: "/aviso-legal" },
  { label: "Política de privacidad", href: "/politica-privacidad" },
  { label: "Política de cookies", href: "/politica-cookies" },
] as const;
