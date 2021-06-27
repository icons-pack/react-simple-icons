import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bandcamp = forwardRef(function Bandcamp(
  { color = 'currentColor', size = 24, title = 'bandcamp', ...others },
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
      <path d="M0 18.75l7.437-13.5H24l-7.438 13.5H0z" />
    </svg>
  );
});

Bandcamp.propTypes = {
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

export default Bandcamp;
