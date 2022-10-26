import * as React from 'react';

import { IconProps } from '../types';

const Bbciplayer = React.forwardRef<SVGSVGElement, IconProps>(function Bbciplayer({color = 'currentColor', size = 24, title = "bbciplayer", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M8.315 0H2.382v6.022h5.933V3.506l9.618 8.45-9.618 8.538V8.99H2.382V24h5.933l13.303-12.045Z" />
    </svg>
  );
});

export default Bbciplayer;
