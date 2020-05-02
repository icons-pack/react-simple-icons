import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Dunked = forwardRef(function Dunked({ color = 'currentColor', size = 24, title = 'Dunked', ...others }, ref) {
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
      <path d="M13.791 0V19.766a4.18 4.18 0 004.182 4.12h4.18V4.122A4.18 4.18 0 0017.972 0H13.79zM6.326 14.93a4.479 4.479 0 00-4.478 4.37v.221a4.479 4.479 0 008.957 0v-.214a4.479 4.479 0 00-4.479-4.377Z" />
    </svg>
  );
});

Dunked.propTypes = {
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

export default Dunked;
