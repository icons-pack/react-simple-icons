import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Dynamics365 = forwardRef(function Dynamics365({ color = 'currentColor', size = 24, ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <path d="M4.59 7.41l4.94 3.54L4.59 24zm0-7.41v6.36l9.53 5.29 4.59-3.52zm0 24l14.82-8.47v-6.7Z" />
    </svg>
  );
});

Dynamics365.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Dynamics365;
