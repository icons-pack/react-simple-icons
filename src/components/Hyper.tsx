import * as React from 'react';

import { IconProps } from '../types';

const Hyper = React.forwardRef<SVGSVGElement, IconProps>(function Hyper({color = 'currentColor', size = 24, title = "hyper", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M13.565 17.91H24v1.964H13.565zm-3.201-5.09l-9.187 8.003 2.86-7.004L0 11.179l9.187-8.002-3.11 7.451z" />
    </svg>
  );
});

export default Hyper;
