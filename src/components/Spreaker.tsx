import * as React from 'react';

export type SpreakerProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Spreaker = React.forwardRef<SVGSVGElement, SpreakerProps>(function Spreaker({color = 'currentColor', size = 24, title = "spreaker", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M14.615 0l-5.64 6.54L.529 4.718l8.68 7.372-8.537 7.463 8.411-1.984L14.843 24l.71-8.601 7.918-3.483-7.963-3.33L14.621 0h-.006z" />
    </svg>
  );
});

export default Spreaker;
