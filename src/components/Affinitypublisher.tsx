import * as React from 'react';

export type AffinitypublisherProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Affinitypublisher = React.forwardRef<SVGSVGElement, AffinitypublisherProps>(function Affinitypublisher(
  { color = 'currentColor', size = 24, title = 'affinitypublisher', ...others },
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
      <path d='M10.44 0L9.36 1.87 22.136 24h1.144a.72.72 0 00.72-.72v-3.119L12.36 0zm3 0L24 18.29V.72a.72.72 0 00-.72-.72zM8.82 2.806l-1.98 3.43L16.976 24h4.08zM6.24 7.274L4.76 9.837a1.941 1.941 0 000 1.942C6.531 14.842 11.816 24 11.816 24h4.08zm-2.58 4.47L0 18.082v5.197c0 .397.323.72.72.72h10.016Z' />
    </svg>
  );
});

export default Affinitypublisher;
