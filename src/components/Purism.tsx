import * as React from 'react';

import { IconProps } from '../types';

const Purism = React.forwardRef<SVGSVGElement, IconProps>(function Purism({color = 'currentColor', size = 24, title = "purism", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M24 19.588H0V4.412h24zM2.824 16.765h18.352v-9.53H2.824Z" />
    </svg>
  );
});

export default Purism;
