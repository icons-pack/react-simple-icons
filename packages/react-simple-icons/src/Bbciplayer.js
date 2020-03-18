import React from 'react';
import PropTypes from 'prop-types';

const Bbciplayer = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M8.315 0H2.382v6.022h5.933V3.506l9.618 8.45-9.618 8.538V8.99H2.382V24h5.933l13.303-12.045Z" />
    </svg>
  );
};

Bbciplayer.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Bbciplayer.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Bbciplayer;
