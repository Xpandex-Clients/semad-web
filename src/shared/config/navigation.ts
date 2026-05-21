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

/** Submarcas legacy: ahora se redirigen / consolidan. Mantenido para Footer
 *  hasta que el contenido editorial se reubique. */
export const submarcasNav = services.map((s) => ({
  label: s.fullName,
  shortLabel: s.name,
  href: `/${s.slug}`,
  color: s.color,
  shortClaim: s.shortClaim,
}));

/** Enlaces legales (footer). */
export const legalNav: readonly NavItem[] = [
  { label: "Aviso legal", href: "/aviso-legal" },
  { label: "Política de privacidad", href: "/politica-privacidad" },
  { label: "Política de cookies", href: "/politica-cookies" },
] as const;
