import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Zulip = forwardRef(function Zulip({ color = 'currentColor', size = 24, ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <path d="M24 12a12 12 0 1 1-24 0 12 12 0 0 1 24 0zm-8.03-6H7.02l1 2.03h6.06l-7.06 7.5 1 2.46h8.96l-1-2.02H9.91l7.06-7.5-1-2.46z" />
    </svg>
  );
});

Zulip.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Zulip;
