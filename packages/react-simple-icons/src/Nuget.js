import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Nuget = forwardRef(function Nuget({ color = 'currentColor', size = 24, title = 'NuGet', ...others }, ref) {
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
      <path d="M17.67 21.633a3.995 3.995 0 1 1 0-7.99 3.995 3.995 0 0 1 0 7.99m-7.969-9.157a2.497 2.497 0 1 1 0-4.994 2.497 2.497 0 0 1 0 4.994m8.145-7.795h-6.667a6.156 6.156 0 0 0-6.154 6.155v6.667a6.154 6.154 0 0 0 6.154 6.154h6.667A6.154 6.154 0 0 0 24 17.503v-6.667a6.155 6.155 0 0 0-6.154-6.155M3.995 2.339a1.998 1.998 0 1 1-3.996 0 1.998 1.998 0 0 1 3.996 0" />
    </svg>
  );
});

Nuget.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The <title> element provides an accessible, short-text description of any SVG
   */
  title: PropTypes.string,
};

export default Nuget;
