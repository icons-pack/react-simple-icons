import React from 'react';
import PropTypes from 'prop-types';

const Zeit = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M24 22.525H0l12-21.05 12 21.05z" />
    </svg>
  );
};

Zeit.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Zeit.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Zeit;
