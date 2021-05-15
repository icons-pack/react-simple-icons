import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Roblox = forwardRef(function Roblox({ color = 'currentColor', size = 24, title = 'Roblox', ...others }, ref) {
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
      <path d="m13.383 14.341-3.726-.958.959-3.726 3.726.959-.96 3.726zM4.913 0 0 19.088 19.088 24 24 4.912 4.912 0z" />
    </svg>
  );
});

Roblox.propTypes = {
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

export default Roblox;
