import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Mix = forwardRef(function Mix({ color = 'currentColor', size = 24, ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <path d="M4.8 6.1v15.15c0 1.35-1.05 2.35-2.4 2.35-1.35 0-2.4-1.05-2.4-2.35V0h24v13.35c0 1.3-1.1 2.35-2.4 2.35-1.35 0-2.45-1.05-2.45-2.35v-1.2c0-1.35-1.05-2.35-2.4-2.35-1.137 0-2.121.803-2.35 1.875V15.5c0 1.35-1.1 2.35-2.4 2.35-1.35 0-2.4-1.05-2.4-2.35V6.25c0-1.3-1.1-2.35-2.4-2.35a2.4 2.4 0 0 0-2.4 2.2z" />
    </svg>
  );
});

Mix.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Mix;
