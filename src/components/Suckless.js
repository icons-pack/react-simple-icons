import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Suckless = forwardRef(function Suckless(
  { color = 'currentColor', size = 24, title = 'suckless', ...others },
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
      <path d="M0 4h24v4H4v2h20v10H0v-4h20v-2H0z" />
    </svg>
  );
});

Suckless.propTypes = {
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

export default Suckless;
