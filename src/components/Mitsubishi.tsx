import * as React from 'react';

import { IconProps } from '../types';

const Mitsubishi = React.forwardRef<SVGSVGElement, IconProps>(function Mitsubishi({color = 'currentColor', size = 24, title = "mitsubishi", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M8 22.38H0l4-6.92h8zm8 0h8l-4-6.92h-8zm0-13.84l-4-6.92-4 6.92 4 6.92Z" />
    </svg>
  );
});

export default Mitsubishi;
