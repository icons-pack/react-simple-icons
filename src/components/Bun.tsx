import * as React from 'react';

import { IconProps } from '../types';

const Bun = React.forwardRef<SVGSVGElement, IconProps>(function Bun({color = 'currentColor', size = 24, title = "bun", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M11.079 3.17a5.251 5.251 0 0 1-1.802 3.99c-.09.08-.019.233.096.188 1.079-.419 2.535-1.673 1.92-4.204-.025-.144-.214-.106-.214.025zm.726 0a5.197 5.197 0 0 1 .515 4.31c-.038.112.1.208.176.115.701-.896 1.312-2.675-.518-4.595-.093-.084-.237.044-.173.156zm.883-.055a5.253 5.253 0 0 1 2.192 3.763.106.106 0 0 0 .208.035c.295-1.117.128-3.02-2.294-4.01-.128-.05-.211.122-.106.199zM6.781 6.443a5.422 5.422 0 0 0 3.35-2.88c.058-.115.24-.07.212.057-.554 2.56-2.407 3.095-3.559 3.024-.121.004-.118-.166-.003-.201zM12 22.44c-6.617 0-12-4.314-12-9.616 0-3.2 1.978-6.186 5.29-7.975.96-.512 1.782-1.027 2.515-1.478.403-.25.784-.483 1.152-.701C10.08 2.004 11.04 1.56 12 1.56s1.799.384 2.848 1.004c.32.183.64.381.983.599.797.493 1.696 1.05 2.88 1.686C22.023 6.638 24 9.62 24 12.824c0 5.302-5.383 9.616-12 9.616zm0-20.08c-.774 0-1.6.4-2.64 1.001-.361.211-.736.445-1.132.688-.746.461-1.6.983-2.56 1.504C2.62 7.201.8 9.918.8 12.823c0 4.861 5.024 8.817 11.2 8.817s11.2-3.956 11.2-8.816c0-2.906-1.82-5.623-4.87-7.264-1.21-.64-2.154-1.242-2.918-1.716-.35-.214-.67-.412-.96-.588-.97-.576-1.677-.896-2.452-.896zm-1.228 14.08a1.715 1.715 0 0 1 1.34-.666 1.92 1.92 0 0 1 1.28.54c.074-.08.144-.162.212-.246a2.238 2.238 0 0 0-1.508-.617 2.034 2.034 0 0 0-1.564.755c.075.082.155.16.24.234zm1.257 1.02a2.375 2.375 0 0 1-1.424-.64 3.049 3.049 0 0 1-.995-1.616.384.384 0 0 1 .083-.32.45.45 0 0 1 .362-.163h3.949a.46.46 0 0 1 .361.163.38.38 0 0 1 .08.32 3.047 3.047 0 0 1-.995 1.616 2.376 2.376 0 0 1-1.42.64zm-1.974-2.368c-.051 0-.064.023-.067.03a2.655 2.655 0 0 0 .873 1.398 1.995 1.995 0 0 0 1.168.56 2.012 2.012 0 0 0 1.168-.554 2.657 2.657 0 0 0 .87-1.398.067.067 0 0 0-.063-.03zm-3.751-3.04c0-.31.082-.615.238-.884.681-1.174 2.378-1.171 3.054.006.677 1.176-.174 2.644-1.532 2.642a1.763 1.763 0 0 1-1.76-1.764zm7.936 0a1.763 1.763 0 1 1 1.75 1.764 1.76 1.76 0 0 1-1.75-1.764zm-6.72.112a.662.662 0 0 0 .579-.99.662.662 0 1 0-.579.99zm7.927 0a.662.662 0 0 0 .578-.99.662.662 0 1 0-.585.99z" />
    </svg>
  );
});

export default Bun;
