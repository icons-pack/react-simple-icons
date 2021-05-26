import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Betfair = forwardRef(function Betfair({ color = 'currentColor', size = 24, title = 'Betfair', ...others }, ref) {
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
      <path d="M20.218 3.14h-7.083v3.6H9.352l7.359 8.582L24 6.67h-3.782zM0 17.26h3.782v3.6h7.083v-3.6h3.783l-7.29-8.583z" />
    </svg>
  );
});

Betfair.propTypes = {
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

export default Betfair;
