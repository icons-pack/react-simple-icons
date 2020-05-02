import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Azuredevops = forwardRef(function Azuredevops({ color = 'currentColor', size = 24, ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <path d="M0 8.899l2.247-2.966 8.405-3.416V.045l7.37 5.393L2.966 8.36v8.224L0 15.73zm24-4.45v14.652L18.247 24l-9.303-3.056V24l-5.978-7.416 15.057 1.798V5.438z" />
    </svg>
  );
});

Azuredevops.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Azuredevops;
