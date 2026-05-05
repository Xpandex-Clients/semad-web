// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';
import preact from '@astrojs/preact';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://cemadclinic.com',
  trailingSlash: 'never',
  output: 'static',
  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },
  build: { inlineStylesheets: 'auto' },
  image: { domains: [] },
  integrations: [
    preact({ compat: false }),
    icon({ include: { lucide: ['*'], 'simple-icons': ['*'] } }),
    sitemap({
      filter: (page) => {
        // Excluir styleguide interna y páginas legales (thin content,
        // no aportan al posicionamiento; permanecen indexables si Google las encuentra
        // por enlace, pero no las priorizamos en el sitemap).
        if (page.includes('/dev/')) return false;
        if (page.includes('/aviso-legal')) return false;
        if (page.includes('/politica-privacidad')) return false;
        if (page.includes('/politica-cookies')) return false;
        return true;
      },
      changefreq: 'weekly',
      lastmod: new Date(),
    }),
    mdx(),
  ],
  vite: { plugins: [tailwindcss()] },
});
