import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Quantcast = forwardRef(function Quantcast({ color = 'currentColor', size = 24, ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <path d="M15.11 20.474A10.024 10.024 0 0 0 19.737 12c0-5.523-4.419-10-9.869-10S0 6.477 0 12s4.418 10 9.868 10H24v-1.526h-8.89z" />
    </svg>
  );
});

Quantcast.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Quantcast;
