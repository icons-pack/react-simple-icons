import * as React from 'react';

import { IconProps } from '../types';

const Serverless = React.forwardRef<SVGSVGElement, IconProps>(function Serverless({color = 'currentColor', size = 24, title = "serverless", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M0 17.57h4.248l-1.316 3.974H0zm0-7.557h6.75l-1.316 3.974H0zm0-7.557h9.252L7.936 6.431H0zm13.44 0H24v3.975H12.123zM9.62 13.987l1.317-3.974H24v3.974zM8.436 17.57H24v3.975H7.119Z" />
    </svg>
  );
});

export default Serverless;
