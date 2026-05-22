/**
 * CEMAD — JSON-LD schema builders.
 *
 * Estrategia (seo-strategist 2026-05-05):
 * - `@id` absolutos para que entidades crucen referencias entre páginas
 *   (evita repetir `MedicalClinic` completo en cada submarca).
 * - Omitir campos `[TODO cliente]` en lugar de emitir strings placeholder.
 * - `MedicalProcedure` requiere validación médica del catálogo; usamos `Service` hasta entonces.
 *
 * Convenciones:
 * - Las funciones devuelven objetos planos. El componente `<JsonLd>` los serializa.
 * - Las URLs absolutas se construyen contra `siteConfig.url`.
 */

import { siteConfig } from "@shared/config/site";
import type { ServiceLine } from "@shared/config/services";

const SITE = siteConfig.url; // sin barra final
const ORG_ID = `${SITE}/#organization`;
const SITE_ID = `${SITE}/#website`;
const DOCTOR_ID = `${SITE}/dra-abigail-cevallos#person`;

const isPlaceholder = (v: string | undefined | null) =>
  !v || v.startsWith("[TODO") || v.includes("[TODO");

/* -------------------------------------------------------------------------- */
/* Organization / Clínica                                                     */
/* -------------------------------------------------------------------------- */

/**
 * Schema completo de la clínica. Sólo se renderiza tal cual en Home.
 * En `/contacto` y submarcas se referencia con `{"@id": ORG_ID}`.
 */
export function medicalClinicSchema() {
  const sameAs = [siteConfig.contact.instagram].filter(Boolean);

  return {
    "@type": ["MedicalClinic", "LocalBusiness"],
    "@id": ORG_ID,
    name: siteConfig.legalName,
    url: SITE,
    telephone: siteConfig.contact.phone,
    ...(isPlaceholder(siteConfig.contact.email)
      ? {}
      : { email: siteConfig.contact.email }),
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      postalCode: siteConfig.address.postalCode,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.address.geo.lat,
      longitude: siteConfig.address.geo.lng,
    },
    image: `${SITE}/og/default.jpg`,
    logo: `${SITE}/brand/cemad-logo.png`,
    priceRange: "€€€",
    currenciesAccepted: "EUR",
    medicalSpecialty: ["Dermatology", "PlasticSurgery"],
    sameAs,
    employee: { "@id": DOCTOR_ID },
    openingHoursSpecification: openingHoursSpec(),
  };
}

function openingHoursSpec() {
  // Astro estático: emitimos lo que hay en siteConfig; cliente confirmará.
  const map: Array<[string, string]> = [
    ["Monday", siteConfig.hours.monday],
    ["Tuesday", siteConfig.hours.tuesday],
    ["Wednesday", siteConfig.hours.wednesday],
    ["Thursday", siteConfig.hours.thursday],
    ["Friday", siteConfig.hours.friday],
    ["Saturday", siteConfig.hours.saturday],
    ["Sunday", siteConfig.hours.sunday],
  ];
  return map
    .filter(([, v]) => v && v.toLowerCase() !== "cerrado")
    .map(([day, range]) => {
      // "10:00–14:00, 16:00–20:00" → emitimos un único spec con la franja completa.
      // Refinamiento granular queda para Fase 8 cuando los horarios estén confirmados.
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: day,
        description: range,
      };
    });
}

/* -------------------------------------------------------------------------- */
/* WebSite                                                                    */
/* -------------------------------------------------------------------------- */

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": SITE_ID,
    url: SITE,
    name: siteConfig.name,
    inLanguage: "es-ES",
    publisher: { "@id": ORG_ID },
  };
}

/* -------------------------------------------------------------------------- */
/* Person (doctora)                                                           */
/* -------------------------------------------------------------------------- */

/**
 * Versión "ligera" para anidar en Home. Sin bio, sin formación —
 * sólo lo verificable. La completa va en `/dra-abigail-cevallos`.
 */
export function physicianRefSchema() {
  return {
    "@type": "Physician",
    "@id": DOCTOR_ID,
    name: siteConfig.doctor.name,
    jobTitle: "Médica Especialista en Medicina Estética",
    url: `${SITE}/dra-abigail-cevallos`,
    worksFor: { "@id": ORG_ID },
  };
}

export function physicianFullSchema() {
  // Por ahora idéntica a la ref. Cuando llegue del cliente: alumniOf,
  // memberOf con `MedicalOrganization` + `identifier` (nº colegiada),
  // image, knowsAbout, award, etc.
  return {
    ...physicianRefSchema(),
    knowsAbout: [
      "Medicina Estética",
      "Anti-aging",
      "Dermoestética",
      "Tricología",
    ],
  };
}

/* -------------------------------------------------------------------------- */
/* Service (submarca)                                                         */
/* -------------------------------------------------------------------------- */

export function serviceSchema(service: ServiceLine) {
  const url = `${SITE}/${service.slug}`;
  return {
    "@type": "Service",
    "@id": `${url}#service`,
    name: service.fullName,
    description: service.longClaim,
    serviceType: service.name,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "City", "name": "Valencia" },
    url,
  };
}

/* -------------------------------------------------------------------------- */
/* BreadcrumbList                                                             */
/* -------------------------------------------------------------------------- */

export type Crumb = { name: string; url: string };

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.url.startsWith("http") ? c.url : `${SITE}${c.url}`,
    })),
  };
}

/* -------------------------------------------------------------------------- */
/* Blog                                                                       */
/* -------------------------------------------------------------------------- */

export function blogIndexSchema() {
  return {
    "@type": "Blog",
    "@id": `${SITE}/blog#blog`,
    name: "Blog CEMAD — Medicina estética con criterio",
    url: `${SITE}/blog`,
    inLanguage: "es-ES",
    publisher: { "@id": ORG_ID },
  };
}

/* -------------------------------------------------------------------------- */
/* Graph helper                                                               */
/* -------------------------------------------------------------------------- */

/**
 * Envuelve uno o varios schemas como `@graph` con `@context`.
 * Es la forma recomendada para emitir múltiples entidades relacionadas
 * desde una sola etiqueta `<script>`.
 */
export function jsonLdGraph(...nodes: Array<Record<string, unknown>>) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}
