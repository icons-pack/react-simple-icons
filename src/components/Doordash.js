import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Doordash = forwardRef(function Doordash(
  { color = 'currentColor', size = 24, title = 'DoorDash', ...others },
  ref
) {
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
      <path d="M23.071 8.409a6.09 6.09 0 00-5.396-3.228H.584A.589.589 0 00.17 6.184L3.894 9.93a1.752 1.752 0 001.242.516h12.049a1.554 1.554 0 11.031 3.108H8.91a.589.589 0 00-.415 1.003l3.725 3.747a1.75 1.75 0 001.242.516h3.757c4.887 0 8.584-5.225 5.852-10.413" />
    </svg>
  );
});

Doordash.propTypes = {
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

export default Doordash;
