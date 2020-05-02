import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Envato = forwardRef(function Envato({ color = 'currentColor', size = 24, title = 'Envato', ...others }, ref) {
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
      <path d="M19.4.197c-.74-.371-2.721-.247-5.195.62-4.207 2.968-7.674 7.175-8.044 14.109 0 .241-.493 0-.617-.126-1.114-2.104-1.61-4.455-.62-7.921.247-.247-.37-.617-.37-.494-.249.123-1.114 1.113-1.734 2.103-2.847 4.947-.99 11.511 3.961 14.231 4.947 2.721 11.382.988 14.231-4.086 3.342-5.814.369-17.322-1.612-18.436" />
    </svg>
  );
});

Envato.propTypes = {
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

export default Envato;
