import React from 'react';
import PropTypes from 'prop-types';

const Gitpod = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M3.6 17V7.6L1.5 6.4v11.8L11.7 24v-2.4z M11.7 19.2v-6.9l-6-3.5v7zM12 2.4l8.1 4.7 2.1-1.2L12 0 1.8 5.9l2.1 1.2z M18 8.3l-6-3.5-6 3.5 6 3.5zM12.3 19.3l6-3.5v-2.4l-4.1 2.4v-2.4l6.2-3.6V17l-8.1 4.6V24l10.2-5.8V6.4l-10.2 5.9zM12 12.1z" />
    </svg>
  );
};

Gitpod.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Gitpod.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Gitpod;
