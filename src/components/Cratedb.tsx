import * as React from 'react';

import { IconProps } from '../types';

const Cratedb = React.forwardRef<SVGSVGElement, IconProps>(function Cratedb({color = 'currentColor', size = 24, title = "cratedb", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M18 9V3h-6v6H0v6h6v6h6v-6h12V9h-6z" />
    </svg>
  );
});

export default Cratedb;
