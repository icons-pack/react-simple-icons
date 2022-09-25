import * as React from 'react';

export type BuddyProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Buddy = React.forwardRef<SVGSVGElement, BuddyProps>(function Buddy({color = 'currentColor', size = 24, title = "buddy", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M21.7 5.307L12.945.253a1.892 1.892 0 00-1.891 0L2.299 5.306a1.892 1.892 0 00-.945 1.638v10.11c0 .675.36 1.3.945 1.637l8.756 5.056a1.892 1.892 0 001.89 0l8.756-5.055c.585-.338.945-.962.945-1.638V6.945c0-.675-.36-1.3-.945-1.638zm-7.45 7.753l-3.805 3.804-1.351-1.351 3.804-3.805-3.804-3.806 1.35-1.35 3.805 3.805 1.351 1.35-1.35 1.353z" />
    </svg>
  );
});

export default Buddy;
