import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import pkg from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({
      skipDiagnostics: true,
      entryRoot: 'src',
      staticImport: true,
      rollupTypes: false,
    }),
    react(),
  ],
  build: {
    target: 'esnext',
    minify: false,
    lib: {
      entry: 'src/index.ts',
      fileName: (format) => (format === 'es' ? 'index.mjs' : 'index.cjs'),
    },
    rollupOptions: {
      external: [
        ...Object.keys(pkg.peerDependencies ?? {}),
        'react/jsx-runtime',
      ],
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
})
