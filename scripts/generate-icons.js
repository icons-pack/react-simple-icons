const path = require('path');
const fs = require('fs');
const fsPromise = require('fs/promises');
const upperCamelCase = require('uppercamelcase');
const simpleIcons = require('simple-icons');
const { iconExportTemplate, iconComponenteTemplate } = require('./templates');
const { titleToFilename, signale } = require('./utils');

const formatFile = 'utf-8';
const rootDir = path.join(__dirname, '..');
const dir = path.join(rootDir, 'src/');
const outputFolderIconsTs = 'src/icons';
const indexFilePath = path.join(rootDir, 'src', 'index.ts');

const iconTitles = Object.keys(simpleIcons);

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

if (!fs.existsSync(outputFolderIconsTs)) {
  fs.mkdirSync(outputFolderIconsTs);
}

// Write `src/index.ts`
fs.writeFileSync(
  indexFilePath,
  //iconTitles.map((baseName) => iconExportTemplate(upperCamelCase(titleToFilename(baseName)))).join('\n') + '\n',
  iconTitles.map((baseName) => iconExportTemplate(upperCamelCase(titleToFilename(baseName)))).join('\n') +
    '\n' +
    'export type * from "./types";\n',
  formatFile,
);

signale.success('Write `src/index.ts`');

Promise.all(
  iconTitles.map((baseName) => {
    const componentName = upperCamelCase(titleToFilename(baseName));
    const componentFilePath = path.join(rootDir, `${outputFolderIconsTs}/`, `${componentName}.tsx`);

    return fsPromise.writeFile(
      componentFilePath,
      iconComponenteTemplate(
        componentName,
        titleToFilename(simpleIcons[baseName].title),
        `#${simpleIcons[baseName].hex}`,
        simpleIcons[baseName].path,
      ),
      formatFile,
    );
  }),
).then(() => {
  signale.success('Write src/icons');
});
