import * as React from 'react';

export type GooglemarketingplatformProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Googlemarketingplatform = React.forwardRef<SVGSVGElement, GooglemarketingplatformProps>(function Googlemarketingplatform({color = 'currentColor', size = 24, title = "googlemarketingplatform", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M12 0C8.926 0 5.852 1.17 3.511 3.511c-4.37 4.371-4.66 11.299-.869 16.01a3.138 3.138 0 0 1 .719-3.314 3.138 3.138 0 0 1 3.672-.56 6.163 6.163 0 0 1 9.324-8.004 2.921 2.921 0 1 0 4.132-4.132A11.968 11.968 0 0 0 12 0zm9.36 4.481a3.138 3.138 0 0 1-.72 3.313 3.138 3.138 0 0 1-3.672.56 6.165 6.165 0 0 1-.61 8.003 2.921 2.921 0 1 0 4.131 4.132c4.37-4.37 4.66-11.298.87-16.008zM5.576 15.501a2.92 2.92 0 0 0-2.922 2.922 2.92 2.92 0 0 0 2.922 2.922 2.92 2.92 0 0 0 2.922-2.922A2.92 2.92 0 0 0 5.577 15.5zm10.07 1.467a6.168 6.168 0 0 1-7.293 0 3.14 3.14 0 0 1-.56 3.672 3.136 3.136 0 0 1-3.314.718c4.376 3.523 10.665 3.523 15.04 0a3.136 3.136 0 0 1-3.313-.718 3.138 3.138 0 0 1-.56-3.672z" />
    </svg>
  );
});

export default Googlemarketingplatform;
