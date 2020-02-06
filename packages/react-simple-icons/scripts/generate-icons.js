const path = require('path');
const fs = require('fs');
const upperCamelCase = require('uppercamelcase');

const SimpleIcons = require('simple-icons/index.js');

const { titleToFilename, outputFileFormat, signale } = require('./utils');

const formatFile = 'utf-8';
const rootDir = path.join(__dirname, '..');
const dir = path.join(rootDir, 'src/');

const pathIndexExport = path.join(rootDir, 'src', 'index.js');

const ICONS = Object.keys(SimpleIcons);

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

fs.writeFileSync(pathIndexExport, '', formatFile);

const attrsToString = attrs => {
  return Object.keys(attrs)
    .map(key => {
      if (key === 'width' || key === 'height' || key === 'fill') {
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
  const componentName = baseName === 'React' ? 'ReactJs' : upperCamelCase(titleToFilename(baseName));

  const location = path.join(rootDir, 'src', `${componentName}.js`);

  const defaultAttrs = {
    width: 'size',
    height: 'size',
    fill: 'color',
    viewBox: '0 0 24 24',
    others: '...others',
  };

  const element = `
    import React from 'react';
    import PropTypes from 'prop-types';

    const ${componentName} = (props) => {
      const { color, size, ...others } = props;
      return (
        <svg ${attrsToString(defaultAttrs)}>
          <path d="${SimpleIcons[baseName].path}" />
        </svg>
      )
    };

    ${componentName}.propTypes = {
      /**
      * Hex color or color name
      */
      color: PropTypes.string,
      /**
      * The size of the Icon.
      */
      size: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]),
    }

    ${componentName}.defaultProps = {
      color: 'currentColor',
      size: '24',
    }

    export default ${componentName}
  `;

  const component = outputFileFormat(element);

  fs.writeFileSync(location, component, formatFile);

  signale.success(`${componentName}`);

  const exportComponent = outputFileFormat(`export { default as ${componentName} } from './${componentName}';\r\n`);

  signale.pending(`export { default as ${componentName} } from './${componentName}';\r\n`);

  fs.appendFileSync(pathIndexExport, exportComponent, formatFile);
});

signale.complete(`Ready components`);
