import * as React from 'react';

export type HurriyetemlakProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Hurriyetemlak = React.forwardRef<SVGSVGElement, HurriyetemlakProps>(function Hurriyetemlak(
  { color = 'currentColor', size = 24, title = 'hurriyetemlak', ...others },
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
      <path d='M24 16.085L11.994 4.091 0 16.097l3.817 3.812 8.182-8.189 8.189 8.182z' />
    </svg>
  );
});

export default Hurriyetemlak;
