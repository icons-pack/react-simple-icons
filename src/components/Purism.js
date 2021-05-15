import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Purism = forwardRef(function Purism({ color = 'currentColor', size = 24, title = 'Purism', ...others }, ref) {
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
      <path d="M24 19.588H0V4.412h24zM2.824 16.765h18.352v-9.53H2.824Z" />
    </svg>
  );
});

Purism.propTypes = {
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

export default Purism;
