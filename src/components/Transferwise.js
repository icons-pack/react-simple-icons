import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Transferwise = forwardRef(function Transferwise(
  { color = 'currentColor', size = 24, title = 'TransferWise', ...others },
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
      <path d="M9.871 24h3.11L23.127 0H3.694l3.748 6.291-6.571 6.283h11.361l1.068-2.517H7.03l3.792-3.783L8.61 2.516h10.337z" />
    </svg>
  );
});

Transferwise.propTypes = {
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

export default Transferwise;
