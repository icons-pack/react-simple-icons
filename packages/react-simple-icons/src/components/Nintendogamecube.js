import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Nintendogamecube = forwardRef(function Nintendogamecube(
  { color = 'currentColor', size = 24, title = 'Nintendo GameCube', ...others },
  ref
) {
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
      <path d="M6.815 15.128l4.704 2.715V12.41L6.813 9.696v5.433zM4.79 16.296l6.73 3.883V24L1.48 18.207V6.617l3.31 1.91v7.77zM12 6.146L7.297 8.864 12 11.58l4.705-2.717L12 6.147zM12 3.813l5.66 3.275 3.31-1.91L12 0 1.973 5.79 5.28 7.697 12 3.813zm7.208 12.483v-3.948l-2.023 1.167v1.614l-4.704 2.715v.005-5.436L22.52 6.62v11.588l-10.04 5.795v-3.817l6.728-3.888z" />
    </svg>
  );
});

Nintendogamecube.propTypes = {
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

export default Nintendogamecube;
