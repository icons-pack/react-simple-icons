import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Forestry = forwardRef(function Forestry(
  { color = 'currentColor', size = 24, title = 'Forestry', ...others },
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
      <path d="M5.564.332v2.82L0 8.736l1.305 1.284 4.26-4.26v2.568L0 13.912l1.305 1.283 4.26-4.26v12.733h1.831V10.932l4.284 4.263 1.304-1.283-5.588-5.588V5.756l3.989 3.969 5.195 5.214v8.729h1.832v-8.725L24 9.355l-1.305-1.283-4.283 4.264V9.768L24 4.18l-1.305-1.284-4.283 4.264V.332H16.58v6.824l-4.26-4.26-1.304 1.284 5.564 5.584v2.568l-3.596-3.596-5.588-5.588V.332H5.564z" />
    </svg>
  );
});

Forestry.propTypes = {
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

export default Forestry;
