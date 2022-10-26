import * as React from 'react';

import { IconProps } from '../types';

const Feathub = React.forwardRef<SVGSVGElement, IconProps>(function Feathub({color = 'currentColor', size = 24, title = "feathub", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M8.571 0v6.857h6.858V0zM0 8.571v6.858h24V8.57zm8.571 8.572V24h6.858v-6.857z" />
    </svg>
  );
});

export default Feathub;
