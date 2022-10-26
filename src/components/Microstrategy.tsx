import * as React from 'react';

import { IconProps } from '../types';

const Microstrategy = React.forwardRef<SVGSVGElement, IconProps>(function Microstrategy({color = 'currentColor', size = 24, title = "microstrategy", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M9.095 2.572h5.827v18.856H9.096zM0 2.572h5.825v18.856H.001zm18.174 0v18.854H24V8.33z" />
    </svg>
  );
});

export default Microstrategy;
