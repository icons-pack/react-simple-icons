import * as React from 'react';

export type MarriottProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Marriott = React.forwardRef<SVGSVGElement, MarriottProps>(function Marriott(
  { color = 'currentColor', size = 24, title = 'marriott', ...others },
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
      <path d='M8.802 11.083l-1.178 2.41c-.8 1.425-1.931 3.167-3.646 3.603-.668.232-1.255.023-1.9-.023L0 20.476a1.626 1.626 0 0 0 .59.386c3.647 1.39 5.122-.1 8.722-8.238l3.403 7.249h4.53l-2.14-4.893 1.213-2.53 3.345 7.311 4.337.027-7.59-16.677-3.475 1.738 2.738 6.222-1.201 2.445L9.45 2.678l-3.7 1.877Z' />
    </svg>
  );
});

export default Marriott;
