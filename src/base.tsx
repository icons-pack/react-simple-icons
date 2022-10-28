import * as React from 'react';
import { IconProps } from '../templates/types';

const baseIcon = (iconTitle: string, iconPath: string) =>
  React.forwardRef<SVGSVGElement, IconProps>(function(
    { title = iconTitle, color = 'currentColor', size = 24, ...others },
    ref,
  ) {
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
