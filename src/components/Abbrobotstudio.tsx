import * as React from 'react';

export type AbbrobotstudioProps = {
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

const Abbrobotstudio = React.forwardRef<SVGSVGElement, AbbrobotstudioProps>(function Abbrobotstudio(
  { color = 'currentColor', size = 24, title = 'abbrobotstudio', ...others },
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
      <path d='M23.999 12.465a9.601 9.601 0 01-19.203 0h1.07a8.53 8.53 0 108.533-8.53v-1.07A9.6 9.6 0 0124 12.463zm-9.6-3.2a3.2 3.2 0 103.2 3.2 3.2 3.2 0 00-3.2-3.2zm-2 0l-.6-6.672-2.462 1.92-1.46-1.44a4.67 4.67 0 00-5.62-.37l-2.02 1.3a.54.54 0 00-.15.74.54.54 0 00.74.15l2-1.31a3.64 3.64 0 014.29.22l1.37 1.38-2.29 1.821z' />
    </svg>
  );
});

export default Abbrobotstudio;
