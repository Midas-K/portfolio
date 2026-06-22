import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const DEFAULT_SITE_URL = 'https://vikeshpatel.dev'

function loadSiteUrl() {
  if (process.env.VITE_SITE_URL) {
    return process.env.VITE_SITE_URL.replace(/\/$/, '')
  }

  const envPath = resolve(process.cwd(), '.env')
  if (!existsSync(envPath)) return DEFAULT_SITE_URL

  const match = readFileSync(envPath, 'utf8')
    .split('\n')
    .map((line) => line.trim())
    .find((line) => line.startsWith('VITE_SITE_URL='))

  if (!match) return DEFAULT_SITE_URL

  return match
    .slice('VITE_SITE_URL='.length)
    .trim()
    .replace(/^['"]|['"]$/g, '')
    .replace(/\/$/, '') || DEFAULT_SITE_URL
}

const siteUrl = loadSiteUrl()
const lastmod = new Date().toISOString().slice(0, 10)

const urls = [
  { loc: `${siteUrl}/`, changefreq: 'weekly', priority: '1.0' },
  { loc: `${siteUrl}/#about`, changefreq: 'monthly', priority: '0.8' },
  { loc: `${siteUrl}/#skills`, changefreq: 'monthly', priority: '0.8' },
  { loc: `${siteUrl}/#projects`, changefreq: 'weekly', priority: '0.9' },
  { loc: `${siteUrl}/#experience`, changefreq: 'monthly', priority: '0.8' },
  { loc: `${siteUrl}/#testimonials`, changefreq: 'monthly', priority: '0.7' },
  { loc: `${siteUrl}/#contact`, changefreq: 'monthly', priority: '0.8' },
]

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`

writeFileSync(resolve(process.cwd(), 'public/sitemap.xml'), sitemap)
writeFileSync(
  resolve(process.cwd(), 'public/robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
)

console.log(`Generated SEO files for ${siteUrl}`)
