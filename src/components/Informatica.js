import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Informatica = forwardRef(function Informatica(
  { color = 'currentColor', size = 24, title = 'Informatica', ...others },
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
      <path d="M12 0l3.547 10.788-4.5-1.255-.25 4.43 7.121 4.035V18h.001l5.919-6zm-.64.65L.162 12l6.32 6.407L12 24l5.184-5.255-9.736-3.856z" />
    </svg>
  );
});

Informatica.propTypes = {
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

export default Informatica;
