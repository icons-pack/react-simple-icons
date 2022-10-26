import * as React from 'react';

import { IconProps } from '../types';

const Suckless = React.forwardRef<SVGSVGElement, IconProps>(function Suckless({color = 'currentColor', size = 24, title = "suckless", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M0 4h24v4H4v2h20v10H0v-4h20v-2H0z" />
    </svg>
  );
});

export default Suckless;
