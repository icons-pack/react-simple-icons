import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Stitcher = forwardRef(function Stitcher(
  { color = 'currentColor', size = 24, title = 'Stitcher', ...others },
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
      <path d="M17.98 6.938h-.359v10.125h.359V6.938zm-.745 1.125h-.36v7.875h.36V8.063zm-1.116 0H0v7.875h16.119V8.063zm7.881 0h-4.508v7.875H24V8.063zm-5.256 0h-.36v7.875h.36V8.063z" />
    </svg>
  );
});

Stitcher.propTypes = {
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

export default Stitcher;
