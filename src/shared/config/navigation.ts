/**
 * CEMAD — navegación principal y secundaria.
 * Cambios aquí se reflejan automáticamente en Header, MobileMenu y Footer.
 */

import { services } from "./services";

export type NavItem = {
  label: string;
  href: string;
  /** Si true, abre menú desplegable (sólo en desktop). */
  hasChildren?: boolean;
};

/** Navegación principal del header (desktop). */
export const primaryNav: readonly NavItem[] = [
  { label: "Especialidades", href: "/#especialidades", hasChildren: true },
  { label: "La doctora", href: "/dra-abigail-cevallos" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/contacto" },
] as const;

/** Submarcas para el desplegable de Especialidades + footer. */
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
