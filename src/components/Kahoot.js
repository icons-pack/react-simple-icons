import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Kahoot = forwardRef(function Kahoot({ color = 'currentColor', size = 24, title = 'Kahoot!', ...others }, ref) {
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
      <path d="M20.557 18.87l2.747-17.513L16.174 0zM.696 2.348v19.078l4.035.14-.035-6.679 2.487-2.4 2.626 9.078h3.565L10.087 9.722l4.957-5.444-3.496-1.339L4.73 9.443V1.322zm18.295 17.86l-.99 2.331L20.12 24l2.088-1.235-.887-2.556Z" />
    </svg>
  );
});

Kahoot.propTypes = {
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

export default Kahoot;
