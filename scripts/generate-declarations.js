const path = require('path');
const fs = require('fs');
const upperCamelCase = require('uppercamelcase');
const simpleIcons = require('simple-icons');
const { declarationFileHeaderTemplate, iconDeclarationExportTemplate } = require('./templates');
const { titleToFilename, signale } = require('./utils');

const rootDir = path.join(__dirname, '..');
const declarationFilePath = path.join(rootDir, 'dist', 'index.d.ts');
const iconTitles = Object.keys(simpleIcons);

// Write `dist/index.d.ts`
fs.writeFileSync(
  declarationFilePath,
  declarationFileHeaderTemplate() +
    iconTitles.map(title => iconDeclarationExportTemplate(upperCamelCase(titleToFilename(title)))).join('\n'),
  'utf-8',
);
signale.success('Write `dist/index.d.ts`');
