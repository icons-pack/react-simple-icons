import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Kongregate = forwardRef(function Kongregate(
  { color = 'currentColor', size = 24, title = 'kongregate', ...others },
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
      <path d="M13.358 22.95v-3.736h1.551l.106-.141-3.877-5.851-3.172 3.264-.026 2.351.166.095 2.22 1.342.071 2.676H.141l.053-3.021 2.027-.715.106-.141V5.187l-.07-.141L0 4.165V.922h10.362v3.736h-2.22l-.106.141v7.014l7.472-6.802V4.87l-1.163-.352-1.163-.352V.922h10.75v3.736h-1.41l-.352.106-7.219 6.165 6.493 8.46.246.246 2.31.787v2.656l-10.642-.128z" />
    </svg>
  );
});

Kongregate.propTypes = {
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

export default Kongregate;
