const path = require('path');
const fs = require('fs');
const upperCamelCase = require('uppercamelcase');
const SimpleIcons = require('simple-icons');
const { titleToFilename, outputFileFormat, signale } = require('./utils');

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

const attrsToString = attrs => {
  return Object.keys(attrs)
    .map(key => {
      if (key === 'width' || key === 'height' || key === 'fill' || key === 'ref') {
        return key + '={' + attrs[key] + '}';
      }
      if (key === 'others') {
        return '{...others}';
      }
      return key + '="' + attrs[key] + '"';
    })
    .join(' ');
};

ICONS.forEach(icon => {
  const baseName = String(icon);
  const componentName = (baseName === 'React' || baseName === 'react') ? 'ReactJs' : upperCamelCase(titleToFilename(baseName));

  const locationOutputComponent = path.join(rootDir, `${outputComponent}/`, `${componentName}.tsx`);

  const defaultAttrs = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: 'size',
    height: 'size',
    fill: 'color',
    viewBox: '0 0 24 24',
    ref: 'ref',
    others: '...others',
  };

  const element = `
    import * as React from 'react';

    export type ${componentName}Props = React.ComponentPropsWithoutRef<'svg'> & {
      /**
       * Hex color or color name
       */
      title?: string;
      /**
       * The size of the Icon.
       */
      color?: string;
      /**
       * The title provides an accessible short text description to the SVG
       */
      size?: string | number;
    };

    const ${componentName} = React.forwardRef<SVGSVGElement, ${componentName}Props>(function ${componentName}({color = 'currentColor', size = 24, title = "${baseName}", ...others}, ref) {

      return (
        <svg ${attrsToString(defaultAttrs)}>
          <title>{title}</title>
          <path d="${SimpleIcons[baseName].path}" />
        </svg>
      );
    });

    export default ${componentName}
  `;

   const component = element;
  //const component = outputFileFormat(element);

  fs.writeFileSync(locationOutputComponent, component, formatFile);

  signale.success(`${componentName}`);

  const exportComponent =  `export { default as ${componentName} } from './components/${componentName}';\n`
  // const exportComponent = outputFileFormat(
  //   `export { default as ${componentName} } from './components/${componentName}';\n`
  // );

  fs.appendFileSync(pathIndexExport, exportComponent, formatFile);
});

signale.complete({ prefix: '[Components]', message: 'Ready components', suffix: '(@wootsbot)' });
