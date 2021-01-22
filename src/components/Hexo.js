import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Hexo = forwardRef(function Hexo({ color = 'currentColor', size = 24, title = 'Hexo', ...others }, ref) {
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
      <path d="M12.02 0L1.596 6.02l-.02 12L11.978 24l10.426-6.02.02-12zm4.828 17.14l-.96.558-.969-.574V12.99H9.081v4.15l-.96.558-.969-.574V6.854l.964-.552.965.563v4.145h5.838V6.86l.965-.552.964.563z" />
    </svg>
  );
});

Hexo.propTypes = {
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

export default Hexo;
