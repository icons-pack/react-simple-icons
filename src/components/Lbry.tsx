import * as React from 'react';

export type LbryProps = {
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

const Lbry = React.forwardRef<SVGSVGElement, LbryProps>(function Lbry(
  { color = 'currentColor', size = 24, title = 'lbry', ...others },
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
      <path d='M23.3493 14.1894l.169-1.0651-1.0315-.1775.0676-.4142 1.4456.245-.2365 1.4795zm.152-5.495v1.1921l-11.7338 7.211-8.8425-4.3367.0169-.6677 8.7918 4.3282 11.1759-6.8644v-.4904L12.3592 3.9773.5917 11.2561v3.2547l11.142 5.5119 11.6322-7.135.33.5074-11.9284 7.3038L0 14.8828v-3.9563L12.3254 3.301z' />
    </svg>
  );
});

export default Lbry;
