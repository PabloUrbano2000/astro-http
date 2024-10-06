// @ts-check
import mdx from '@astrojs/mdx'
import { defineConfig } from 'astro/config'

import sitemap from '@astrojs/sitemap'

import node from '@astrojs/node'

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap()],
  output: 'hybrid',
  adapter: node({
    mode: 'standalone'
  })
})
