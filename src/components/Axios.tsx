import * as React from 'react';

import { IconProps } from '../types';

const Axios = React.forwardRef<SVGSVGElement, IconProps>(function Axios({color = 'currentColor', size = 24, title = "axios", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M11.0683 2.89968V22.2973l-2.11399 1.70265V7.8638H4.975l6.0933-4.96412zM14.93426 0v15.76724H19.025l-6.20044 5.08865V1.4689L14.93426 0z" />
    </svg>
  );
});

export default Axios;
