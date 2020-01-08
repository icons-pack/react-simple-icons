import React from 'react';
import PropTypes from 'prop-types';

const Beatsbydre = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M12.0098 0a12 12 0 00-3.5996.5527v6.6465A6 6 0 116.0098 12V1.6016a12 12 0 106-1.6016zm.1504 8.4023A3.6 3.6 0 008.4102 12a3.6 3.6 0 003.5996 3.5996 3.6 3.6 0 00.1504-7.1973Z" />
    </svg>
  );
};

Beatsbydre.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Beatsbydre.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Beatsbydre;
