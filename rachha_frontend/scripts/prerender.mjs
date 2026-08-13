import { createServer } from 'node:http'
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { extname, join, normalize, dirname } from 'node:path'
import puppeteer from 'puppeteer'

const distDir = join(process.cwd(), 'dist')
const PORT = 4175

const EVENT_SLUGS = [
  'birthday-celebration',
  'kitty-party',
  'bridal-shower',
  'naming-ceremony',
  'house-warming',
  'wedding',
  'engagement',
  'college-events',
  'anniversary',
  'theme-parties',
  'surprise-events',
  'corporate-events',
  'festive-events',
]

const ROUTES = [
  '/',
  '/services',
  '/gallery',
  '/about',
  '/contact',
  ...EVENT_SLUGS.map((slug) => `/services/${slug}`),
]

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.mjs': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
}

function startServer() {
  const server = createServer(async (req, res) => {
    try {
      const url = new URL(req.url || '/', `http://localhost:${PORT}`)
      let pathname = decodeURIComponent(url.pathname)
      if (pathname === '/') pathname = '/index.html'

      const safePath = normalize(pathname).replace(/^(\.\.[/\\])+/, '')
      const filePath = join(distDir, safePath)

      if (!filePath.startsWith(distDir)) {
        res.writeHead(403)
        res.end('Forbidden')
        return
      }

      let content
      try {
        content = await readFile(filePath)
      } catch {
        content = await readFile(join(distDir, 'index.html'))
      }

      res.writeHead(200, {
        'Content-Type': MIME[extname(filePath)] || 'application/octet-stream',
      })
      res.end(content)
    } catch (err) {
      res.writeHead(500)
      res.end(String(err))
    }
  })

  return new Promise((resolve) => {
    server.listen(PORT, '127.0.0.1', () => {
      resolve({ server, base: `http://127.0.0.1:${PORT}` })
    })
  })
}

async function writeRoute(route, html) {
  const rel =
    route === '/' ? 'index.html' : `${route.replace(/^\/+/, '')}/index.html`
  const outPath = join(distDir, rel)
  await mkdir(dirname(outPath), { recursive: true })
  await writeFile(outPath, html, 'utf8')
}

async function main() {
  const { server, base } = await startServer()
  console.log(`Pre-rendering ${ROUTES.length} routes from ${base}…`)

  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()
  page.setCacheEnabled(false)
  const results = []
  let lastTitle = ''

  try {
    await page.goto(base + '/', { waitUntil: 'networkidle2', timeout: 90000 })
    await page.waitForFunction(() => document.title !== '')
    lastTitle = await page.title()

    for (const route of ROUTES) {
      if (route !== '/') {
        await page.evaluate(
          (r) => {
            window.history.pushState({}, '', r)
            window.dispatchEvent(new PopStateEvent('popstate'))
          },
          route,
        )
        await page.waitForFunction(
          (prev) => document.title !== prev,
          { timeout: 30000 },
          lastTitle,
        )
      }

      await new Promise((resolve) => setTimeout(resolve, 2000))
      const html = await page.content()
      await writeRoute(route, html)
      lastTitle = await page.title()
      results.push(`ok     ${route} -> "${lastTitle}"`)
    }

    const homeHtml = await readFile(join(distDir, 'index.html'), 'utf8')
    await writeFile(join(distDir, '200.html'), homeHtml, 'utf8')
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    await browser.close()
    server.close()
  }

  console.log(results.join('\n'))
  if (process.exitCode) {
    console.error('\nPre-render failed.')
  } else {
    console.log('\nPre-render complete. Static HTML written to dist/.')
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
