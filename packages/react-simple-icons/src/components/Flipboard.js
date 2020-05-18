import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Flipboard = forwardRef(function Flipboard(
  { color = 'currentColor', size = 24, title = 'Flipboard', ...others },
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
      <path d="M0 0v24h24V0H0zm19.2 9.6h-4.8v4.8H9.6v4.8H4.8V4.8h14.4v4.8z" />
    </svg>
  );
});

Flipboard.propTypes = {
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

export default Flipboard;
