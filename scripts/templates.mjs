/**
This icon component file as `src/icons/[componentName].ts`.
*/
export const iconFileTemplate = (componentName, baseName, hex, path) => `import baseIcon from '../base';
const ${componentName} = baseIcon("${baseName}", '${hex}', '${path}');
export default ${componentName};\n`;

export const iconComponenteTemplate = (componentName, title, colorHex, path) => {
  return `
    import * as React from 'react';

    import { IconType } from '../types';

    type ${componentName}Props = React.ComponentPropsWithoutRef<'svg'> & {
      /**
       * The title provides an accessible short text description to the SVG
       */
      title?: string;
      /**
       * Hex color or color name or "default" to use the default hex for each icon
       */
      color?: string;
      /**
       * The size of the Icon.
       */
      size?: string | number;
    }

    const defaultColor = '${colorHex}';

    const ${componentName}: IconType = React.forwardRef<SVGSVGElement, ${componentName}Props>(function ${componentName}({title = '${title}', color = 'currentColor', size = 24, ...others }, ref) {
      if (color === 'default') {
        color = defaultColor;
      }

      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width={size}
          height={size}
          fill={color}
          viewBox='0 0 24 24'
          ref={ref}
          {...others}
        >
          <title>{title}</title>
          <path d='${path}' />
        </svg>
      );
    });

    export { ${componentName} as default, defaultColor };
  `;
};

/**
The single line for exporting component in `src/index.ts`.
*/
export const iconExportTemplate = (componentName) =>
  `export { default as ${componentName}, defaultColor as ${componentName}Hex } from './icons/${componentName}';`;
