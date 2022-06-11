import * as React from 'react';

export type OktaProps = {
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

const Okta = React.forwardRef<SVGSVGElement, OktaProps>(function Okta(
  { color = 'currentColor', size = 24, title = 'okta', ...others },
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
      <path d='M12 0C5.389 0 0 5.35 0 12s5.35 12 12 12 12-5.35 12-12S18.611 0 12 0zm0 18c-3.325 0-6-2.675-6-6s2.675-6 6-6 6 2.675 6 6-2.675 6-6 6z' />
    </svg>
  );
});

export default Okta;
