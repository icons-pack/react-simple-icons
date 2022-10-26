import * as React from 'react';

import { IconProps } from '../types';

const Elementor = React.forwardRef<SVGSVGElement, IconProps>(function Elementor({color = 'currentColor', size = 24, title = "elementor", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M12 0C5.372 0 0 5.372 0 12c0 6.626 5.372 12 12 12s12-5.372 12-12c0-6.626-5.372-12-12-12ZM9 17H7V7H9Zm8 0H11V15h6Zm0-4H11V11h6Zm0-4H11V7h6Z" />
    </svg>
  );
});

export default Elementor;
