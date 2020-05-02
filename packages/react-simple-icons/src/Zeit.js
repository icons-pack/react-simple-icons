import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Zeit = forwardRef(function Zeit({ color = 'currentColor', size = 24, title = 'Zeit', ...others }, ref) {
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
      <path d="M24 22.525H0l12-21.05 12 21.05z" />
    </svg>
  );
});

Zeit.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The <title> element provides an accessible, short-text description of any SVG
   */
  title: PropTypes.string,
};

export default Zeit;
