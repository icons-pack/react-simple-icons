import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

module.exports = defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  build: {
    target: 'ES6',
    minify: 'terser',
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'react-simple-icons',
    },
    rollupOptions: {
      external: ['react'],
      output: [
        {
          format: 'umd',
          name: 'reactSimpleIcons',
          globals: {
            react: 'React',
          },
        },
        {
          format: 'esm',
        },
      ],
    },
  },
});
