import * as React from 'react';

export type PluscodesProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Pluscodes = React.forwardRef<SVGSVGElement, PluscodesProps>(function Pluscodes({color = 'currentColor', size = 24, title = "pluscodes", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M12 0a2.4 2.4 0 00-2.4 2.4A2.4 2.4 0 0012 4.8a2.4 2.4 0 002.4-2.4A2.4 2.4 0 0012 0zM9.543 9.543v4.914h4.914V9.543zM2.4 9.6A2.4 2.4 0 000 12a2.4 2.4 0 002.4 2.4A2.4 2.4 0 004.8 12a2.4 2.4 0 00-2.4-2.4zm19.2 0a2.4 2.4 0 00-2.4 2.4 2.4 2.4 0 002.4 2.4A2.4 2.4 0 0024 12a2.4 2.4 0 00-2.4-2.4zM12 19.2a2.4 2.4 0 00-2.4 2.4A2.4 2.4 0 0012 24a2.4 2.4 0 002.4-2.4 2.4 2.4 0 00-2.4-2.4z" />
    </svg>
  );
});

export default Pluscodes;
