import * as React from 'react';

import { IconProps } from '../types';

const Thingiverse = React.forwardRef<SVGSVGElement, IconProps>(function Thingiverse({color = 'currentColor', size = 24, title = "thingiverse", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M11.955.005C5.425-.152-.091 5.485.007 11.805c-.235 6.756 5.537 12.25 12.052 12.196C18.621 23.9 23.912 18.595 24 12.03 24.031 5.483 18.505-.18 11.955.005zm-.047 1.701a10.276 10.276 0 0 1 7.36 17.529 10.275 10.275 0 0 1-17.556-7.287C1.71 6.308 6.268 1.728 11.907 1.706zm-5.55 4.781c-.322 0-.358.033-.358.361v2.248c0 .351.04.391.398.391h3.823c.274 0 .274.004.274.265v9.736a.176.176 0 0 0 .051.146c.04.038.093.059.148.053h2.555c.247-.003.283-.035.283-.28v-9.32c0-.124.004-.239 0-.39s.055-.21.218-.21h3.9c.319.004.35-.032.35-.344V6.855c0-.34-.024-.363-.37-.363h-5.626z" />
    </svg>
  );
});

export default Thingiverse;
