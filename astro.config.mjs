import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';
import node from '@astrojs/node';


// https://astro.build/config
// output server .. output static
export default defineConfig({
  integrations: [tailwind(), react()] ,
   output: 'static', adapter: node({
    mode: 'standalone'
  }),
base: '/docs/',
});