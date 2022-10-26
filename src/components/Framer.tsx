import * as React from 'react';

import { IconProps } from '../types';

const Framer = React.forwardRef<SVGSVGElement, IconProps>(function Framer({color = 'currentColor', size = 24, title = "framer", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
    </svg>
  );
});

export default Framer;
