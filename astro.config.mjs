import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ember-restaurant.example.com',
  integrations: [tailwind(), sitemap()],
  output: 'static'
});
