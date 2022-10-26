import * as React from 'react';

import { IconProps } from '../types';

const Chartmogul = React.forwardRef<SVGSVGElement, IconProps>(function Chartmogul({color = 'currentColor', size = 24, title = "chartmogul", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M10.621 19.89V8.75L2.867 19.89H0V4.11h2.758v11.112l7.754-11.113h2.867v11.14L21.16 4.11H24v15.782h-2.73V8.75l-7.755 11.14Z" />
    </svg>
  );
});

export default Chartmogul;
