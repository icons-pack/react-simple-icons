import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Plex = forwardRef(function Plex({ color = 'currentColor', size = 24, title = 'Plex', ...others }, ref) {
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
      <path d="M11.643 0H4.68l7.679 12L4.68 24h6.963l7.677-12-7.677-12" />
    </svg>
  );
});

Plex.propTypes = {
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

export default Plex;
