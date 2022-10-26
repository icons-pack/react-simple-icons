import * as React from 'react';

import { IconProps } from '../types';

const Radar = React.forwardRef<SVGSVGElement, IconProps>(function Radar({color = 'currentColor', size = 24, title = "radar", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M12 0L2.197 23.975 12 19.952 21.803 24z" />
    </svg>
  );
});

export default Radar;
