// @vitest-environment node
import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import { projects } from '../projects';

const publicDir = path.resolve(__dirname, '../../../public');
const images = projects.flatMap((p) => p.images.map((i) => ({ project: p.id, ...i })));

function walk(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]
  );
}

describe('project image files', () => {
  it.each(images)(
    '$src exists, is WebP, is under 300 KB and has the declared size',
    async (img) => {
      const file = path.join(publicDir, img.src);
      expect(fs.existsSync(file)).toBe(true);
      expect(fs.statSync(file).size).toBeLessThanOrEqual(300 * 1024);
      const meta = await sharp(file).metadata();
      expect(meta.format).toBe('webp');
      expect(meta.width).toBe(img.width);
      expect(meta.height).toBe(img.height);
    }
  );

  it('uses only lowercase file names (Vercel is case sensitive)', () => {
    for (const img of images) expect(img.src).toBe(img.src.toLowerCase());
  });

  it('has no unused image files in public/projects', () => {
    const used = new Set(images.map((i) => path.join(publicDir, i.src)));
    const onDisk = walk(path.join(publicDir, 'projects'));
    expect(onDisk.filter((f) => !used.has(f))).toEqual([]);
  });
});

describe('brand files', () => {
  it('exist', () => {
    for (const f of [
      'brand/logo-mark.svg',
      'brand/logo-mark-on-light.svg',
      'brand/icon.svg',
      'brand/icon-192.png',
      'brand/icon-512.png',
      'brand/avatar-400.png',
    ]) {
      expect(fs.existsSync(path.join(publicDir, f))).toBe(true);
    }
    const app = path.resolve(__dirname, '../../app');
    for (const f of ['icon.svg', 'apple-icon.png', 'favicon.ico']) {
      expect(fs.existsSync(path.join(app, f))).toBe(true);
    }
  });
});
