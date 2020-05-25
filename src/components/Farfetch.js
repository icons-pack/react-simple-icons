import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Farfetch = forwardRef(function Farfetch(
  { color = 'currentColor', size = 24, title = 'Farfetch', ...others },
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
      <path d="M9.635 0L4.883 4.811V24h4.752v-9.593h7.119V9.6H9.635V4.811h9.482V0Z" />
    </svg>
  );
});

Farfetch.propTypes = {
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

export default Farfetch;
