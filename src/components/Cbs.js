import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Cbs = forwardRef(function Cbs({ color = 'currentColor', size = 24, title = 'CBS', ...others }, ref) {
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
      <path d="M12 24C5.314 24 .068 18.587.068 11.949.068 5.413 5.314 0 12 0s11.932 5.413 11.932 11.949C23.932 18.587 18.686 24 12 24zm0-5.106c5.452 0 9.36-3.473 11.109-6.945C21.875 9.294 18.172 5.106 12 5.106c-5.452 0-9.36 3.37-11.109 6.843C2.537 15.42 6.548 18.894 12 18.894zm0-.613c-3.497 0-6.377-2.86-6.377-6.332S8.503 5.617 12 5.617s6.377 2.86 6.377 6.332c0 3.574-2.88 6.332-6.377 6.332Z" />
    </svg>
  );
});

Cbs.propTypes = {
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

export default Cbs;
