import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Unity = forwardRef(function Unity({ color = 'currentColor', size = 24, title = 'Unity', ...others }, ref) {
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
      <path d="M24 9.533L21.374 0 11.57 2.555l-1.45 2.49-2.945-.022L0 12l7.176 6.978 2.943-.023 1.454 2.49 9.8 2.554L24 14.47 22.508 12 24 9.533zM10.356 5.445l7.499-1.874-4.304 7.251H4.94l5.416-5.377zm0 13.11L4.94 13.18h8.61l4.305 7.251-7.5-1.874zm9.598.696l-4.307-7.25 4.307-7.253L22.033 12l-2.08 7.25z" />
    </svg>
  );
});

Unity.propTypes = {
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

export default Unity;
