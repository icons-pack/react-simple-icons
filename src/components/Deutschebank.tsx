import * as React from 'react';

import { IconProps } from '../types';

const Deutschebank = React.forwardRef<SVGSVGElement, IconProps>(function Deutschebank({color = 'currentColor', size = 24, title = "deutschebank", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M3.375 3.375v17.25h17.25V3.375H3.375zM0 0h24v24H0V0zm5.25 18.225 9.15-12.45h4.35L9.6 18.225H5.25z" />
    </svg>
  );
});

export default Deutschebank;
