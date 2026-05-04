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
      filter: (page) => !page.includes('/dev/'),
    }),
    mdx(),
  ],
  vite: { plugins: [tailwindcss()] },
});
