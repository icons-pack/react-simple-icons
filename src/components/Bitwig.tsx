import * as React from 'react';

export type BitwigProps = {
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

const Bitwig = React.forwardRef<SVGSVGElement, BitwigProps>(function Bitwig(
  { color = 'currentColor', size = 24, title = 'bitwig', ...others },
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
      <path d='M4.15 7.782a1.59 1.59 0 1 1 3.181 0 1.59 1.59 0 0 1-3.181 0zm5.741 1.591a1.59 1.59 0 1 0 0-3.181 1.59 1.59 0 0 0 0 3.181zm4.218 0a1.59 1.59 0 1 0 0-3.181 1.59 1.59 0 0 0 0 3.181zm4.15 0a1.59 1.59 0 1 0 0-3.181 1.59 1.59 0 0 0 0 3.181zM5.741 10.409a1.59 1.59 0 1 0 0 3.181 1.59 1.59 0 0 0 0-3.181zm8.368 0a1.59 1.59 0 1 0 0 3.181 1.59 1.59 0 0 0 0-3.181zm4.15 0a1.59 1.59 0 1 0 0 3.181 1.59 1.59 0 0 0 0-3.181zm4.15 3.182a1.59 1.59 0 1 0 0-3.181 1.59 1.59 0 0 0 0 3.181zM1.591 10.409a1.591 1.591 0 1 0 0 3.182 1.591 1.591 0 0 0 0-3.182zm4.15 4.218a1.59 1.59 0 1 0 0 3.181 1.59 1.59 0 0 0 0-3.181zm12.518 0a1.59 1.59 0 1 0 0 3.181 1.59 1.59 0 0 0 0-3.181zm4.15 0a1.59 1.59 0 1 0 0 3.181 1.59 1.59 0 0 0 0-3.181zm-20.818 0a1.59 1.59 0 1 0 0 3.181 1.59 1.59 0 0 0 0-3.181m8.3-4.218a1.591 1.591 0 1 0 0 3.182 1.591 1.591 0 0 0 0-3.182Z' />
    </svg>
  );
});

export default Bitwig;
