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
      label: 'File written successfully:',
    },
  },
};

module.exports = {
  signale: new Signale(options),
  /**
   * Converts a brand title into a filename (not a full path)
   * @param {String} title The title to convert
   */
  titleToFilename: (title) => {
    const titleBase = title.replace(/'/g, '');
    const titleClear = titleBase.replace(/\bsi\b/gi, '');
    return titleClear;
  },

  outputFileFormat: (element) =>
    format({
      text: element,
      eslintConfig: {
        extends: ['plugin:prettier/recommended', '@typescript-eslint/eslint-plugin'],
      },
      prettierOptions: {
        bracketSpacing: true,
        jsxSingleQuote: true,
        printWidth: 120,
        proseWrap: 'always',
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all',
      },
    }),
};
