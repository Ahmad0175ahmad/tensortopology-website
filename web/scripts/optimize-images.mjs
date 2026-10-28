// Converts the original images in image-src/ to WebP in public/projects/. Run: npm run images
// Optional per-image settings go in image-src/manifest.json, for example:
//   { "ai/expense-tracker-report.png": { "cropTop": 58 },
//     "network/quickshop-cctv-nvr.jpg": { "blurTiles": true } }
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const SRC = path.resolve('image-src');
const OUT = path.resolve('public/projects');
const exts = new Set(['.jpg', '.jpeg', '.png', '.webp']);
const manifestFile = path.join(SRC, 'manifest.json');
const manifest = fs.existsSync(manifestFile) ? JSON.parse(fs.readFileSync(manifestFile, 'utf8')) : {};

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]
  );
}

const files = walk(SRC).filter((f) => exts.has(path.extname(f).toLowerCase()));
if (files.length === 0) console.log('No images found in image-src/. See section 8.4 of the build guide.');

for (const file of files) {
  const rel = path.relative(SRC, file).split(path.sep).join('/');
  const opts = manifest[rel] ?? {};
  const out = path.join(OUT, rel).replace(/\.[^.]+$/, '.webp').toLowerCase();
  fs.mkdirSync(path.dirname(out), { recursive: true });

  // 1. read the file and apply the camera orientation (metadata such as GPS is never copied)
  let { data, info } = await sharp(file).rotate().toBuffer({ resolveWithObject: true });

  // 2. optional: cut a strip off the top (for example a browser toolbar)
  if (opts.cropTop) {
    data = await sharp(data)
      .extract({ left: 0, top: opts.cropTop, width: info.width, height: info.height - opts.cropTop })
      .toBuffer();
    info = { ...info, height: info.height - opts.cropTop };
  }

  // 3. optional: blur the camera tiles of an NVR photo so no person can be recognised.
  //    The camera name list on the left and the toolbar stay sharp.
  if (opts.blurTiles) {
    const left = Math.round(info.width * 0.236);
    const top = Math.round(info.height * 0.137);
    const width = info.width - left;
    const height = Math.round(info.height * 0.945) - top;
    const blurred = await sharp(data).extract({ left, top, width, height }).blur(4).toBuffer();
    data = await sharp(data).composite([{ input: blurred, left, top }]).toBuffer();
  }

  // 4. resize (never enlarge) and convert to WebP under 300 KB
  let quality = info.width < 600 ? 90 : 82;
  let buf;
  do {
    buf = await sharp(data).resize({ width: 1600, withoutEnlargement: true }).webp({ quality }).toBuffer();
    quality -= 6;
  } while (buf.length > 300 * 1024 && quality > 50);

  fs.writeFileSync(out, buf);
  const meta = await sharp(buf).metadata();
  console.log(`${path.relative(process.cwd(), out)}  ${meta.width}x${meta.height}  ${Math.round(buf.length / 1024)} KB`);
}
