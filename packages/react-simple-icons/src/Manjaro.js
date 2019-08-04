import React from 'react';
import PropTypes from 'prop-types';

const Manjaro = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M0 0v24h6.75V6.75h8.625V0H0zm8.625 8.625V24h6.75V8.625h-6.75zM17.25 0v24H24V0h-6.75z" />
    </svg>
  );
};

Manjaro.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Manjaro.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Manjaro;
