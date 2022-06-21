import * as React from 'react';

export type CarthrottleProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Carthrottle = React.forwardRef<SVGSVGElement, CarthrottleProps>(function Carthrottle(
  { color = 'currentColor', size = 24, title = 'carthrottle', ...others },
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
      <path d='M0 19.99h5.31l1-5.76h2.673L7.97 19.99h5.272l1.037-5.76h2.824l-1 5.76h7.584L21.9 17.029 24 4.01h-5.16l-.987 5.647h-2.86l.936-5.647H8.483l1.724 2.749-.487 2.898H6.996l.9-5.647H.35l1.76 2.774Z' />
    </svg>
  );
});

export default Carthrottle;
