// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // We add the tailwind integration here to style the site
  integrations: [tailwind()],
  
  // We add the Netlify adapter here to deploy the site
  adapter: netlify(),
});