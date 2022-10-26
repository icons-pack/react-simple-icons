import * as React from 'react';

import { IconProps } from '../types';

const Undertale = React.forwardRef<SVGSVGElement, IconProps>(function Undertale({color = 'currentColor', size = 24, title = "undertale", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M3 0v1.5H1.5V3H0v12h3v3h3v3h3v3h6v-3h3v-3h3v-3h3V3h-1.5V1.5H21V0h-3v1.5h-3V3h-1.5v3h-3V3H9V1.5H6V0z" />
    </svg>
  );
});

export default Undertale;
