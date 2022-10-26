import * as React from 'react';

import { IconProps } from '../types';

const Ludwig = React.forwardRef<SVGSVGElement, IconProps>(function Ludwig({color = 'currentColor', size = 24, title = "ludwig", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M0 0h24v24H0V0Zm13.714 10.286V3.429h-3.428v10.285H20.57V3.43h-3.428v6.857h-3.429Zm-6.857 6.857V3.429H3.43V20.57h17.14v-3.428H6.857Z" />
    </svg>
  );
});

export default Ludwig;
