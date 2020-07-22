import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Drooble = forwardRef(function Drooble({ color = 'currentColor', size = 24, title = 'Drooble', ...others }, ref) {
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
      <path d="M24 11.986a7.599 7.599 0 0 0-7-7.559v7.574a5 5 0 0 1-10 0c0-3.604 3.707-6.022 7-4.583V.17C6.615-1.069 0 4.63 0 12c0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12v-.014m-14 .015a2 2 0 1 0 4 0 2 2 0 0 0-4 0m14-.015a7.599 7.599 0 0 0-7-7.559v7.574a5 5 0 0 1-10 0c0-3.604 3.707-6.022 7-4.583V.17C6.615-1.069 0 4.63 0 12c0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12v-.014m-14 .015a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z" />
    </svg>
  );
});

Drooble.propTypes = {
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

export default Drooble;
