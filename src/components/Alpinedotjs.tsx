import * as React from 'react';

import { IconProps } from '../types';

const Alpinedotjs = React.forwardRef<SVGSVGElement, IconProps>(function Alpinedotjs({color = 'currentColor', size = 24, title = "alpinedotjs", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="m24 12-5.72 5.746-5.724-5.741 5.724-5.75L24 12zM5.72 6.254 0 12l5.72 5.746h11.44L5.72 6.254z" />
    </svg>
  );
});

export default Alpinedotjs;
