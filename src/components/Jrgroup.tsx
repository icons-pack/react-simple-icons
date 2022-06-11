import * as React from 'react';

export type JrgroupProps = {
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

const Jrgroup = React.forwardRef<SVGSVGElement, JrgroupProps>(function Jrgroup(
  { color = 'currentColor', size = 24, title = 'jrgroup', ...others },
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
      <path d='M19.955 13.653h1.089c2.684 0 2.684-4.123 2.684-4.123s0-4.162-2.684-4.162H9.18v8.869c0 1.556-3.112 1.478-3.112 1.478s-3.073.116-3.073-1.478v-3.423H0v4.395c0 3.19 5.68 3.384 6.107 3.423.428 0 6.107-.194 6.107-3.423V8.363h7.896c.661 0 .661 1.167.661 1.167s0 1.167-.66 1.167h-6.069l5.952 7.702H24Z' />
    </svg>
  );
});

export default Jrgroup;
