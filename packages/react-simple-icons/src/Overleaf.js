import React from 'react';
import PropTypes from 'prop-types';

const Overleaf = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M7.362 6.029a11.685 11.685 0 00-5.694 9.606 8.368 8.368 0 1011.355-7.823 7.724 7.724 0 00-2.97-.562 12.346 12.346 0 00-4.21 4.87 5.496 5.496 0 114.193 9.027 5.496 5.496 0 01-4.192-1.93 6.602 6.602 0 01-1.585-5.563c1.073-6.42 8.764-10.117 14.458-11.553a59.17 59.17 0 00-7.592 4.374c6.883 2.657 7.989-3.136 11.207-5.728C19.13-.507 7.379-.969 7.362 6.03z" />
    </svg>
  );
};

Overleaf.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Overleaf.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Overleaf;
