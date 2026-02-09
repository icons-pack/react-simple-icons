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
