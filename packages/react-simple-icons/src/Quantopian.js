import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Quantopian = forwardRef(function Quantopian(
  { color = 'currentColor', size = 24, title = 'Quantopian', ...others },
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
      <path d="M14.5 12c0 1.103-.897 2-2 2h-1c-1.103 0-2-.897-2-2V9.5c0-1.103.897-2 2-2h1c1.103 0 2 .897 2 2zm-2-5.5h-1c-1.654 0-3 1.346-3 3V12c0 1.654 1.346 3 3 3v.5c0 .603.4 1.5 1.5 1.5h1v-1h-1c-.403 0-.494-.275-.5-.5V15c1.654 0 3-1.346 3-3V9.5c0-1.654-1.346-3-3-3M1 21.5v-19C1 1.673 1.673 1 2.5 1h19c.827 0 1.5.673 1.5 1.5v19c0 .827-.673 1.5-1.5 1.5h-19c-.827 0-1.5-.673-1.5-1.5zm23 0v-19C24 1.121 22.878 0 21.5 0h-19A2.503 2.503 0 000 2.5v19C0 22.878 1.121 24 2.5 24h19c1.378 0 2.5-1.122 2.5-2.5Z" />
    </svg>
  );
});

Quantopian.propTypes = {
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

export default Quantopian;
