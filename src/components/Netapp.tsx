import * as React from 'react';

export type NetappProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Netapp = React.forwardRef<SVGSVGElement, NetappProps>(function Netapp(
  { color = 'currentColor', size = 24, title = 'netapp', ...others },
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
      <path d='M0 2v20h9.33V10h5.34v12H24V2Z' />
    </svg>
  );
});

export default Netapp;
