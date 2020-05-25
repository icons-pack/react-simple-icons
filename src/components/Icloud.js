import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Icloud = forwardRef(function Icloud({ color = 'currentColor', size = 24, title = 'iCloud', ...others }, ref) {
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
      <path d="M20.013 10.726l.001-.028A6.346 6.346 0 0 0 8.09 7.67a3.414 3.414 0 0 0-4.989 2.829A4.72 4.72 0 0 0 0 14.929a4.72 4.72 0 0 0 4.719 4.719h14.807a4.475 4.475 0 0 0 .487-8.922z" />
    </svg>
  );
});

Icloud.propTypes = {
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

export default Icloud;
