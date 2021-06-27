import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const DynamicsThreeHundredSixtyFive = forwardRef(function DynamicsThreeHundredSixtyFive(
  { color = 'currentColor', size = 24, title = 'dynamics365', ...others },
  ref
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <title>{title}</title>
      <path d="M4.59 7.41l4.94 3.54L4.59 24zm0-7.41v6.36l9.53 5.29 4.59-3.52zm0 24l14.82-8.47v-6.7Z" />
    </svg>
  );
});

DynamicsThreeHundredSixtyFive.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The title provides an accessible short text description to the SVG
   */
  title: PropTypes.string,
};

export default DynamicsThreeHundredSixtyFive;
