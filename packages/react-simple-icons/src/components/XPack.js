import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const XPack = forwardRef(function XPack({ color = 'currentColor', size = 24, title = 'X-Pack', ...others }, ref) {
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
      <path d="M13.7 19.55l5.88-5.89 3.35 3.36a3.57 3.57 0 0 1 0 5.05l-.83.83a3.57 3.57 0 0 1-5.05 0zM22.92 1.9l-.83-.83a3.57 3.57 0 0 0-5.05 0L12 6.12 6.95 1.07a3.57 3.57 0 0 0-5.05 0l-.83.83a3.57 3.57 0 0 0 0 5.05L6.12 12l-5.05 5.05a3.57 3.57 0 0 0 0 5.05l.83.83a3.57 3.57 0 0 0 5.05 0L12 17.88l3.68-3.68 2.2-2.2 5.05-5.05a3.57 3.57 0 0 0 0-5.05z" />
    </svg>
  );
});

XPack.propTypes = {
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

export default XPack;
