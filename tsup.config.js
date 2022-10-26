import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  platform: 'node',
  minify: true,
  bundle: true,
  target: 'node16',
  clean: true,
  format: ['esm','cjs'],
  dts: true,
  external: 'react'
});
