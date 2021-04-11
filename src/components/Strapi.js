import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Strapi = forwardRef(function Strapi({ color = 'currentColor', size = 24, title = 'Strapi', ...others }, ref) {
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
      <path d="M7.684 0v8.035h7.775c.28 0 .502.236.502.483v7.802h8.025V.502A.502.502 0 0023.484 0zm-.5.5L.086 7.607a.251.251 0 00.178.428h6.92zm.5 8.035v7.283c0 .278.224.502.502.502h7.275V9.018c0-.278-.224-.482-.502-.483zm8.277 8.285v6.928c0 .224.271.336.43.178l7.095-7.106z" />
    </svg>
  );
});

Strapi.propTypes = {
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

export default Strapi;
