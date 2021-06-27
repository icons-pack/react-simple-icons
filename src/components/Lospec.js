import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Lospec = forwardRef(function Lospec({ color = 'currentColor', size = 24, title = 'lospec', ...others }, ref) {
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
      <path d="M4.23 0v24h15.541v-8.4004h-7.1719v3.5996H11.402V0z" />
    </svg>
  );
});

Lospec.propTypes = {
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

export default Lospec;
