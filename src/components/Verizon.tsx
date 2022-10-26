import * as React from 'react';

import { IconProps } from '../types';

const Verizon = React.forwardRef<SVGSVGElement, IconProps>(function Verizon({color = 'currentColor', size = 24, title = "verizon", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M18.302 0H22v.003L10.674 24H7.662L2 12h3.727l3.449 7.337z" />
    </svg>
  );
});

export default Verizon;
