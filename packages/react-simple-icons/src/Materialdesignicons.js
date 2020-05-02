import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Materialdesignicons = forwardRef(function Materialdesignicons(
  { color = 'currentColor', size = 24, title = 'Material Design Icons', ...others },
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
      <path d="M0 0h7.2v2.4h9.6V0H24v7.2h-2.4v9.6H24V24h-7.2v-2.4H7.2V24H0v-7.2h2.4V7.2H0V0m16.8 7.2V4.8H7.2v2.4H4.8v9.6h2.4v2.4h9.6v-2.4h2.4V7.2h-2.4M2.4 2.4v2.4h2.4V2.4H2.4m16.8 0v2.4h2.4V2.4h-2.4M2.4 19.2v2.4h2.4v-2.4H2.4m16.8 0v2.4h2.4v-2.4z" />
    </svg>
  );
});

Materialdesignicons.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The <title> element provides an accessible, short-text description of any SVG
   */
  title: PropTypes.string,
};

export default Materialdesignicons;
