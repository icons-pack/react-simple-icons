import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Verizon = forwardRef(function Verizon({ color = 'currentColor', size = 24, title = 'Verizon', ...others }, ref) {
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
      <path d="M18.302 0H22v.003L10.674 24H7.662L2 12h3.727l3.449 7.337z" />
    </svg>
  );
});

Verizon.propTypes = {
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

export default Verizon;
