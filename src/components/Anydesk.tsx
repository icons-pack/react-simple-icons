import * as React from 'react';

import { IconProps } from '../types';

const Anydesk = React.forwardRef<SVGSVGElement, IconProps>(function Anydesk({color = 'currentColor', size = 24, title = "anydesk", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M8.322 3.677L0 12l8.322 8.323L16.645 12zm7.371.01l-1.849 1.85 6.49 6.456-6.49 6.49 1.85 1.817L24 11.993Z" />
    </svg>
  );
});

export default Anydesk;
