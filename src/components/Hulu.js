import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Hulu = forwardRef(function Hulu({ color = 'currentColor', size = 24, title = 'Hulu', ...others }, ref) {
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
      <path d="M14.394 7.367h-3.598a5.895 5.895 0 00-2.058.404V0H2.963v24h5.785v-9.486a1.606 1.606 0 011.556-1.696h3.382a1.586 1.586 0 011.586 1.556v9.566h5.765V13.536c0-4.399-2.244-6.147-5.885-6.147" />
    </svg>
  );
});

Hulu.propTypes = {
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

export default Hulu;
