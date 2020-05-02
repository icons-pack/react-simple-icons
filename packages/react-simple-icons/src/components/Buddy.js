import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Buddy = forwardRef(function Buddy({ color = 'currentColor', size = 24, title = 'Buddy', ...others }, ref) {
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
      <path d="M21.7 5.307L12.947.253a1.892 1.892 0 0 0-1.891 0L2.3 5.306a1.892 1.892 0 0 0-.945 1.638v10.109c0 .675.36 1.3.945 1.637l8.756 5.056a1.892 1.892 0 0 0 1.89 0l8.756-5.055c.585-.338.945-.962.945-1.638V6.945c0-.675-.36-1.3-.945-1.638zm-7.45 7.752l-3.804 3.804-1.351-1.351 3.804-3.805-3.804-3.805 1.351-1.35 3.804 3.804 1.351 1.351-1.35 1.352z" />
    </svg>
  );
});

Buddy.propTypes = {
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

export default Buddy;
