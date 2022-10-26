import * as React from 'react';

import { IconProps } from '../types';

const Istio = React.forwardRef<SVGSVGElement, IconProps>(function Istio({color = 'currentColor', size = 24, title = "istio", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M4 21 20 21 10 24zM4 20 10 19 10 8zM11 19 20 20 11 0z" />
    </svg>
  );
});

export default Istio;
