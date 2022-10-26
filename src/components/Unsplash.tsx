import * as React from 'react';

import { IconProps } from '../types';

const Unsplash = React.forwardRef<SVGSVGElement, IconProps>(function Unsplash({color = 'currentColor', size = 24, title = "unsplash", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M7.5 6.75V0h9v6.75h-9zm9 3.75H24V24H0V10.5h7.5v6.75h9V10.5z" />
    </svg>
  );
});

export default Unsplash;
