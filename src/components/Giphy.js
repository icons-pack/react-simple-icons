import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Giphy = forwardRef(function Giphy({ color = 'currentColor', size = 24, title = 'GIPHY', ...others }, ref) {
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
      <path d="M2.666 0v24h18.666V8.668l-2.666 2.664v10H5.332V2.668H10L12.666 0h-10zm10.666 0v8h8V5.332h-2.666V2.668H16V0h-2.668z" />
    </svg>
  );
});

Giphy.propTypes = {
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

export default Giphy;
