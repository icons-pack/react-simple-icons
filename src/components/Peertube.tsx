import * as React from 'react';

import { IconProps } from '../types';

const Peertube = React.forwardRef<SVGSVGElement, IconProps>(function Peertube({color = 'currentColor', size = 24, title = "peertube", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M12 6.545v10.91L20.727 12M3.273 12v12L12 17.455M3.273 0v12L12 6.545" />
    </svg>
  );
});

export default Peertube;
