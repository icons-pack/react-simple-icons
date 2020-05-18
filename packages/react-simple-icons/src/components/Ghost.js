import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Ghost = forwardRef(function Ghost({ color = 'currentColor', size = 24, title = 'Ghost', ...others }, ref) {
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
      <path d="M9.604 19.199H.008V24h9.597v-4.801zm14.39 0h-9.591V24h9.591v-4.801zm.003-9.599H0v4.8h23.997V9.6zM24 0h-4.801v4.801H24V0zm-9.596 0H.008v4.801h14.396V0z" />
    </svg>
  );
});

Ghost.propTypes = {
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

export default Ghost;
