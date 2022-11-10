const path = require('path');
const fs = require('fs');
const fsPromise = require('fs/promises');
const upperCamelCase = require('uppercamelcase');
const simpleIcons = require('simple-icons');
const { iconFileTemplate, iconExportTemplate } = require('./templates');
const { titleToFilename, signale } = require('./utils');

const formatFile = 'utf-8';
const rootDir = path.join(__dirname, '..');
const dir = path.join(rootDir, 'src/');
const outputComponent = 'src/components';
const indexFilePath = path.join(rootDir, 'src', 'index.ts');

const iconTitles = Object.keys(simpleIcons);

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

if (!fs.existsSync(outputComponent)) {
  fs.mkdirSync(outputComponent);
}

// Write `src/index.ts`
fs.writeFileSync(
  indexFilePath,
  iconTitles.map(baseName => iconExportTemplate(upperCamelCase(titleToFilename(baseName)))).join('\n') + '\n',
  formatFile,
);
signale.success('Write `src/index.ts`');

// Write `src/components/[componentName].ts`
Promise.all(
  iconTitles.map(baseName => {
    const componentName = upperCamelCase(titleToFilename(baseName));
    const componentFilePath = path.join(rootDir, `${outputComponent}/`, `${componentName}.ts`);

    return fsPromise.writeFile(
      componentFilePath,
      iconFileTemplate(componentName, baseName, simpleIcons[baseName].path),
      formatFile,
    );
  }),
).then(() => {
  signale.success('Write `src/components/[componentName].ts`');
});
