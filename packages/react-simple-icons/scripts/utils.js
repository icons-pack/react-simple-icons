const format = require('prettier-eslint');
const { Signale } = require('signale');

const options = {
  types: {
    error: {
      badge: '!!',
      label: 'fatal error',
    },
    success: {
      badge: '✨',
      label: 'Component written successfully:',
    },
  },
};

module.exports = {
  signale: new Signale(options),
  /**
   * Converts a brand title into a filename (not a full path)
   * @param {String} title The title to convert
   */
  titleToFilename: title =>
    title
      .toLowerCase()
      .replace(/\+/g, 'plus')
      .replace(/^\./, 'dot-')
      .replace(/\.$/, '-dot')
      .replace(/\./g, '-dot-')
      .replace(/^&/, 'and-')
      .replace(/&$/, '-and')
      .replace(/&/g, '-and-')
      .replace(/[ !’]/g, '')
      .replace(/à|á|â|ã|ä/, 'a')
      .replace(/ç/, 'c')
      .replace(/è|é|ê|ë/, 'e')
      .replace(/ì|í|î|ï/, 'i')
      .replace(/ñ/, 'n')
      .replace(/ò|ó|ô|õ|ö/, 'o')
      .replace(/ù|ú|û|ü/, 'u')
      .replace(/ý|ÿ/, 'y')
      .replace(/500px/, 'five-hundred-px')
      .replace(/1password/, 'onePassword')
      .replace(/1001tracklists/, 'OneThousandOneTracklists')
      .replace(/micro:bit/, 'MicroBit'),

  outputFileFormat: element =>
    format({
      text: element,
      eslintConfig: {
        extends: ['plugin:prettier/recommended', 'eslint:recommended', 'plugin:react/recommended'],
      },
      prettierOptions: {
        arrowParens: 'avoid',
        singleQuote: true,
        jsxBracketSameLine: true,
        trailingComma: 'es5',
        printWidth: 120,
        semi: true,
        endOfLine: 'lf',
      },
    }),
};
