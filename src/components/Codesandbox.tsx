import * as React from 'react';

export type CodesandboxProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Codesandbox = React.forwardRef<SVGSVGElement, CodesandboxProps>(function Codesandbox({color = 'currentColor', size = 24, title = "codesandbox", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M0 24H24V0H0V2.45455H21.5455V21.5455H2.45455V0H0Z" />
    </svg>
  );
});

export default Codesandbox;
