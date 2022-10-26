import * as React from 'react';

import { IconProps } from '../types';

const Gitlfs = React.forwardRef<SVGSVGElement, IconProps>(function Gitlfs({color = 'currentColor', size = 24, title = "gitlfs", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M11.967.304L0 7.215v9.68l11.79 6.802V14.02l11.96-6.91-4.383-2.53-11.959 6.905v3.887l-2.775-1.601V9.886l11.965-6.91zM24 7.545L12.29 14.31v9.387L24 16.929V7.547z" />
    </svg>
  );
});

export default Gitlfs;
