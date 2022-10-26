import * as React from 'react';

import { IconProps } from '../types';

const Pinboard = React.forwardRef<SVGSVGElement, IconProps>(function Pinboard({color = 'currentColor', size = 24, title = "pinboard", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M13.352 14.585l-4.509 4.614.72-4.062L3.428 7.57 0 7.753 7.58 0v2.953l7.214 6.646 4.513-1.105-4.689 4.982L24 24l-10.648-9.415z" />
    </svg>
  );
});

export default Pinboard;
