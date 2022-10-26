import * as React from 'react';

import { IconProps } from '../types';

const Stackblitz = React.forwardRef<SVGSVGElement, IconProps>(function Stackblitz({color = 'currentColor', size = 24, title = "stackblitz", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M10.797 14.182H3.635L16.728 0l-3.525 9.818h7.162L7.272 24l3.524-9.818Z" />
    </svg>
  );
});

export default Stackblitz;
