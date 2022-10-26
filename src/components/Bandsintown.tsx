import * as React from 'react';

import { IconProps } from '../types';

const Bandsintown = React.forwardRef<SVGSVGElement, IconProps>(function Bandsintown({color = 'currentColor', size = 24, title = "bandsintown", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M18.783 0H24v12h-5.217V0zm-6.261 5h5.217v7h-5.217V5zM6.26 5h5.217v7H6.261V5zM24 24H0V0h5.217v19h13.566v-1H6.26v-5H24v11Z" />
    </svg>
  );
});

export default Bandsintown;
