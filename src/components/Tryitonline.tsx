import * as React from 'react';

export type TryitonlineProps = React.ComponentPropsWithoutRef<'svg'> & {
  /**
   * Hex color or color name
   */
  title?: string;
  /**
   * The size of the Icon.
   */
  color?: string;
  /**
   * The title provides an accessible short text description to the SVG
   */
  size?: string | number;
};

const Tryitonline = React.forwardRef<SVGSVGElement, TryitonlineProps>(function Tryitonline({color = 'currentColor', size = 24, title = "tryitonline", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M.75 6a.75.75 0 100 1.5H4.5v9.75a.75.75 0 101.5 0V7.5h17.25a.75.75 0 100-1.5zm10.5 3a.75.75 0 00-.75.75v7.5a.75.75 0 101.5 0v-7.5a.75.75 0 00-.75-.75zm8.25 0a4.51 4.51 0 00-4.5 4.5c0 2.48 2.02 4.5 4.5 4.5s4.5-2.02 4.5-4.5S21.98 9 19.5 9zm0 1.5c1.67 0 3 1.33 3 3s-1.33 3-3 3-3-1.33-3-3 1.33-3 3-3Z" />
    </svg>
  );
});

export default Tryitonline;
