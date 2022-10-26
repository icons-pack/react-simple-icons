import * as React from 'react';

import { IconProps } from '../types';

const Nintendo = React.forwardRef<SVGSVGElement, IconProps>(function Nintendo({color = 'currentColor', size = 24, title = "nintendo", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M0 .6h7.1l9.85 15.9V.6H24v22.8h-7.04L7.06 7.5v15.9H0V.6" />
    </svg>
  );
});

export default Nintendo;
