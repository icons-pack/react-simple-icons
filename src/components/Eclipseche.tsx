import * as React from 'react';

import { IconProps } from '../types';

const Eclipseche = React.forwardRef<SVGSVGElement, IconProps>(function Eclipseche({color = 'currentColor', size = 24, title = "eclipseche", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M12 0L1.604 6.021v7.452L12 7.494l3.941 2.254 6.455-3.727zm10.396 10.527L12 16.506l-7.334-4.217-3.062 1.76v3.93L12 24l10.396-6.021z" />
    </svg>
  );
});

export default Eclipseche;
