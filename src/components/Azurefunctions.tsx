import * as React from 'react';

export type AzurefunctionsProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Azurefunctions = React.forwardRef<SVGSVGElement, AzurefunctionsProps>(function Azurefunctions(
  { color = 'currentColor', size = 24, title = 'azurefunctions', ...others },
  ref,
) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      fill={color}
      viewBox='0 0 24 24'
      ref={ref}
      {...others}
    >
      <title>{title}</title>
      <path d='M10.537.904L6.602 12.04l4.798.037-3.748 11.018v.002L17.996 8.39h-5.022L17.847.903h-3.824zM6.903 4.91a.585.585 0 0 0-.412.17L.155 11.285a.682.682 0 0 0 0 .865l6.448 6.396a.625.625 0 0 0 .824 0 .638.638 0 0 0 0-.865l-5.436-5.53a.641.641 0 0 1 0-.865l5.324-5.344a.574.574 0 0 0 0-.865.586.586 0 0 0-.412-.169zm10.193 0a.585.585 0 0 0-.412.17.572.572 0 0 0 0 .864l5.435 5.343a.64.64 0 0 1 0 .866l-5.548 5.53a.64.64 0 0 0 0 .865.625.625 0 0 0 .824 0l6.45-6.396a.68.68 0 0 0 0-.865l-6.337-6.208a.585.585 0 0 0-.412-.169z' />
    </svg>
  );
});

export default Azurefunctions;
