import * as React from 'react';

export type AffinitydesignerProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Affinitydesigner = React.forwardRef<SVGSVGElement, AffinitydesignerProps>(function Affinitydesigner({color = 'currentColor', size = 24, title = "affinitydesigner", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M10.44 0L0 18.083v5.197a.72.72 0 00.713.72h10.023L5.7 15.277 14.52 0zm5.16 0l-4.86 8.418 3.718 6.439H24V.718A.72.72 0 0023.28 0zm-5.4 9.353l-2.064 3.575a1.289 1.289 0 000 1.288c.23.4.656.64 1.117.64h4.125zm-3.122 6.44L11.816 24h11.471a.72.72 0 00.713-.718v-7.49Z" />
    </svg>
  );
});

export default Affinitydesigner;
