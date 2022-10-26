import * as React from 'react';

import { IconProps } from '../types';

const Netapp = React.forwardRef<SVGSVGElement, IconProps>(function Netapp({color = 'currentColor', size = 24, title = "netapp", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M0 2v20h9.33V10h5.34v12H24V2Z" />
    </svg>
  );
});

export default Netapp;
