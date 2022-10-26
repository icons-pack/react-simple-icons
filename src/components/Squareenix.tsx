import * as React from 'react';

import { IconProps } from '../types';

const Squareenix = React.forwardRef<SVGSVGElement, IconProps>(function Squareenix({color = 'currentColor', size = 24, title = "squareenix", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M1.723 0v24h20.554v-4.496H7.037V4.088h15.006V0zm9.751 9.46v4.497h8.584V9.459z" />
    </svg>
  );
});

export default Squareenix;
