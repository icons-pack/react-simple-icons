import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Nuxtdotjs = forwardRef(function Nuxtdotjs(
  { color = 'currentColor', size = 24, title = 'nuxtdotjs', ...others },
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
      <path d="M9.078 3.965c-.588 0-1.177.289-1.514.867L.236 17.433c-.672 1.156.17 2.601 1.514 2.601h5.72a1.676 1.676 0 0 1-.35-2.117l5.547-9.513-2.076-3.572a1.734 1.734 0 0 0-1.513-.867zm7.407 2.922c-.487 0-.973.236-1.252.709L9.17 17.906c-.557.945.138 2.13 1.251 2.13h12.13c1.114 0 1.81-1.185 1.253-2.13l-6.067-10.31a1.437 1.437 0 0 0-1.252-.71z" />
    </svg>
  );
});

Nuxtdotjs.propTypes = {
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

export default Nuxtdotjs;
