import * as React from 'react';

export type ZwaveProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Zwave = React.forwardRef<SVGSVGElement, ZwaveProps>(function Zwave(
  { color = 'currentColor', size = 24, title = 'zwave', ...others },
  ref,
) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      fill={color}
      viewBox='0 0 24 24'
      ref={ref}
      {...others}
    >
      <title>{title}</title>
      <path d='M17.156.014C7.69.014 0 7.704 0 17.17h2.3C2.33 8.956 8.973 2.316 17.157 2.316V.014zm0 4.574c-6.932 0-12.584 5.65-12.584 12.582h2.301c.03-5.68 4.633-10.281 10.283-10.281V4.588zm0 5.709a6.837 6.837 0 00-6.845 6.844 6.839 6.839 0 006.845 6.845A6.837 6.837 0 0024 17.141a6.835 6.835 0 00-6.844-6.844zm-2.273 3.174h5.738l-3.058 4.863h3.058l-1.398 2.156h-5.795l3.144-4.922h-3l1.31-2.097Z' />
    </svg>
  );
});

export default Zwave;
