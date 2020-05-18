import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Craftcms = forwardRef(function Craftcms(
  { color = 'currentColor', size = 24, title = 'Craft CMS', ...others },
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
      <path d="M21.5 0h-19C1.1 0 0 1.1 0 2.5v18.9C0 22.9 1.1 24 2.5 24h19c1.4 0 2.5-1.1 2.5-2.5v-19C24 1.1 22.9 0 21.5 0zM12 14.6c.8 0 1.6-.3 2.4-1l1.1 1.3c-1.2 1-2.5 1.5-3.9 1.5-2.7 0-4.3-1.8-4-4.3.4-2.5 2.7-4.3 5.4-4.3 1.3 0 2.5.5 3.3 1.4l-1.6 1.3c-.5-.6-1.2-1-2-1-1.6 0-2.8 1-3.1 2.5-.2 1.6.7 2.6 2.4 2.6z" />
    </svg>
  );
});

Craftcms.propTypes = {
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

export default Craftcms;
