import * as React from 'react';

export type FortyTwoProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const FortyTwo = React.forwardRef<SVGSVGElement, FortyTwoProps>(function FortyTwo(
  { color = 'currentColor', size = 24, title = '42', ...others },
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
      <path d='M24 12.42l-4.428 4.415H24zm-4.428-4.417l-4.414 4.418v4.414h4.414V12.42L24 8.003V3.575h-4.428zm-4.414 0l4.414-4.428h-4.414zM0 15.996h8.842v4.43h4.412V12.42H4.428l8.826-8.846H8.842L0 12.421z' />
    </svg>
  );
});

export default FortyTwo;
