import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Paloaltosoftware = forwardRef(function Paloaltosoftware(
  { color = 'currentColor', size = 24, title = 'paloaltosoftware', ...others },
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
      <path d="M11.995.005c-.58 0-1.158.228-1.615.685L.685 10.385c-.913.913-.913 2.318 0 3.231l.842.843 8.01-8.15a3.435 3.435 0 0 1 4.847 0l8.079 8.08.842-.843c.914-.843.915-2.248.072-3.161L13.612.69a2.279 2.279 0 0 0-1.617-.685zm0 6.463c-.58 0-1.158.228-1.615.684L.685 16.848c-.913.913-.913 2.318 0 3.23l3.231 3.232c.914.913 2.318.913 3.232 0l4.847-4.846 4.848 4.846c.913.913 2.318.913 3.231 0l3.231-3.231c.914-.843.915-2.318.072-3.231l-9.765-9.696a2.279 2.279 0 0 0-1.617-.684z" />
    </svg>
  );
});

Paloaltosoftware.propTypes = {
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

export default Paloaltosoftware;
