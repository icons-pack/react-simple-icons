import * as React from 'react';

import { IconProps } from '../types';

const Dwm = React.forwardRef<SVGSVGElement, IconProps>(function Dwm({color = 'currentColor', size = 24, title = "dwm", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M0 11h6V7h2v8h2v-4h2v4h2v-4h10v6h-2v-4h-2v4h-2v-4h-2v4H2v-2h4v-2H2v4H0z" />
    </svg>
  );
});

export default Dwm;
