import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Udacity = forwardRef(function Udacity({ color = 'currentColor', size = 24, title = 'Udacity', ...others }, ref) {
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
      <path d="M23.2.4l.8.4v10.4c0 4.442-2.312 6.957-4.796 8.08h.004l-6.097 3.51a8.977 8.977 0 0 1-.142.082l-.069.04.001-.002C11.586 23.637 10.148 24 8.8 24c-4 0-8.8-3.2-8.8-9.6V4.8l1.6.8v8.8c0 6.4 4.8 8 7.2 8 1.487 0 3.895-.614 5.512-2.604C11.345 19.098 8 16.543 8 11.2V1.76L1.6 5.6 0 4.8 8 0l.8.4.8.4v10.4c0 5.552 3.612 6.89 5.614 7.147.487-1.05.786-2.349.786-3.947V4l1.6.8v9.6c0 1.482-.257 2.793-.703 3.932C18.92 18.039 22.4 16.65 22.4 11.2V1.8l-4.8 3L16 4l6.4-4z" />
    </svg>
  );
});

Udacity.propTypes = {
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

export default Udacity;
