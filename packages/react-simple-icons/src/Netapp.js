import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Netapp = forwardRef(function Netapp({ color = 'currentColor', size = 24, ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <path d="M0 2v20h9.33V10h5.34v12H24V2Z" />
    </svg>
  );
});

Netapp.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Netapp;
