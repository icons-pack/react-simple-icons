import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Sonarsource = forwardRef(function Sonarsource(
  { color = 'currentColor', size = 24, title = 'SonarSource', ...others },
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
      <path d="M15.71.4l-.467.737c3.476 2.14 6.284 5.28 7.955 8.89L24 9.694c-1.671-3.81-4.68-7.086-8.29-9.292zM8.49.87l-.333 1.069c6.952 2.006 12.434 7.62 14.039 14.44l1.069-.268C21.527 8.958 15.778 2.942 8.49.87zM0 2.607v1.338c10.964 0 19.922 8.824 19.922 19.654h1.337C21.26 12.034 11.7 2.607 0 2.607z" />
    </svg>
  );
});

Sonarsource.propTypes = {
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

export default Sonarsource;
