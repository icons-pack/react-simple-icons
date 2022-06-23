import * as React from 'react';

export type VerizonProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Verizon = React.forwardRef<SVGSVGElement, VerizonProps>(function Verizon(
  { color = 'currentColor', size = 24, title = 'verizon', ...others },
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
      <path d='M18.302 0H22v.003L10.674 24H7.662L2 12h3.727l3.449 7.337z' />
    </svg>
  );
});

export default Verizon;
