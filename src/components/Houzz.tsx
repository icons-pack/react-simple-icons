import * as React from 'react';

import { IconProps } from '../types';

const Houzz = React.forwardRef<SVGSVGElement, IconProps>(function Houzz({color = 'currentColor', size = 24, title = "houzz", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M1.27 0V24H9.32V16.44H14.68V24H22.73V10.37L6.61 5.75V0H1.27Z" />
    </svg>
  );
});

export default Houzz;
