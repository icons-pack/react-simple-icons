import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import pkg from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      entryRoot: 'src',
      //outputDir: '.',
      //skipDiagnostics: true,
      //staticImport: true,
      //rollupTypes: false,
    }),
    react(),
  ],
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  build: {
    target: 'esnext',
    minify: false,
    outDir: './',
    lib: {
      entry: 'src/index.ts',
      fileName: (format) => (format === 'es' ? 'index.mjs' : 'index.cjs'),
    },
    rollupOptions: {
      external: [...Object.keys(pkg.peerDependencies ?? {}), 'react/jsx-runtime'],
      output: [
        {
          format: 'cjs',
          preserveModules: true,
          preserveModulesRoot: 'src',
          exports: 'named',
          entryFileNames: '[name].cjs',
        },
        {
          format: 'es',
          preserveModules: true,
          preserveModulesRoot: 'src',
          exports: 'named',
          entryFileNames: '[name].mjs',
        },
      ],
    },
  },
});
