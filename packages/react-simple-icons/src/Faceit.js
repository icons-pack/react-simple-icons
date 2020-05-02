import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Faceit = forwardRef(function Faceit({ color = 'currentColor', size = 24, ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <path d="M24 2.7c0-.1-.1-.2-.1-.2-.1 0-.1 0-.2.1-2 3.1-4.1 6.2-6.1 9.4H.2c-.2 0-.3.3-.1.4 7.2 2.7 17.7 6.8 23.5 9.1.2.1.4-.1.4-.2V2.7z" />
    </svg>
  );
});

Faceit.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Faceit;
