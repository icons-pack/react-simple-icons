import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Habr = forwardRef(function Habr({ color = 'currentColor', size = 24, title = 'Habr', ...others }, ref) {
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
      <path d="M0 0v24h24V0zm7.025 4h1.633c1.219 0 1.64.029 1.668.113.019.066.028 1.369.028 2.897l-.008 2.783.476-.422c.657-.581 1.212-.787 2.262-.824.694-.019.973.009 1.46.178 1.06.356 1.81 1.087 2.204 2.166.15.421.17.863.197 4.285l.03 3.824h-3.338v-3.121c0-3.075-.01-3.113-.217-3.488-.29-.497-.609-.722-1.106-.778-.853-.093-1.443.197-1.78.89-.16.32-.179.656-.188 3.356-.01 1.65-.03 3.03-.03 3.067-.008.047-.75.074-1.65.074h-1.64v-7.5z" />
    </svg>
  );
});

Habr.propTypes = {
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

export default Habr;
