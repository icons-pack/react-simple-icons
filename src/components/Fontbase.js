import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Fontbase = forwardRef(function Fontbase(
  { color = 'currentColor', size = 24, title = 'FontBase', ...others },
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
      <path d="M23.079 13.996c-2.702-2.771-5.702-5.703-8.105-8.103-1.62-1.621-4.284-1.621-5.943 0-2.97 2.963-5.248 5.21-8.104 8.066a3.12 3.12 0 0 0 0 4.437 3.12 3.12 0 0 0 4.437 0l2.2-2.2 2.2 2.2a3.12 3.12 0 0 0 4.438 0 3.12 3.12 0 0 0 0-4.438l4.4 4.4a3.12 3.12 0 0 0 4.438 0c1.274-1.16 1.274-3.165.039-4.362z" />
    </svg>
  );
});

Fontbase.propTypes = {
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

export default Fontbase;
