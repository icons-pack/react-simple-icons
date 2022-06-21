import * as React from 'react';

export type GriddotaiProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Griddotai = React.forwardRef<SVGSVGElement, GriddotaiProps>(function Griddotai(
  { color = 'currentColor', size = 24, title = 'griddotai', ...others },
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
      <path d='M17.732 9.091v-3.52H6.506v12.816h5.612v-5.613h11.226V24h-5.613v-5.613H12.12V24h-4.5a6.965 6.965 0 0 1-6.964-6.964V6.966A6.966 6.966 0 0 1 7.619 0h8.762a6.965 6.965 0 0 1 6.964 6.964v2.127h-5.613z' />
    </svg>
  );
});

export default Griddotai;
