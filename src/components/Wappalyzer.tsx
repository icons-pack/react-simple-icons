import * as React from 'react';

export type WappalyzerProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Wappalyzer = React.forwardRef<SVGSVGElement, WappalyzerProps>(function Wappalyzer({color = 'currentColor', size = 24, title = "wappalyzer", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M24 11.014v-.604L12 1.805 0 10.41v.603l12 8.606 12-8.605zM8.634 10.82l2.75 1.07.016-.01-1.526-1.967.984-.72 2.695 1.116.016-.011-1.463-2.018 1.247-.913 2.6 3.85-1.046.766-2.797-1.157-.012.008 1.593 2.038-1.048.767-5.26-1.903 1.251-.916zm14.418 1.488l.947.679v.603l-12 8.605L0 13.59v-.603l.947-.678 10.761 7.717.292.21.291-.21 10.762-7.717z" />
    </svg>
  );
});

export default Wappalyzer;
