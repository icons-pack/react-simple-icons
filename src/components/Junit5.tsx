import * as React from 'react';

export type Junit5Props = React.ComponentPropsWithoutRef<'svg'> & {
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

const Junit5 = React.forwardRef<SVGSVGElement, Junit5Props>(function Junit5(
  { color = 'currentColor', size = 24, title = 'junit5', ...others },
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
      <path d='M11.886 9.769c1.647 0 2.95.436 3.912 1.307.961.872 1.442 2.06 1.442 3.566 0 1.744-.548 3.107-1.643 4.09-1.088.977-2.638 1.465-4.65 1.465-1.826 0-3.26-.294-4.303-.883v-2.38a7.89 7.89 0 002.079.793c.782.186 1.509.28 2.18.28 1.184 0 2.086-.265 2.704-.794.619-.53.928-1.304.928-2.325 0-1.952-1.245-2.929-3.733-2.929-.35 0-.783.038-1.297.112-.514.067-.965.145-1.352.235l-1.174-.693.626-7.98H16.1v2.335H9.919l-.37 4.046c.262-.044.578-.096.95-.156.38-.06.843-.09 1.387-.09zM12 0C5.373 0 0 5.373 0 12a11.998 11.998 0 006.65 10.738v-3.675h.138c.01.004 4.86 2.466 8.021 0 3.163-2.468 1.62-5.785 1.08-6.557-.54-.771-3.317-2.083-5.708-1.851-2.391.231-2.391.308-2.391.308l.617-7.096 7.687-.074V.744A12 12 0 0011.999 0zm4.095.744V3.793l-7.688.074-.617 7.096s0-.077 2.391-.308c2.392-.232 5.169 1.08 5.708 1.851.54.772 2.083 4.089-1.08 6.557-3.16 2.467-8.013.004-8.02 0h-.14v3.675A12 12 0 0012 24c6.628 0 12-5.373 12-12A12.007 12.007 0 0016.35.83c-.085-.03-.17-.059-.255-.086zM6.299 22.556z' />
    </svg>
  );
});

export default Junit5;
