import { defineCollection, z, reference } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string().min(8).max(80),
      description: z.string().min(60).max(200),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      author: z.string().default("Dra. Abigail Cevallos Madrid"),
      submarca: z
        .enum([
          "medicina-estetica",
          "iv-therapy",
          "anti-aging-avanzado",
          "hair-clinic",
          "laser-dermoestetico",
          "clinica",
        ])
        .optional(),
      tags: z.array(z.string()).default([]),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

const servicios = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/servicios" }),
  schema: z.object({
    nombre: z.string(),
    submarca: z.enum([
      "medicina-estetica",
      "iv-therapy",
      "anti-aging-avanzado",
      "hair-clinic",
      "laser-dermoestetico",
    ]),
    descripcionCorta: z.string(),
    duracion: z.string().optional(),
    indicaciones: z.array(z.string()).default([]),
    contraindicaciones: z.array(z.string()).default([]),
    orden: z.number().default(0),
  }),
});

export const collections = { blog, servicios };
