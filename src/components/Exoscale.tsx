import * as React from 'react';

import { IconProps } from '../types';

const Exoscale = React.forwardRef<SVGSVGElement, IconProps>(function Exoscale({color = 'currentColor', size = 24, title = "exoscale", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M12 1.608 0 22.392h1.665L12 4.593v2.929l-8.612 14.87H5.11L12 10.507v2.986l-5.167 8.9h1.722L12 16.477v2.929l-1.722 2.985H24Z" />
    </svg>
  );
});

export default Exoscale;
