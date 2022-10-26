import * as React from 'react';

import { IconProps } from '../types';

const Funimation = React.forwardRef<SVGSVGElement, IconProps>(function Funimation({color = 'currentColor', size = 24, title = "funimation", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M12 0a12 12 0 1 0 12 12A12.001 12.001 0 0 0 12 0ZM7.428 16.06h9.188s-.449 3.278-4.601 3.278c-4.15 0-4.587-3.278-4.587-3.278z" />
    </svg>
  );
});

export default Funimation;
