import * as React from 'react';

export type AdonisjsProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Adonisjs = React.forwardRef<SVGSVGElement, AdonisjsProps>(function Adonisjs(
  { color = 'currentColor', size = 24, title = 'adonisjs', ...others },
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
      <path d='M13.333 1.333l-.596 1.193-2.404 4.807L8 2.667l-8 16h4.667l-2 4H24zm0 2.982l8.51 17.018H4.823l1.334-2.666H16l-4.922-9.843Z' />
    </svg>
  );
});

export default Adonisjs;
