import * as React from 'react';

export type GoogleoptimizeProps = {
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

const Googleoptimize = React.forwardRef<SVGSVGElement, GoogleoptimizeProps>(function Googleoptimize(
  { color = 'currentColor', size = 24, title = 'googleoptimize', ...others },
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
      <path d='M23.661 11.997a3.242 3.242 0 1 1-6.479 0V6.55H11.51a3.293 3.293 0 0 1 0-6.55h8.854a3.291 3.291 0 0 1 3.291 3.259l.006 8.738zm-16.775-.011a3.275 3.275 0 1 0-6.55 0 3.275 3.275 0 0 0 6.55 0zm5.42-3.28H5.442c1.153.647 1.944 1.867 1.944 3.28a3.766 3.766 0 0 1-1.802 3.204h3.672v5.453A3.181 3.181 0 0 0 12.372 24a3.323 3.323 0 0 0 3.291-3.357v-8.695a3.318 3.318 0 0 0-3.357-3.242z' />
    </svg>
  );
});

export default Googleoptimize;
