import * as React from 'react';

import { IconProps } from '../types';

const Awesomewm = React.forwardRef<SVGSVGElement, IconProps>(function Awesomewm({color = 'currentColor', size = 24, title = "awesomewm", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M0 24V8.25h16.5V7.5H0V0h24v24h-7.5v-8.25h-9v.75h8.25V24z" />
    </svg>
  );
});

export default Awesomewm;
