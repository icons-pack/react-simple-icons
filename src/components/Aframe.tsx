import * as React from 'react';

import { IconProps } from '../types';

const Aframe = React.forwardRef<SVGSVGElement, IconProps>(function Aframe({color = 'currentColor', size = 24, title = "aframe", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M17.37 17.07H6.57L4.24 24H3.01l8.23-24h1.52l8.23 24h-1.3zm-.39-1.13l-5-14.96-5.03 14.98h10.03Z" />
    </svg>
  );
});

export default Aframe;
