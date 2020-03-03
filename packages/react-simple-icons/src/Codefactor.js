import React from 'react';
import PropTypes from 'prop-types';

const Codefactor = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M5.37 2.65A2.64 2.64 0 0 1 2.75 5.3 2.64 2.64 0 0 1 .12 2.65 2.64 2.64 0 0 1 2.75 0a2.64 2.64 0 0 1 2.62 2.65zm0 9.35a2.64 2.64 0 0 1-2.62 2.65A2.64 2.64 0 0 1 .12 12a2.64 2.64 0 0 1 2.63-2.65A2.64 2.64 0 0 1 5.37 12zm0 9.35A2.64 2.64 0 0 1 2.75 24a2.64 2.64 0 0 1-2.63-2.65 2.64 2.64 0 0 1 2.63-2.65 2.64 2.64 0 0 1 2.62 2.65zM11.31 0A2.64 2.64 0 0 0 8.7 2.65 2.64 2.64 0 0 0 11.3 5.3h9.94a2.64 2.64 0 0 0 2.63-2.65A2.64 2.64 0 0 0 21.25 0h-9.94zM8.7 12a2.64 2.64 0 0 1 2.62-2.65H17A2.64 2.64 0 0 1 19.6 12 2.64 2.64 0 0 1 17 14.65H11.3A2.64 2.64 0 0 1 8.7 12z" />
    </svg>
  );
};

Codefactor.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Codefactor.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Codefactor;
