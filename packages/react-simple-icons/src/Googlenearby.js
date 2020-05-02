import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Googlenearby = forwardRef(function Googlenearby({ color = 'currentColor', size = 24, ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <path d="M6.546 12l5.455-5.455L17.455 12l-5.454 5.454zm16.976-1.154L13.158.48a1.635 1.635 0 00-2.314 0L.478 10.846a1.629 1.629 0 000 2.305l10.37 10.371a1.629 1.629 0 002.304 0l10.37-10.371a1.629 1.629 0 000-2.305zM12 20.726l-8.727-8.728L12 3.27l8.727 8.728Z" />
    </svg>
  );
});

Googlenearby.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Googlenearby;
