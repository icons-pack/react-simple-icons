const path = require('path');
const fs = require('fs');
const upperCamelCase = require('uppercamelcase');
const SimpleIcons = require('simple-icons');
const { titleToFilename, signale } = require('./utils');

const formatFile = 'utf-8';
const rootDir = path.join(__dirname, '..');
const dir = path.join(rootDir, 'src/');
const outputComponent = 'src/components';

const pathIndexExport = path.join(rootDir, 'src', 'index.ts');

const ICONS = Object.keys(SimpleIcons);

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

if (!fs.existsSync(outputComponent)) {
  fs.mkdirSync(outputComponent);
}

fs.writeFileSync(pathIndexExport, '', formatFile);

ICONS.forEach(icon => {
  const baseName = String(icon);
  const componentName = (baseName === 'React' || baseName === 'react') ? 'ReactJs' : upperCamelCase(titleToFilename(baseName));

  const locationOutputComponent = path.join(rootDir, `${outputComponent}/`, `${componentName}.ts`);

  const element =
  `import baseIcon from '../base';
const ${componentName} = baseIcon('${baseName}', '${SimpleIcons[baseName].path}');
export default ${componentName};
`;

  const component = element;

  fs.writeFileSync(locationOutputComponent, component, formatFile);

  signale.success(`${componentName}`);

  const exportComponent =  `export { default as ${componentName} } from './components/${componentName}';\n`
  fs.appendFileSync(pathIndexExport, exportComponent, formatFile);
});

signale.complete({ prefix: '[Components]', message: 'Ready components', suffix: '(@wootsbot)' });
