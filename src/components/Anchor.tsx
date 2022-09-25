import * as React from 'react';

export type AnchorProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Anchor = React.forwardRef<SVGSVGElement, AnchorProps>(function Anchor({color = 'currentColor', size = 24, title = "anchor", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M23.214 8.166S22.209 7.69 21.164 8c-.782.23-1.638.824-2.125 2.055-.939 2.363-.126 6.484-.444 6.484s-1.319-3.797-2.658-7.752c-1.34-3.954-2.497-8.061-4.588-7.73-1.854.293-1.279 4.976-.553 9.362.658 3.976 1.419 7.698.984 7.698-.777.001-3.326-10.988-5.939-10.57-2.613.416.753 12.525.046 12.548-.581.019-2.006-7.37-4.121-7.031-1.602.257-.175 6.006-.109 7.61.016.402.141 1.157-.461 1.157H0v1.118h1.958c.402-.02.72-.174.881-.57.544-1.342-.884-7.042-.55-7.084.23-.028.725 1.707 1.416 3.67.69 1.963 1.383 3.995 2.696 3.995 2.83 0-.057-11.121.504-11.121.297 0 1.106 2.26 1.995 4.738 1.089 3.028 2.416 6.387 4.018 6.387 1.912 0 1.29-4.338.698-8.495-.513-3.598-1.114-6.978-.793-6.978.721 0 3.447 15.467 6.72 15.467 1.64 0 1.658-3.233 1.658-6.72 0-2.448-.204-4.68 1.331-5.217.73-.254 1.468.198 1.468.198Z" />
    </svg>
  );
});

export default Anchor;
