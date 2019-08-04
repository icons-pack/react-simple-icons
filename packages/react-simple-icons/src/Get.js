import React from 'react';
import PropTypes from 'prop-types';

const Get = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="undefined" />
    </svg>
  );
};

Get.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Get.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Get;
