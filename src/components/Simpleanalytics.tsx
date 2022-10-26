import * as React from 'react';

import { IconProps } from '../types';

const Simpleanalytics = React.forwardRef<SVGSVGElement, IconProps>(function Simpleanalytics({color = 'currentColor', size = 24, title = "simpleanalytics", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M1.019 13.019h3.849V24h-3.85zm8.943-6.68h3.85V24h-3.85zM19.132 0h3.85v24h-3.85z" />
    </svg>
  );
});

export default Simpleanalytics;
