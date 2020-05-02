import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Delicious = forwardRef(function Delicious({ color = 'currentColor', size = 24, ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <path d="M12 12H0v12h12V12zM24 0H12v12h12V0z" />
    </svg>
  );
});

Delicious.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Delicious;
