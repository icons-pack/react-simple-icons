import * as React from 'react';

import { IconProps } from '../types';

const Awesomelists = React.forwardRef<SVGSVGElement, IconProps>(function Awesomelists({color = 'currentColor', size = 24, title = "awesomelists", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M24 11.438l-6.154-5.645-.865.944 5.128 4.7H1.895l5.128-4.705-.865-.943-6.154 5.649H0v3.72c0 1.683 1.62 3.053 3.61 3.053h3.795c1.99 0 3.61-1.37 3.61-3.051v-2.446h1.97v2.446c0 1.68 1.62 3.051 3.61 3.051h3.794c1.99 0 3.61-1.37 3.61-3.051v-3.721z" />
    </svg>
  );
});

export default Awesomelists;
