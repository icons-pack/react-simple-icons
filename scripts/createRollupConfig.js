
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
//import sourcemaps from 'rollup-plugin-sourcemaps';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';


export function createRollupConfig(options, callback) {
  const name = options.name;
  const scopeName = options.scopeName;
  const outputName = 'dist/' + [name, options.format, 'js'].join('.');

  const outputExtendsPackages = options.output ?? {};
  const externalExtendsPackages = options.external ?? {};

  const config = {
    input: options.input,
    output: {
      file: outputName,
      format: options.format,
      name: scopeName,
      //sourcemap: true,
      exports: 'named',
      ...outputExtendsPackages
    },
    external: externalExtendsPackages,
    plugins: [
      external(),
      typescript({
        tsconfig: options.tsconfig,
        clean: true,
      }),
      options.format === 'umd' &&
        commonjs({
          include: /\/node_modules\//,
        }),
      // sourcemaps(),
      options.format !== 'esm' &&
        terser({
          output: { comments: false },
          compress: {
            drop_console: true,
          },
        }),
    ].filter(Boolean),
  }

  return callback ? callback(config) : config;
}
