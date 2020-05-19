import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Terraform = forwardRef(function Terraform(
  { color = 'currentColor', size = 24, title = 'Terraform', ...others },
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
      <path d="M8.283 4.265l7.433 3.776v7.551l-7.433-3.776V4.265zm8.248 3.776v7.551l7.436-3.776V4.265l-7.436 3.776zM.035.051v7.551l7.433 3.776V3.827L.035.051zm8.248 20.141l7.433 3.776V16.42l-7.433-3.776v7.548z" />
    </svg>
  );
});

Terraform.propTypes = {
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

export default Terraform;
