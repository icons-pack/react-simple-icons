import * as React from 'react';

import { IconProps } from '../types';

const Osano = React.forwardRef<SVGSVGElement, IconProps>(function Osano({color = 'currentColor', size = 24, title = "osano", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M12 6.091A5.909 5.909 0 1017.909 12 5.91 5.91 0 0012 6.091M12 0A12 12 0 110 12 12 12 0 0112 0z" />
    </svg>
  );
});

export default Osano;
