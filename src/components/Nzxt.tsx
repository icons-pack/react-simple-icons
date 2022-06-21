import * as React from 'react';

export type NzxtProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Nzxt = React.forwardRef<SVGSVGElement, NzxtProps>(function Nzxt(
  { color = 'currentColor', size = 24, title = 'nzxt', ...others },
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
      <path d='M1.763 8.936l2.101 3.04-.002-3.04h1.773v6.128H3.99l-2.218-3.227v3.227H0V8.936zm22.237 0v1.614h-1.612v4.514h-1.883V10.55h-1.611V8.936H24zm-9.598 0l.996 1.573 1.061-1.573h1.947l-1.98 3.034 2.013 3.094h-2.063l-1.005-1.558-.99 1.558h-2.015l1.975-3.038-2.004-3.09h2.065zm-2.652 0L9.327 13.51h2.372v1.554H6.573l2.379-4.584H6.704V8.936h5.046z' />
    </svg>
  );
});

export default Nzxt;
