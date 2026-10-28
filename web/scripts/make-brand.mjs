// Generates the TensorTopology logo and icon files. Run: npm run brand
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const C = { bp900: '#0C1A4F', paper: '#EEF3FF', pink: '#FF5CA8', orange: '#FFAE42', aqua: '#4FE3C8' };

// Logo mark: a "T" of network nodes. Dotted pink path (AI) turns into a solid orange cable (network).
const mark = ({ stem = C.paper, hub = C.paper, pink = C.pink, orange = C.orange, aqua = C.aqua } = {}) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64" role="img" aria-label="TensorTopology mark">
  <title>TensorTopology</title>
  <circle cx="9" cy="22" r="5" fill="none" stroke="${pink}" stroke-width="3"/>
  <path d="M15.5 22H26" stroke="${pink}" stroke-width="2.8" stroke-linecap="round" stroke-dasharray="0.1 3.9" fill="none"/>
  <path d="M38.5 22H48" stroke="${orange}" stroke-width="3.5" stroke-linecap="round" fill="none"/>
  <circle cx="55" cy="22" r="5" fill="none" stroke="${orange}" stroke-width="3"/>
  <circle cx="32" cy="22" r="6.5" fill="${hub}"/>
  <path d="M32 29.5V46" stroke="${stem}" stroke-width="3.5" stroke-linecap="round" fill="none"/>
  <circle cx="32" cy="52" r="5" fill="none" stroke="${aqua}" stroke-width="3"/>
  <circle cx="32" cy="52" r="1.8" fill="${aqua}"/>
</svg>
`;

// App icon: bold and simple so it stays readable at 16 px, on a blueprint badge.
const icon = (radius = 14) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <rect width="64" height="64" rx="${radius}" fill="${C.bp900}"/>
  <path d="M16 24H25" stroke="${C.pink}" stroke-width="3.6" stroke-linecap="round" stroke-dasharray="0.1 4.2" fill="none"/>
  <path d="M39 24H48" stroke="${C.orange}" stroke-width="4.5" stroke-linecap="round" fill="none"/>
  <circle cx="10" cy="24" r="5.2" fill="${C.pink}"/>
  <circle cx="54" cy="24" r="5.2" fill="${C.orange}"/>
  <circle cx="32" cy="24" r="7" fill="${C.paper}"/>
  <path d="M32 31V45" stroke="${C.paper}" stroke-width="4.5" stroke-linecap="round" fill="none"/>
  <circle cx="32" cy="52" r="5.5" fill="${C.aqua}"/>
</svg>
`;

const write = (file, data) => {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, data);
  console.log('wrote', file);
};
// render the SVG at the target size (density scales with size so the result stays sharp)
const png = (svg, size) =>
  sharp(Buffer.from(svg), { density: Math.ceil((72 * size) / 64) }).resize(size, size).png().toBuffer();

// favicon.ico that contains PNG images (supported by all current browsers)
function ico(images) {
  const head = Buffer.alloc(6);
  head.writeUInt16LE(0, 0);
  head.writeUInt16LE(1, 2);
  head.writeUInt16LE(images.length, 4);
  let offset = 6 + 16 * images.length;
  const dirs = images.map(({ size, buf }) => {
    const d = Buffer.alloc(16);
    d.writeUInt8(size, 0); d.writeUInt8(size, 1);
    d.writeUInt16LE(1, 4); d.writeUInt16LE(32, 6);
    d.writeUInt32LE(buf.length, 8); d.writeUInt32LE(offset, 12);
    offset += buf.length;
    return d;
  });
  return Buffer.concat([head, ...dirs, ...images.map((i) => i.buf)]);
}

// SVG files
write('public/brand/logo-mark.svg', mark());
write('public/brand/logo-mark-on-light.svg',
  mark({ stem: C.bp900, hub: C.bp900, pink: '#D6246E', orange: '#C97700', aqua: '#0F9B86' }));
write('public/brand/icon.svg', icon());
write('src/app/icon.svg', icon());            // Next.js uses this as the favicon automatically

// PNG files
const square = icon(0);                        // full-bleed square (iOS rounds the corners itself)
write('src/app/apple-icon.png', await png(square, 180));
write('public/brand/icon-192.png', await png(icon(), 192));
write('public/brand/icon-512.png', await png(icon(), 512));
write('public/brand/avatar-400.png', await png(square, 400));   // LinkedIn / WhatsApp Business profile picture
write('src/app/favicon.ico', ico(await Promise.all([16, 32, 48].map(async (size) => ({ size, buf: await png(icon(), size) })))));
