import * as React from 'react';

import { IconProps } from '../types';

const Windows11 = React.forwardRef<SVGSVGElement, IconProps>(function Windows11({color = 'currentColor', size = 24, title = "windows11", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M0,0H11.377V11.372H0ZM12.623,0H24V11.372H12.623ZM0,12.623H11.377V24H0Zm12.623,0H24V24H12.623" />
    </svg>
  );
});

export default Windows11;
