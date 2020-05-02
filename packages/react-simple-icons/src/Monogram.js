import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Monogram = forwardRef(function Monogram({ color = 'currentColor', size = 24, ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <path d="M23.158 0v23.503c0 .451-.533.668-.83.338L12 12.38 3.301 2.73.842 0h22.316zM11.029 13.46L1.672 23.841c-.297.33-.83.111-.83-.338V0l10.187 13.46z" />
    </svg>
  );
});

Monogram.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Monogram;
