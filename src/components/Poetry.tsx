import * as React from 'react';

import { IconProps } from '../types';

const Poetry = React.forwardRef<SVGSVGElement, IconProps>(function Poetry({color = 'currentColor', size = 24, title = "poetry", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M21.604 0a19.144 19.144 0 0 1-5.268 13.213L2.396 0l13.583 13.583a19.149 19.149 0 0 1-13.583 5.624V0h19.208Zm-1.911 17.297A24.455 24.455 0 0 1 7.189 24l-4.053-4.053a19.91 19.91 0 0 0 13.37-5.838l3.187 3.188Z" />
    </svg>
  );
});

export default Poetry;
