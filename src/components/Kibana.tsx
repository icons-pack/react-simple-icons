import * as React from 'react';

import { IconProps } from '../types';

const Kibana = React.forwardRef<SVGSVGElement, IconProps>(function Kibana({color = 'currentColor', size = 24, title = "kibana", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M2.625 0v21.591L21.375 0zm10.864 12.47L3.477 24h17.522a18.755 18.755 0 0 0-7.51-11.53z" />
    </svg>
  );
});

export default Kibana;
