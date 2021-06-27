import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Sparkar = forwardRef(function Sparkar({ color = 'currentColor', size = 24, title = 'sparkar', ...others }, ref) {
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
      <path d="M3.199 20.001L20.801 12v8.001L11.999 24l-8.8-3.999zm8.8 3.999zm-.001-24L3.199 3.999V12l17.602-8.001L11.998 0zM3.803 12.275l7.592 3.453 8.803-4.002-7.594-3.45-8.801 3.999z" />
    </svg>
  );
});

Sparkar.propTypes = {
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

export default Sparkar;
