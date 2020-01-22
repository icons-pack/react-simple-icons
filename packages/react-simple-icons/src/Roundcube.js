import React from 'react';
import PropTypes from 'prop-types';

const Roundcube = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M19.9 8.6c0 1.2-.3 2.3-.7 3.3l.7-.4 3.4-2L20.6 8c-.3-4.5-4-8-8.6-8S3.7 3.5 3.4 8L.7 9.6l3.1 1.8.9.5c-.5-1-.7-2.1-.7-3.3C4 4.2 7.6.7 11.9.7c4.5 0 8 3.5 8 7.9zM.1 17.3L11.7 24v-7.4L.1 9.9zm12.2-.7V24l11.6-6.7V9.9z" />
    </svg>
  );
};

Roundcube.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Roundcube.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Roundcube;
