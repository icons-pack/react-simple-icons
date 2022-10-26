import * as React from 'react';

import { IconProps } from '../types';

const Abletonlive = React.forwardRef<SVGSVGElement, IconProps>(function Abletonlive({color = 'currentColor', size = 24, title = "abletonlive", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M0 6.4v11.2h1.6V6.4zm3.2 0v11.2h1.6V6.4zm3.2 0v11.2H8V6.4zm3.2 0v11.2h1.6V6.4zm3.2 0V8H24V6.4zm0 3.2v1.6H24V9.6zm0 3.2v1.6H24v-1.6zm0 3.2v1.6H24V16z" />
    </svg>
  );
});

export default Abletonlive;
