import * as React from 'react';

import { IconProps } from '../types';

const V = React.forwardRef<SVGSVGElement, IconProps>(function V({color = 'currentColor', size = 24, title = "v", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M15.583 23.4965c.0673.1924-.0435.3484-.2472.3484h-6.262c-.4075 0-.8502-.3113-.9881-.6947L.0426.7837C-.105.3925.149.1152.5276.1599l6.393.6158c.4056.0391.8441.383.9787.7675l7.6837 21.9533zM23.4736.1599l-6.393.6159c-.4055.0391-.8436.3832-.9775.7678l-3.8275 10.9895 3.6784 10.5098L23.9586.7837c.1378-.3834-.0795-.663-.485-.6238z" />
    </svg>
  );
});

export default V;
