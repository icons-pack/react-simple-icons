import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Telegraph = forwardRef(function Telegraph(
  { color = 'currentColor', size = 24, title = 'Telegraph', ...others },
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
      <path d="M0 0v24h24V0H0zm6 6h12v3h-4.5v9h-3V9H6V6Z" />
    </svg>
  );
});

Telegraph.propTypes = {
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

export default Telegraph;
