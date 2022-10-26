import * as React from 'react';

import { IconProps } from '../types';

const Adobe = React.forwardRef<SVGSVGElement, IconProps>(function Adobe({color = 'currentColor', size = 24, title = "adobe", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425zM8.884 1.376H0v21.248zm15.116 0h-8.884L24 22.624Z" />
    </svg>
  );
});

export default Adobe;
