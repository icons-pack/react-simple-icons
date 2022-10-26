import * as React from 'react';

import { IconProps } from '../types';

const Delicious = React.forwardRef<SVGSVGElement, IconProps>(function Delicious({color = 'currentColor', size = 24, title = "delicious", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M12 12H0v12h12V12zM24 0H12v12h12V0z" />
    </svg>
  );
});

export default Delicious;
