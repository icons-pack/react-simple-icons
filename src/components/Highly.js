import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Highly = forwardRef(function Highly({ color = 'currentColor', size = 24, title = 'Highly', ...others }, ref) {
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
      <path d="M10.2 20.4H13.799999999999999V24H10.2zM9 0H15V18H9z" />
    </svg>
  );
});

Highly.propTypes = {
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

export default Highly;
