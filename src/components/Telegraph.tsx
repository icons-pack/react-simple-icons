import * as React from 'react';

export type TelegraphProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Telegraph = React.forwardRef<SVGSVGElement, TelegraphProps>(function Telegraph(
  { color = 'currentColor', size = 24, title = 'telegraph', ...others },
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
      <path d='M0 0v24h24V0H0zm6 6h12v3h-4.5v9h-3V9H6V6Z' />
    </svg>
  );
});

export default Telegraph;
