import * as React from 'react';

import { IconProps } from '../types';

const Clickhouse = React.forwardRef<SVGSVGElement, IconProps>(function Clickhouse({color = 'currentColor', size = 24, title = "clickhouse", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M21.333 10H24v4h-2.667ZM16 1.335h2.667v21.33H16Zm-5.333 0h2.666v21.33h-2.666ZM0 22.665V1.335h2.667v21.33zm5.333-21.33H8v21.33H5.333Z" />
    </svg>
  );
});

export default Clickhouse;
