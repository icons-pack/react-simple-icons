import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Equinixmetal = forwardRef(function Equinixmetal(
  { color = 'currentColor', size = 24, title = 'equinixmetal', ...others },
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
      <path d="M22.399 7.789v7.005l-1.599.56V7.231L16 5.557v11.472l-1.601.557V4.996L12 4.16l-2.4.836v12.59l-1.599-.557V5.557L3.2 7.232v8.121l-1.599-.56V7.79L0 8.349v7.582l4.801 1.676v-9.24l1.6-.558v10.356L11.2 19.84V6.133l.8-.28.8.28v13.708l4.801-1.676V7.809l1.599.558v9.24L24 15.93V8.349z" />
    </svg>
  );
});

Equinixmetal.propTypes = {
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

export default Equinixmetal;
