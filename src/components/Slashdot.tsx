import * as React from 'react';

import { IconProps } from '../types';

const Slashdot = React.forwardRef<SVGSVGElement, IconProps>(function Slashdot({color = 'currentColor', size = 24, title = "slashdot", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M19.777 0L7.037 24H1.868L14.605 0h5.172zm2.354 19.801c0 2.268-1.841 4.105-4.109 4.105s-4.107-1.838-4.107-4.105 1.839-4.107 4.107-4.107 4.109 1.839 4.109 4.107z" />
    </svg>
  );
});

export default Slashdot;
