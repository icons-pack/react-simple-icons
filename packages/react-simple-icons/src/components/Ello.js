import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Ello = forwardRef(function Ello({ color = 'currentColor', size = 24, title = 'Ello', ...others }, ref) {
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
      <path d="M12 0C5.377 0 0 5.377 0 12s5.377 12 12 12 12-5.377 12-12S18.623 0 12 0zm6.96 13.8c-.8 3.16-3.68 5.4-6.96 5.4s-6.16-2.24-6.96-5.4c-.08-.36.12-.76.48-.84s.76.12.84.48c.68 2.56 3 4.36 5.64 4.36 2.64 0 4.96-1.8 5.64-4.36.08-.36.48-.6.84-.48.36.08.6.48.48.84z" />
    </svg>
  );
});

Ello.propTypes = {
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

export default Ello;
