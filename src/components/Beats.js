import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Beats = forwardRef(function Beats({ color = 'currentColor', size = 24, title = 'Beats', ...others }, ref) {
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
      <path d="M2.625 0v15h8.25a7.5 7.5 0 0 0 0-15zm17.016 11.705c-1.571 3.261-4.91 5.517-8.766 5.517h-8.25V24h11.25a7.5 7.5 0 0 0 5.766-12.295z" />
    </svg>
  );
});

Beats.propTypes = {
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

export default Beats;
