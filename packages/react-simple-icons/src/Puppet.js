import React from 'react';
import PropTypes from 'prop-types';

const Puppet = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M8.984 21.611H6.595v-2.388h2.39zM6.595 2.39h2.39v2.388h-2.39zm13.198 6.028h-5.48l.001-.002-2.941-2.941V0H4.207v7.166h5.48l2.938 2.938.002-.001v3.794l-.003-.003-2.94 2.94H4.207V24h7.166v-5.477l2.94-2.94h5.48V8.417" />
    </svg>
  );
};

Puppet.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Puppet.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Puppet;
