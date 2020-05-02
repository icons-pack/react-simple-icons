import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Boost = forwardRef(function Boost({ color = 'currentColor', size = 24, title = 'Boost', ...others }, ref) {
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
      <path d="M15.818 18.157c.058-.045.112-.099.163-.15a2.28 2.28 0 0 0 0-3.169l-7.802-8c-.054.05-.109.099-.16.152a2.278 2.278 0 0 0 0 3.17l7.799 7.997zm5.727-11.399a2.957 2.957 0 0 1 1.573.873c1.176 1.24 1.176 3.25 0 4.49l-5.557 5.847a2.145 2.145 0 0 1-1.298.637L19.567 22l-17.11-3.758a2.998 2.998 0 0 1-1.572-.878c-1.18-1.237-1.18-3.248 0-4.494l5.552-5.838a2.129 2.129 0 0 1 1.303-.643L4.434 3l17.11 3.758z" />
    </svg>
  );
});

Boost.propTypes = {
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

export default Boost;
