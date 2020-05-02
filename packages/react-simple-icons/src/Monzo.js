import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Monzo = forwardRef(function Monzo({ color = 'currentColor', size = 24, ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <path d="M11.99 17.26H12l5.93-5.92v11.04a.45.45-180 0 0 .76.31l4.98-4.97a1.11 1.11-180 0 0 .32-.8V5.29l.01-.01-3.98-3.97a.44.44-180 0 0-.63 0L12 8.69l-7.41-7.4a.44.44-180 0 0-.63 0L0 5.28h.01H0v11.66a1.11 1.11-180 0 0 .32.79l4.97 4.98a.45.45-180 0 0 .76-.32l.01-11.06 5.93 5.94z" />
    </svg>
  );
});

Monzo.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Monzo;
