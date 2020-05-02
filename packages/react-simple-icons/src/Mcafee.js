import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Mcafee = forwardRef(function Mcafee({ color = 'currentColor', size = 24, title = 'McAfee', ...others }, ref) {
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
      <path d="M12 4.843L1.608.033v19.124L12 23.967l10.392-4.81V.033zm6.155 11.594l-6.126 2.835-6.127-2.835V6.704l6.127 2.834 6.126-2.834z" />
    </svg>
  );
});

Mcafee.propTypes = {
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

export default Mcafee;
