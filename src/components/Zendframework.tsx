import * as React from 'react';

export type ZendframeworkProps = {
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

const Zendframework = React.forwardRef<SVGSVGElement, ZendframeworkProps>(function Zendframework(
  { color = 'currentColor', size = 24, title = 'zendframework', ...others },
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
      <path d='M.932 6.242v2.535h5.652L0 17.757h10.219v-2.534h-5.18l6.553-8.98H.932zm13.537.162c-3.178 0-3.178 3.178-3.178 3.178h9.531C24 9.582 24 6.404 24 6.404h-9.531zm-.006 4.067c-3.173 0-3.172 3.172-3.172 3.172l4.762.005c3.178 0 3.177-3.177 3.177-3.177h-4.767zm0 4.049c-3.173 0-3.172 3.183-3.172 3.183l1.584-.006c3.178 0 3.178-3.177 3.178-3.177h-1.59Z' />
    </svg>
  );
});

export default Zendframework;
