import sharp from 'sharp';
import { mkdir, stat } from 'node:fs/promises';
import path from 'node:path';
const source = path.resolve('../assets/images');
const target = path.resolve('dist/assets');
await mkdir(target, { recursive: true });
const photos = ['hero-parrilla-desktop', 'hero-parrilla-mobile', 'menu-burger', 'menu-parrilla', 'menu-cocktail', 'ambiente-desktop', 'ambiente-mobile', 'contato-mesa', 'branding-fogo'];
for (const name of photos) {
  const input = path.join(source, name + '.png');
  for (const width of [640, 1200, 1800]) {
    await sharp(input).resize({ width, withoutEnlargement: true }).webp({ quality: 82 }).toFile(path.join(target, `${name}-${width}.webp`));
  }
  await sharp(input).resize({ width: 1800, withoutEnlargement: true }).jpeg({ quality: 84, mozjpeg: true }).toFile(path.join(target, name + '.jpg'));
}
await sharp(path.join(source, 'gravura-brasas.png')).resize({ width: 640 }).png().toFile(path.join(target, 'gravura-brasas.png'));
await sharp(path.join(source, 'textura-brasas.png')).resize({ width: 1800 }).webp({ quality: 75 }).toFile(path.join(target, 'textura-brasas.webp'));
console.log('Imagens responsivas e fallbacks exportados.');
