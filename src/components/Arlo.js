import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Arlo = forwardRef(function Arlo({ color = 'currentColor', size = 24, title = 'Arlo', ...others }, ref) {
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
      <path d="M21.493 16.075c1.38 1.042 2.642 2.295 2.495 2.218-3.829-2.005-6.533-1.494-7.6-.805-4.155 2.683-7.952-1.534-9.87-4.341-.63-.918-6.518-.87-6.518-.87.47-.347 5.526-.414 6.593-1.613 2.145-2.409 4.027-2.14 5.558-1.4.21.1.567.325 1.02.633v1.712c-.983-.623-1.726-1.08-1.885-1.147-.556-.235-1.573-.886-3.084.067-1.652 1.043-.024 2.892 1.28 4.403 1.64 1.905 4.531 3.538 7.318.571.559-.593 2.888.303 2.888.303s-1.941-1.264-3.962-2.565h2.035c1.65 1.243 3.156 2.398 3.732 2.834M10.302 11.84a.797.797 0 0 1-.788.806.797.797 0 0 1-.787-.806c0-.445.352-.807.787-.807.436 0 .788.362.788.807m6.847-2.636a4.217 4.217 0 0 1 1.192 2.965h-1.08a3.099 3.099 0 0 0-.876-2.182 2.953 2.953 0 0 0-2.098-.9V7.984a4.02 4.02 0 0 1 2.862 1.22m1.688-1.567a6.807 6.807 0 0 1 1.932 4.53h-1.202a5.537 5.537 0 0 0-1.57-3.67 5.286 5.286 0 0 0-3.71-1.613v-1.23a6.486 6.486 0 0 1 4.55 1.982m-3.22 3.136c.375.382.56.885.558 1.388h-1.888v-1.956c.501.005.98.21 1.33.57Z" />
    </svg>
  );
});

Arlo.propTypes = {
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

export default Arlo;