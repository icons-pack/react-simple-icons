import * as React from 'react';

export type DevexpressProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Devexpress = React.forwardRef<SVGSVGElement, DevexpressProps>(function Devexpress({color = 'currentColor', size = 24, title = "devexpress", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M1.4 0h21.2c.8 0 1.4.6 1.4 1.4v1.1c0 .8-.6 1-.9 1C11.7 4.9 4.2 9.7 0 14.1V1.4C0 .6.6 0 1.4 0zm.022 19.567L1.7 19.2C5.3 14.6 12.4 8.3 24 6.3v16.3c0 .8-.6 1.4-1.4 1.4H1.4C.6 24 0 23.4 0 22.6v-.4c0-.3.2-.8.3-.9.252-.589.646-1.107 1.122-1.733z" />
    </svg>
  );
});

export default Devexpress;
