// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: 'static', // <--- THIS IS THE KEY FIX for the empty site error
  
  // We need this for your design to work
  integrations: [tailwind()],
  
  // We need this for Netlify to work
  adapter: netlify(),
});