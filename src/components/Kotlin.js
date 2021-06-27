import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Kotlin = forwardRef(function Kotlin({ color = 'currentColor', size = 24, title = 'kotlin', ...others }, ref) {
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
      <path d="M0 24V13.848L13.505 0H24L0 24zM0 0v12.672L12.05 0H0zm1.335 24H24L12.699 12.618 1.335 24z" />
    </svg>
  );
});

Kotlin.propTypes = {
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

export default Kotlin;
