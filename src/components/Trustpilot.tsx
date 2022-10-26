import * as React from 'react';

import { IconProps } from '../types';

const Trustpilot = React.forwardRef<SVGSVGElement, IconProps>(function Trustpilot({color = 'currentColor', size = 24, title = "trustpilot", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M17.227 16.67l2.19 6.742-7.413-5.388 5.223-1.354zM24 9.31h-9.165L12.005.589l-2.84 8.723L0 9.3l7.422 5.397-2.84 8.714 7.422-5.388 4.583-3.326L24 9.311z" />
    </svg>
  );
});

export default Trustpilot;
