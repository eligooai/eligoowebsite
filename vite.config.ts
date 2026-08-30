import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// inline the entry CSS so first paint needs no extra render-blocking request
function inlineCss(): Plugin {
  return {
    name: 'inline-entry-css',
    apply: 'build',
    enforce: 'post',
    generateBundle(_opts, bundle) {
      const html = bundle['index.html']
      if (!html || html.type !== 'asset') return
      let src = String(html.source)
      for (const key of Object.keys(bundle)) {
        if (!key.endsWith('.css')) continue
        const asset = bundle[key]
        if (asset.type !== 'asset') continue
        const linkRe = new RegExp(`<link[^>]*href="/${key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[^>]*>`)
        if (linkRe.test(src)) {
          src = src.replace(linkRe, `<style>${String(asset.source)}</style>`)
          delete bundle[key]
        }
      }
      html.source = src
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), inlineCss()],
  build: { sourcemap: true },
  server: { proxy: { '/eapi': 'http://localhost:4000', '/media': 'http://localhost:4000' } },
})
