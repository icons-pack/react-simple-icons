import * as React from 'react';

import { IconProps } from '../types';

const Headspace = React.forwardRef<SVGSVGElement, IconProps>(function Headspace({color = 'currentColor', size = 24, title = "headspace", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M23.9711 11.8612c.279 3.8878-1.5272 6.0933-2.6155 7.6357-1.694 1.7856-3.8397 4.2203-9.291 4.3565-4.6237.1827-6.8957-1.8508-8.8034-3.617-2.487-2.7336-3.1366-4.3512-3.261-8.3752-.0118-2.467.9397-4.9292 2.6025-7.0954C4.934 1.4736 8.6408.3699 12.0646.1426c3.5923-.1392 6.4493 1.6723 8.3993 3.624 2.4963 2.632 3.2629 4.8923 3.5054 8.0946Z" />
    </svg>
  );
});

export default Headspace;
