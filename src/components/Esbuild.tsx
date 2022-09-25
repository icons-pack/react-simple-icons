import * as React from 'react';

export type EsbuildProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Esbuild = React.forwardRef<SVGSVGElement, EsbuildProps>(function Esbuild({color = 'currentColor', size = 24, title = "esbuild", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M12 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0zM6.718 5.282L13.436 12l-6.718 6.718-2.036-2.036L9.364 12 4.682 7.318zm7.2 0L20.636 12l-6.718 6.718-2.036-2.036L16.564 12l-4.682-4.682z" />
    </svg>
  );
});

export default Esbuild;
