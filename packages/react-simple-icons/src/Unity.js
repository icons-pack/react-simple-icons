import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Unity = forwardRef(function Unity({ color = 'currentColor', size = 24, title = 'Unity', ...others }, ref) {
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
      <path d="M19.9 19.2L15.6 12l4.3-7.2L22 12l-2.1 7.2zm-9.5-.7L5 13.2h8.6l4.3 7.2-7.5-1.9zm0-13.1l7.5-1.9-4.3 7.2H4.9c0 .1 5.5-5.3 5.5-5.3zm11-5.4l-9.8 2.5L10.1 5H7.2L0 12l7.2 7h2.9l1.4 2.5 9.8 2.5 2.6-9.5-1.4-2.5L24 9.5 21.4 0z" />
    </svg>
  );
});

Unity.propTypes = {
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

export default Unity;
