import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Azurepipelines = forwardRef(function Azurepipelines(
  { color = 'currentColor', size = 24, title = 'Azure Pipelines', ...others },
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
      <path d="M1.8 18H0v6h6v-1.8H1.8zM23 0h-8.93a2 2 0 0 0-1.67.89L9 5.99H1a1 1 0 0 0-1 1v5.5l3.5 3.61 1.2-1.29 1.5 1.5L5 17.53l1.48 1.48 1.22-1.22 1.5 1.51L8 20.5l3.5 3.5H17a1 1 0 0 0 1-1v-8l5.11-3.4A2 2 0 0 0 24 9.92V1a1 1 0 0 0-1-1zm-5 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
    </svg>
  );
});

Azurepipelines.propTypes = {
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

export default Azurepipelines;
