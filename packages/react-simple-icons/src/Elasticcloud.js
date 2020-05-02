import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Elasticcloud = forwardRef(function Elasticcloud({ color = 'currentColor', size = 24, ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <path d="M22.62 19.46a11.95 11.95 0 0 1-9.32 4.48 11.95 11.95 0 0 1-9.32-4.48A11.95 11.95 0 0 1 13.3 15c3.76 0 7.14 1.76 9.32 4.48zM10.32 12c0-1.52 1.25-2.99 2.62-2.99h.42c3.91 0 7.1-1.76 9.29-4.48A12.05 12.05 0 0 0 13.3.05a11.95 11.95 0 0 0-9.32 4.48A11.83 11.83 0 0 0 1.35 12c0 1.94.45 3.76 1.29 5.38a14.3 14.3 0 0 1 7.85-4.45c-.09-.3-.18-.63-.18-.93z" />
    </svg>
  );
});

Elasticcloud.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Elasticcloud;
