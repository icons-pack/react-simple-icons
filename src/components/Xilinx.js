import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Xilinx = forwardRef(function Xilinx({ color = 'currentColor', size = 24, title = 'Xilinx', ...others }, ref) {
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
      <path d="M8 18l5.241 6H5.586L.345 18l5.241-6L.345 6l5.241-6h7.655L8 6l5.241 6L8 18zM23.655 0H13.241l5.241 6 5.173-6zM13.241 24h10.414l-5.172-6-5.242 6z" />
    </svg>
  );
});

Xilinx.propTypes = {
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

export default Xilinx;
