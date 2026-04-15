import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const src = path.join(root, 'src', 'assets', 'arat_logo.webp')
const publicDir = path.join(root, 'public')

const TRANSPARENT = { r: 0, g: 0, b: 0, alpha: 0 }
const OG_BG = { r: 246, g: 243, b: 238, alpha: 1 }

if (!fs.existsSync(src)) {
  console.error('Missing source:', src)
  process.exit(1)
}

const pngOut = { compressionLevel: 9 }

async function squareContain(size, destName) {
  await sharp(src)
    .resize(size, size, { fit: 'contain', position: 'center', background: TRANSPARENT })
    .png(pngOut)
    .toFile(path.join(publicDir, destName))
}

await squareContain(48, 'arat_favicon_48.png')
await squareContain(192, 'arat_favicon_192.png')
await squareContain(180, 'arat_apple_touch.png')

await sharp(src)
  .resize(1200, 630, { fit: 'contain', position: 'center', background: OG_BG })
  .png(pngOut)
  .toFile(path.join(publicDir, 'arat_og.png'))
