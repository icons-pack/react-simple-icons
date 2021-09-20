import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Icon = forwardRef(function({ icon, color = 'currentColor', size = 24, title = icon.title, ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      {title && <title>{title}</title>}
      <path d={icon.path} />
    </svg>
  );
});

Icon.propTypes = {
  /**
   * The icon from simple-icons
   */
  icon: PropTypes.object.isRequired({
    path: PropTypes.string.isRequired,
  }),
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

Icon.displayName = 'Icon';

export default Icon;
