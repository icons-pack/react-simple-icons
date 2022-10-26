import * as React from 'react';

import { IconProps } from '../types';

const Cairometro = React.forwardRef<SVGSVGElement, IconProps>(function Cairometro({color = 'currentColor', size = 24, title = "cairometro", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M12.397 4.14h.882v.881h-.882zm-1.628 0h.883v.881h-.883zm4.915 1.055v3.402h-1.386V5.195h-.84v1.763h-2.983V5.196h-.84v3.402H8.543v.84h1.911V7.82h2.983v1.617h5.44V5.195zm2.352 3.395h-1.512V6.028h1.512zM5.173 5.195v2.604h2.353v.805H5.173v.833h3.193V5.195zm2.339 1.757H5.999v-.924h1.513zm-2.64 12.177V9.726h4.175L12 12.68l2.954-2.953h4.176v9.403h-4.176v-3.442L12 18.754l-2.952-3.048v3.424zM12 0L8.485 3.515h-4.97v4.97L0 12l3.515 3.515v4.97h4.97L12 24l3.515-3.515h4.97v-4.97L24 12l-3.515-3.515v-4.97h-4.97zm0 1.708l3.014 3.015h4.263v4.263L22.292 12l-3.015 3.014v4.263h-4.263L12 22.292l-3.014-3.015H4.723v-4.263L1.708 12l3.015-3.014V4.723h4.263Z" />
    </svg>
  );
});

export default Cairometro;
