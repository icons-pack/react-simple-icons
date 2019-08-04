import React from 'react';
import PropTypes from 'prop-types';

const Twitch = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M2.089 0L.525 4.175v16.694h5.736V24h3.132l3.127-3.132h4.695l6.26-6.258V0H2.089zm2.086 2.085H21.39v11.479l-3.652 3.652H12l-3.127 3.127v-3.127H4.175V2.085zM9.915 12.522H12v-6.26H9.915v6.26zm5.735 0h2.086v-6.26H15.65v6.26z" />
    </svg>
  );
};

Twitch.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Twitch.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Twitch;
