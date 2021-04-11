import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Vapor = forwardRef(function Vapor({ color = 'currentColor', size = 24, title = 'Vapor', ...others }, ref) {
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
      <path d="M22.75 13.908v1.56L12 24 1.25 15.468v-1.56L12 22.44l10.75-8.532zM12 17.267L1.25 8.824 12 0l10.75 8.824L12 17.267zm.356-4.635a3.193 3.193 0 0 0 3.193-3.193 3.185 3.185 0 0 0-3.029-3.176l.001-.016-4.514-.427 1.205 4.102a3.184 3.184 0 0 0 3.144 2.71zM12 20.269L1.25 11.737v1.533L12 21.802l10.75-8.532v-1.533L12 20.269zm0-2.366L1.25 9.46v1.64L12 19.63l10.75-8.532V9.46L12 17.903z" />
    </svg>
  );
});

Vapor.propTypes = {
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

export default Vapor;
