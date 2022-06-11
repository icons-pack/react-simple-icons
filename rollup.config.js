import { createRollupConfig } from './scripts/createRollupConfig';

import pkg from './package.json';

const name = 'index';
const scopeName = 'ReactSimpleIcons';

const options = [
  {
    scopeName,
    name,
    format: 'cjs',
    input: pkg.source,
    external: [],
    output: {
      globals: { react: 'React' },
    },
  },
  {
    name,
    format: 'esm',
    input: pkg.source,
    external: [],
    output: {
      globals: { react: 'React' },
    },
  },
  {
    scopeName,
    name,
    format: 'umd',
    input: pkg.source,
    external: [],
    output: {
      globals: {
        react: 'React',
      },
    },
  },
];

export default options.map(option => createRollupConfig(option));
