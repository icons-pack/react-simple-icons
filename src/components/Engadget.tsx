import * as React from 'react';

import { IconProps } from '../types';

const Engadget = React.forwardRef<SVGSVGElement, IconProps>(function Engadget({color = 'currentColor', size = 24, title = "engadget", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M0 20.067a3.9 3.9 0 0 0 4 3.866h16v-4H4v-4h15.733A4.231 4.231 0 0 0 24 12.067V4.333A4.483 4.483 0 0 0 19.733.067H4a4.346 4.346 0 0 0-4 4.266Zm20-8.134H4v-8h16Z" />
    </svg>
  );
});

export default Engadget;
