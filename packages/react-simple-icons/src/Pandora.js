import React from 'react';
import PropTypes from 'prop-types';

const Pandora = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M19.051 0H4.949C2.25 0 0 2.221 0 4.95v14.101C0 21.75 2.22 24 4.949 24h14.102C21.779 24 24 21.779 24 19.051V4.95C24 2.25 21.779 0 19.051 0zm-6.676 15.811h-1.229V18.6c0 .361-.301.646-.646.646H6.646V4.756H13.2c3.181 0 5.642 1.65 5.642 5.4 0 3.555-2.73 5.654-6.451 5.654h-.016z" />
    </svg>
  );
};

Pandora.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Pandora.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Pandora;
