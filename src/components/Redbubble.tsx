import * as React from 'react';

export type RedbubbleProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Redbubble = React.forwardRef<SVGSVGElement, RedbubbleProps>(function Redbubble({color = 'currentColor', size = 24, title = "redbubble", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M16.633 16.324h-3.199a.321.321 0 0 1-.32-.322V7.974a.32.32 0 0 1 .32-.32H16.4c2.226 0 2.693 1.31 2.693 2.408 0 .636-.169 1.14-.504 1.511.816.337 1.256 1.096 1.256 2.194 0 1.601-1.201 2.557-3.212 2.557m-4.644 0H5.345a.32.32 0 0 1-.32-.322V7.974a.32.32 0 0 1 .32-.32h3.103c1.939 0 3.096 1.043 3.096 2.791 0 1.163-.585 2.077-1.527 2.448l2.21 2.897a.322.322 0 0 1-.24.533M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12c6.628 0 12-5.373 12-12S18.63 0 12.001 0" />
    </svg>
  );
});

export default Redbubble;
