import React from 'react';
import PropTypes from 'prop-types';

const Linuxfoundation = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M4.8 9.6v9.6h9.6V24H0V9.6h4.8zM24 0v24h-7.2v-4.8h2.4V4.8H4.8v2.4H0V0h24z" />
    </svg>
  );
};

Linuxfoundation.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Linuxfoundation.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Linuxfoundation;
