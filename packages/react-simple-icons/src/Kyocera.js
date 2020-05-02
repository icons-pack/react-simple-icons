import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Kyocera = forwardRef(function Kyocera({ color = 'currentColor', size = 24, ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <path d="M14.323 0L9.677 4.631h7.393V12l4.647-4.631V0zm2.747 12v7.369H9.677L14.323 24h7.394v-7.369zm0 0L9.677 4.631V19.37zm-7.393 7.369L2.283 12v7.369zM2.283 12l7.394-7.369H2.283Z" />
    </svg>
  );
});

Kyocera.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Kyocera;
