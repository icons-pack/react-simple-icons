import * as React from 'react';
import { IconProps, IconType } from './types';

const baseIcon = (iconTitle: string, hex: string, iconPath: string): IconType =>
  React.forwardRef<SVGSVGElement, IconProps>(function(
    { title = iconTitle, color = 'currentColor', size = 24, ...others },
    ref,
  ) {
    if (color === 'default') {
      color = hex;
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
        <path d={iconPath} />
      </svg>
    );
  });

export default baseIcon;
