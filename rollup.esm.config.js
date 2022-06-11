import { createRollupConfig } from './scripts/createRollupConfig';

import pkg from './package.json';

export default createRollupConfig({
  scopeName: 'ReactSimpleIcons',
  name: 'index',
  format: 'esm',
  input: pkg.source,
  external: [],
  output: {
    globals: { react: 'React' },
  },
});
