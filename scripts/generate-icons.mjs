import path from 'path';
import fs, { constants } from 'node:fs/promises';
import upperCamelCase from 'uppercamelcase';
import * as simpleIcons from 'simple-icons';
import { iconExportTemplate, iconComponenteTemplate } from './templates.mjs';
import { titleToFilename, signale } from './utils.mjs';

const formatFile = 'utf-8';
const rootDir = path.join(import.meta.dirname, '..');
const dir = path.join(rootDir, 'src/');
const outputFolderIconsTs = 'src/icons';
const indexFilePath = path.join(rootDir, 'src', 'index.ts');

const iconTitles = Object.keys(simpleIcons);

const fileExists = (target) =>
  fs
    .access(target, constants.R_OK | constants.W_OK)
    .then(() => true)
    .catch(() => false);

const dirExists = await fileExists(dir);
if (!dirExists) {
  await fs.mkdir(dir);
}

const outputFolderIconsTsExists = await fileExists(outputFolderIconsTs);
if (!outputFolderIconsTsExists) {
  await fs.mkdir(outputFolderIconsTs);
}

// Write `src/index.ts`
await fs.writeFile(
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

    return fs.writeFile(
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
