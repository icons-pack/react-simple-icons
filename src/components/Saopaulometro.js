import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Saopaulometro = forwardRef(function Saopaulometro(
  { color = 'currentColor', size = 24, title = 'saopaulometro', ...others },
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
      <path d="M13.366 6.543l5.092 5.456-5.092 5.456V6.543zM24 0v24H0V0h24zm-5.542 11.999l1.747-1.872L11.976 1.9l-8.227 8.228 1.747 1.871-1.747 1.871 8.227 8.229 8.228-8.229-1.746-1.871zm-7.87 5.455V6.543l-5.092 5.456 5.092 5.455z" />
    </svg>
  );
});

Saopaulometro.propTypes = {
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

export default Saopaulometro;
