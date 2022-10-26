import * as React from 'react';

import { IconProps } from '../types';

const Naver = React.forwardRef<SVGSVGElement, IconProps>(function Naver({color = 'currentColor', size = 24, title = "naver", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M16.273 12.845 7.376 0H0v24h7.726V11.156L16.624 24H24V0h-7.727v12.845Z" />
    </svg>
  );
});

export default Naver;
