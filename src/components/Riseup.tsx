import * as React from 'react';

import { IconProps } from '../types';

const Riseup = React.forwardRef<SVGSVGElement, IconProps>(function Riseup({color = 'currentColor', size = 24, title = "riseup", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M10.5 24l-1.485-9.007-8.961-1.738L8.16 9.06 7.045 0l6.495 6.414 8.271-3.861-4.093 8.16 6.228 6.673-9.024-1.372z" />
    </svg>
  );
});

export default Riseup;
