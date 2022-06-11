import * as React from 'react';

export type TvtimeProps = {
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

const Tvtime = React.forwardRef<SVGSVGElement, TvtimeProps>(function Tvtime(
  { color = 'currentColor', size = 24, title = 'tvtime', ...others },
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
      <path d='M0 0v24h24V0zm4.8 4.8h14.4v4.8h-4.8v9.6H9.6V9.6H4.8Z' />
    </svg>
  );
});

export default Tvtime;
