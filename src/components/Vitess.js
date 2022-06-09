import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Vitess = forwardRef(function Vitess({ color = 'currentColor', size = 24, title = 'vitess', ...others }, ref) {
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
      <path d="m19.206 1.045-7.217 13.186L4.817 1.045H0l11.904 21.91L24 1.045h-4.794Z" />
    </svg>
  );
});

Vitess.propTypes = {
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

export default Vitess;
