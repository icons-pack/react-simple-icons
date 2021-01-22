import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Googlemeet = forwardRef(function Googlemeet(
  { color = 'currentColor', size = 24, title = 'Google Meet', ...others },
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
      <path d="M12 0C6.28 0 1.636 4.641 1.636 10.364c0 5.421 4.945 9.817 10.364 9.817V24c6.295-3.194 10.364-8.333 10.364-13.636C22.364 4.64 17.72 0 12 0zM7.5 6.272h6.817a1.363 1.363 0 0 1 1.365 1.365v1.704l2.728-2.727v7.501l-2.726-2.726v1.703a1.362 1.362 0 0 1-1.365 1.365H7.5c-.35 0-.698-.133-.965-.4a1.358 1.358 0 0 1-.4-.965V7.637A1.362 1.362 0 0 1 7.5 6.272Z" />
    </svg>
  );
});

Googlemeet.propTypes = {
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

export default Googlemeet;
