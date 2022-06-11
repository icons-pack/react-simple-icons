import * as React from 'react';

export type XdadevelopersProps = {
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

const Xdadevelopers = React.forwardRef<SVGSVGElement, XdadevelopersProps>(function Xdadevelopers(
  { color = 'currentColor', size = 24, title = 'xdadevelopers', ...others },
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
      <path d='M13.84 3.052V0h7.843v17.583H13.84v-3.024h4.591V3.052zM5.569 14.53V3.024h4.592V0H2.318v17.583H6.98L10.16 24v-9.483z' />
    </svg>
  );
});

export default Xdadevelopers;
