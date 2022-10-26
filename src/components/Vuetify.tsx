import * as React from 'react';

import { IconProps } from '../types';

const Vuetify = React.forwardRef<SVGSVGElement, IconProps>(function Vuetify({color = 'currentColor', size = 24, title = "vuetify", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M7.094 0L12 11.596 16.906 0H7.094zM1.5 3.5L12 24 22.5 3.5H17L12 15 7 3.5z" />
    </svg>
  );
});

export default Vuetify;
