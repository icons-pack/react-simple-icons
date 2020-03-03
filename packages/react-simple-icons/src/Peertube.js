import React from 'react';
import PropTypes from 'prop-types';

const Peertube = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M3,0v12l9-6L3,0z M3,12v12l9-6L3,12z M12,6v12l9-6L12,6z" />
    </svg>
  );
};

Peertube.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Peertube.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Peertube;
