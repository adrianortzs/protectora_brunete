import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { writeFileSync } from 'node:fs'
import { join } from 'node:path'
import process from 'node:process'

/** Rutas públicas indexables (sin admin ni comodines). */
const SITEMAP_PATHS = [
  '/',
  '/en-adopción',
  '/animales-en-adopción',
  '/animales-en-adopción/perros',
  '/animales-en-adopción/gatos',
  '/10-peticiones-de-un-perro',
  '/finales-felices',
  '/quiénes-somos',
  '/dónde-estamos',
  '/colabora/casa-de-acogida',
  '/colabora/voluntariado',
  '/colabora/donaciones',
  '/gestión-felina/cer',
  '/gestión-felina/castración',
  '/contacto',
  '/términos-y-condiciones',
  '/aviso-legal',
  '/política-de-privacidad',
  '/política-de-cookies',
]

function escapeXml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function seoBuildPlugin(siteUrl) {
  return {
    name: 'seo-sitemap-robots',
    closeBundle() {
      const base = siteUrl.replace(/\/$/, '')
      if (!base) return
      const distDir = join(process.cwd(), 'dist')
      const lines = SITEMAP_PATHS.map((path) => {
        const loc = `${base}${path}`
        const priority = path === '/' ? '1.0' : '0.8'
        return `  <url>\n    <loc>${escapeXml(loc)}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>`
      })
      const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${lines.join('\n')}\n</urlset>\n`
      writeFileSync(join(distDir, 'sitemap.xml'), xml, 'utf8')
      const robots = `User-agent: *\nAllow: /\nDisallow: /hsdkadmin/\n\nSitemap: ${base}/sitemap.xml\n`
      writeFileSync(join(distDir, 'robots.txt'), robots, 'utf8')
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const siteUrl = (env.VITE_SITE_URL || '').trim()
  return {
    plugins: [react(), seoBuildPlugin(siteUrl)],
  }
})
