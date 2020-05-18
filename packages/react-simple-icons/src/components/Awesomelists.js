import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Awesomelists = forwardRef(function Awesomelists(
  { color = 'currentColor', size = 24, title = 'Awesome Lists', ...others },
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
      <path d="M23.996 10.648l-6.153-5.644-.865.944 5.127 4.7H1.895l5.127-4.705L6.157 5 .004 10.648H0v3.72c0 1.682 1.62 3.052 3.61 3.052h3.794c1.99 0 3.61-1.37 3.61-3.051v-2.445h1.968v2.445c0 1.681 1.62 3.051 3.61 3.051h3.794c1.99 0 3.61-1.37 3.61-3.051v-3.72z" />
    </svg>
  );
});

Awesomelists.propTypes = {
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

export default Awesomelists;
