import React from 'react';
import PropTypes from 'prop-types';

const Fastly = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M13.919 3.036V1.3h.632V0H9.377v1.3h.631v1.749a10.572 10.572 0 00-8.575 10.384C1.433 19.275 6.17 24 12 24c5.842 0 10.567-4.737 10.567-10.567 0-5.186-3.729-9.486-8.648-10.397zm-1.628 15.826v-.607h-.619v.607c-2.757-.158-4.955-2.38-5.101-5.137h.607v-.62h-.607a5.436 5.436 0 015.101-5.089v.607h.62v-.607a5.435 5.435 0 015.137 5.114h-.607v.619h.607a5.444 5.444 0 01-5.138 5.113zm2.26-7.712l-.39-.389-1.979 1.725a.912.912 0 00-.316-.06c-.534 0-.971.448-.971.995 0 .547.437.996.971.996.535 0 .972-.45.972-.996a.839.839 0 00-.049-.304Z" />
    </svg>
  );
};

Fastly.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Fastly.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Fastly;
