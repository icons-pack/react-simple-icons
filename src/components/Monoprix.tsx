import * as React from 'react';

export type MonoprixProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Monoprix = React.forwardRef<SVGSVGElement, MonoprixProps>(function Monoprix(
  { color = 'currentColor', size = 24, title = 'monoprix', ...others },
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
      <path d='M21.072 8.042C21.072 3.612 16.981 0 12 0 6.991 0 2.928 3.612 2.928 8.042S6.99 16.085 12 16.085c.282 0 .564-.029.847-.043.62.339.747.706.761.988.142 1.608-2.44 5.08-4.303 6.49l.254.48c.113-.028 10.723-3.47 11.429-15.026.056-.283.07-.565.084-.875v-.043z' />
    </svg>
  );
});

export default Monoprix;
