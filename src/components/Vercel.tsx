import * as React from 'react';

export type VercelProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Vercel = React.forwardRef<SVGSVGElement, VercelProps>(function Vercel({color = 'currentColor', size = 24, title = "vercel", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M24 22.525H0l12-21.05 12 21.05z" />
    </svg>
  );
});

export default Vercel;
