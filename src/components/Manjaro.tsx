import * as React from 'react';

import { IconProps } from '../types';

const Manjaro = React.forwardRef<SVGSVGElement, IconProps>(function Manjaro({color = 'currentColor', size = 24, title = "manjaro", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M0 0v24h6.75V6.75h8.625V0H0zm8.625 8.625V24h6.75V8.625h-6.75zM17.25 0v24H24V0h-6.75z" />
    </svg>
  );
});

export default Manjaro;
