import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { defineConfig } from 'vite';
export default defineConfig({
  plugins: [react(), tailwindcss(), {
    name: 'memory-mate-offline-assets',
    apply: 'build',
    closeBundle() {
      const assets = readdirSync('dist/assets').filter(name => /\.(js|css|woff2?|png|svg)$/.test(name)).map(name => `/assets/${name}`);
      const precache = ['/', '/index.html', '/manifest.webmanifest', '/memory-mate.svg', ...assets];
      const hash = createHash('sha256').update(readFileSync('dist/index.html')).update(JSON.stringify(assets)).digest('hex').slice(0,12);
      const source = readFileSync('public/sw.js','utf8').replace(/const PRECACHE = .*;/, `const PRECACHE = ${JSON.stringify(precache)};`).replace('memory-mate-build', `memory-mate-${hash}`);
      writeFileSync('dist/sw.js', source);
    },
  }],
  resolve: { alias: { '@': path.resolve(__dirname, '.') } },
  server: { hmr: process.env.DISABLE_HMR !== 'true', watch: process.env.DISABLE_HMR === 'true' ? null : {} },
});
