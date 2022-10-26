import * as React from 'react';

import { IconProps } from '../types';

const Dash = React.forwardRef<SVGSVGElement, IconProps>(function Dash({color = 'currentColor', size = 24, title = "dash", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M3.21 9.967C.922 9.967.595 11.457.38 12.36.093 13.538 0 14.02 0 14.02h8.947c2.29 0 2.617-1.492 2.832-2.394.285-1.178.379-1.66.379-1.66zM15.72 2.26H6.982L6.26 6.307l7.884.01c3.885 0 5.03 1.41 4.997 3.748-.019 1.196-.537 3.225-.762 3.884-.598 1.753-1.827 3.749-6.435 3.744l-7.666-.004-.725 4.052h8.718c3.075 0 4.38-.36 5.767-.995 3.071-1.426 4.9-4.455 5.633-8.41C24.76 6.448 23.403 2.26 15.72 2.26z" />
    </svg>
  );
});

export default Dash;
