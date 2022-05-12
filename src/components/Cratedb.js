import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Cratedb = forwardRef(function Cratedb({ color = 'currentColor', size = 24, title = 'cratedb', ...others }, ref) {
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
      <path d="M18 9V3h-6v6H0v6h6v6h6v-6h12V9h-6z" />
    </svg>
  );
});

Cratedb.propTypes = {
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

export default Cratedb;
