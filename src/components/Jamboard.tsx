import * as React from 'react';

export type JamboardProps = {
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

const Jamboard = React.forwardRef<SVGSVGElement, JamboardProps>(function Jamboard(
  { color = 'currentColor', size = 24, title = 'jamboard', ...others },
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
      <path d='M12.143 0v7.877h7.783V0zm0 8.155v7.784h7.783V8.155zm-.28.005a7.926 7.923 0 0 0-7.789 7.917A7.926 7.923 0 0 0 12 24a7.926 7.923 0 0 0 7.918-7.78h-8.056Z' />
    </svg>
  );
});

export default Jamboard;
