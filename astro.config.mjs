import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://www.bybperforaciones.com',
  integrations: [tailwind()],
})
