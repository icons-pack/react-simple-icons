import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Cevo = forwardRef(function Cevo({ color = 'currentColor', size = 24, ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <path d="M3.5 6h12l6 10.3L24 12 18 1.6H6L3.5 6zm-.9 1.5L0 12l6 10.4h12l2.6-4.5-2.5-4.3-2.6 4.5h-7L5 12l2.6-4.5h-5z" />
    </svg>
  );
});

Cevo.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Cevo;
