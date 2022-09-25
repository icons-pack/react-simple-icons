import * as React from 'react';

export type FlatpakProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Flatpak = React.forwardRef<SVGSVGElement, FlatpakProps>(function Flatpak({color = 'currentColor', size = 24, title = "flatpak", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M12 0c-.556 0-1.111.144-1.61.432l-7.603 4.39a3.217 3.217 0 0 0-1.61 2.788v8.78c0 1.151.612 2.212 1.61 2.788l7.603 4.39a3.217 3.217 0 0 0 3.22 0l7.603-4.39a3.217 3.217 0 0 0 1.61-2.788V7.61a3.217 3.217 0 0 0-1.61-2.788L13.61.432A3.218 3.218 0 0 0 12 0Zm0 2.358c.15 0 .299.039.431.115l7.604 4.39c.132.077.24.187.315.316L12 12v9.642a.863.863 0 0 1-.431-.116l-7.604-4.39a.866.866 0 0 1-.431-.746V7.61c0-.153.041-.302.116-.43L12 12Z" />
    </svg>
  );
});

export default Flatpak;
