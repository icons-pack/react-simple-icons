import * as React from 'react';

export type VTwoExProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const VTwoEx = React.forwardRef<SVGSVGElement, VTwoExProps>(function VTwoEx({color = 'currentColor', size = 24, title = "v2ex", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M.671 1.933h13.821a1.342 1.342 0 0 1 .98.425l8.166 8.725a1.342 1.342 0 0 1 0 1.834l-8.166 8.724a1.342 1.342 0 0 1-.98.426H.673A.671.671 0 0 1 0 21.395v-6.878h13.19l2.276-2.28a.336.336 0 0 0 0-.474l-2.276-2.28H0V2.604a.671.671 0 0 1 .671-.671Z" />
    </svg>
  );
});

export default VTwoEx;
