import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Runkit = forwardRef(function Runkit({ color = 'currentColor', size = 24, title = 'RunKit', ...others }, ref) {
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
      <path d="M23.97 14.8a3 3 0 0 1-1.47 3.02l-9 5.2a3 3 0 0 1-3 0l-9-5.2A3 3 0 0 1 .03 14.8l1.32-7.2a3 3 0 0 1 .98-1.82 2.96 2.96 0 0 1 .49-.35l7.55-4.37a3.01 3.01 0 0 1 3.28.02l7.53 4.35c.1.05.19.1.28.17a3 3 0 0 1 1.19 2zM14.43 4.03L6.71 5.62c-.43.08-.51.64-.14.86l5.6 3.23c.23.13.5.07.63-.19l1.58-3.6.53-1.22c.16-.35-.11-.75-.5-.67z" />
    </svg>
  );
});

Runkit.propTypes = {
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

export default Runkit;
