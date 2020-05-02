import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Googleassistant = forwardRef(function Googleassistant({ color = 'currentColor', size = 24, ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <path d="M6.545 1.03C2.93 1.03 0 3.975 0 7.61c0 3.635 2.93 6.582 6.545 6.582 3.615 0 6.545-2.947 6.545-6.582S10.16 1.03 6.545 1.03zm15.818 4.388a1.64 1.64 0 00-1.636 1.644c0 .909.733 1.647 1.636 1.647.904 0 1.637-.738 1.637-1.646a1.64 1.64 0 00-1.637-1.645zm-4.91 2.193a3.28 3.28 0 00-3.271 3.291 3.28 3.28 0 003.271 3.291 3.282 3.282 0 003.274-3.29 3.282 3.282 0 00-3.274-3.292zm0 7.68c-2.109 0-3.818 1.72-3.818 3.84s1.71 3.84 3.818 3.84c2.109 0 3.818-1.72 3.818-3.84s-1.71-3.84-3.818-3.84Z" />
    </svg>
  );
});

Googleassistant.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Googleassistant;
