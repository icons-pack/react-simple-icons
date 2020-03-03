import React from 'react';
import PropTypes from 'prop-types';

const Plex = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M11.643 0H4.68l7.679 12L4.68 24h6.963l7.677-12-7.677-12" />
    </svg>
  );
};

Plex.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Plex.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Plex;
