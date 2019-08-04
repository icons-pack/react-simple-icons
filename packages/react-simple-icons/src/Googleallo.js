import React from 'react';
import PropTypes from 'prop-types';

const Googleallo = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M11.665.005c-.702.018-1.417.098-2.14.243C4.788 1.193 1.08 4.974.21 9.728c-1.36 7.406 4.096 14.256 11.16 14.256L22.227 24c.98 0 1.774-.793 1.774-1.774V12C24 5.26 18.445-.18 11.665.005zM12 6.135c3.238 0 5.862 2.626 5.862 5.865v5.61c0 .245-.293.367-.467.194l-1.46-1.46c-1.04.944-2.42 1.52-3.936 1.52-3.24 0-5.865-2.626-5.865-5.864 0-3.24 2.627-5.865 5.865-5.865z" />
    </svg>
  );
};

Googleallo.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Googleallo.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Googleallo;
