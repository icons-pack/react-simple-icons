import * as React from 'react';

import { IconProps } from '../types';

const Kotlin = React.forwardRef<SVGSVGElement, IconProps>(function Kotlin({color = 'currentColor', size = 24, title = "kotlin", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M24 24H0V0h24L12 12Z" />
    </svg>
  );
});

export default Kotlin;
