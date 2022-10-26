import * as React from 'react';

import { IconProps } from '../types';

const Macys = React.forwardRef<SVGSVGElement, IconProps>(function Macys({color = 'currentColor', size = 24, title = "macys", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M12.015.624L9.19 9.293H0l7.445 5.384-2.819 8.673L12 17.986l7.422 5.393-2.835-8.713L24 9.292h-9.162L12.015.622v.002z" />
    </svg>
  );
});

export default Macys;
