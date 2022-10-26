import * as React from 'react';

import { IconProps } from '../types';

const Micropython = React.forwardRef<SVGSVGElement, IconProps>(function Micropython({color = 'currentColor', size = 24, title = "micropython", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M0 0h11.509v18.737h.982V0H24v24h-5.263V5.263h-.983V24H6.246V5.263l-.983.035V24H0zm22.246 19.509h-1.404v2.386h1.404z" />
    </svg>
  );
});

export default Micropython;
