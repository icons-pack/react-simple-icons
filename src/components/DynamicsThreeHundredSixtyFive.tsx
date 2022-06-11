import * as React from 'react';

export type DynamicsThreeHundredSixtyFiveProps = {
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

const DynamicsThreeHundredSixtyFive = React.forwardRef<SVGSVGElement, DynamicsThreeHundredSixtyFiveProps>(
  function DynamicsThreeHundredSixtyFive({ color = 'currentColor', size = 24, title = 'dynamics365', ...others }, ref) {
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
        <path d='M4.59 7.41l4.94 3.54L4.59 24zm0-7.41v6.36l9.53 5.29 4.59-3.52zm0 24l14.82-8.47v-6.7Z' />
      </svg>
    );
  },
);

export default DynamicsThreeHundredSixtyFive;
