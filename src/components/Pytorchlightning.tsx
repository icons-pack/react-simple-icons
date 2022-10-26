import * as React from 'react';

import { IconProps } from '../types';

const Pytorchlightning = React.forwardRef<SVGSVGElement, IconProps>(function Pytorchlightning({color = 'currentColor', size = 24, title = "pytorchlightning", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M12 0L1.75 6v12L12 24l10.25-6V6zm-1.775 18l1.08-4.657-2.428-2.397L13.79 6l-1.082 4.665 2.414 2.384z" />
    </svg>
  );
});

export default Pytorchlightning;
