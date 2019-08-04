import React from 'react';
import PropTypes from 'prop-types';

const Koding = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M.8 0H23v6H1V0zm0 9H18v6H.7V9zm0 9H23v6H1v-6z" />
    </svg>
  );
};

Koding.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Koding.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Koding;
