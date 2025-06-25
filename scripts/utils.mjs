import format from 'prettier-eslint';
import signalePkg from 'signale';

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

export const signale = new signalePkg.Signale(options);

export const titleToFilename = (title) => {
  const titleBase = title.replace(/'/g, '');
  const titleClear = titleBase.replace(/\bsi\b/gi, '');
  return titleClear;
};

export const outputFileFormat = (element) =>
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
  });
