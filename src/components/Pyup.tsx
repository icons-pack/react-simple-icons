import * as React from 'react';

import { IconProps } from '../types';

const Pyup = React.forwardRef<SVGSVGElement, IconProps>(function Pyup({color = 'currentColor', size = 24, title = "pyup", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M12 0L1.608 6v12l3.984 2.3v-12L12 4.6l6.408 3.7v7.4L12 19.4l-2.95-1.705v4.602L12 24l10.392-6V6zm0 8.593l-2.95 1.703v3.408L12 15.407l2.95-1.703v-3.408z" />
    </svg>
  );
});

export default Pyup;
