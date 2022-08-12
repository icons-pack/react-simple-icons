import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
//import sourcemaps from 'rollup-plugin-sourcemaps';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';
const scopeName = 'ReactSimpleIcons';

const plugins = [
  external(),
  typescript({ clean: true }),
  // sourcemaps(),
];
const terserPlugin = terser({
  output: { comments: false },
  compress: {
    drop_console: true,
  },
});

/**
 * @type {import('rollup').RollupOptions}
 */
const options = [
  {
    input: pkg.source,
    output: {
      format: 'esm',
      globals: { react: 'React' },
      dir: 'dist/esm',
      preserveModules: true,
    },
    plugins,
  },
  {
    input: pkg.source,
    output: [
      {
        format: 'cjs',
        globals: { react: 'React' },
        dir: 'dist/cjs',
        preserveModules: true,
        exports: 'auto',
      },
    ],
    plugins: [...plugins, terserPlugin],
  },
  {
    input: pkg.source,
    output: [
      {
        format: 'umd',
        name: scopeName,
        globals: { react: 'React' },
        file: 'dist/index.umd.js',
      },
    ],
    plugins: [
      ...plugins,
      commonjs({
        include: /\/node_modules\//,
      }),
      terserPlugin,
    ],
  },
];

export default options;
