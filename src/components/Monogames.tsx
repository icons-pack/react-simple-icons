import * as React from 'react';

export type MonogamesProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Monogames = React.forwardRef<SVGSVGElement, MonogamesProps>(function Monogames({color = 'currentColor', size = 24, title = "monogames", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M24 10.356V7.083a7.083 7.083 0 0 0-12-5.098A7.083 7.083 0 0 0 0 7.083v9.834A7.083 7.083 0 0 0 7.083 24h9.834a7.083 7.083 0 0 0 7.07-7.51H24v-4.332H9.834v4.332h9.834v.427a2.751 2.751 0 0 1-2.751 2.751H7.083a2.751 2.751 0 0 1-2.751-2.751V7.083a2.751 2.751 0 1 1 5.502 0v3.273h4.332V7.083a2.751 2.751 0 1 1 5.502 0v3.273z" />
    </svg>
  );
});

export default Monogames;
