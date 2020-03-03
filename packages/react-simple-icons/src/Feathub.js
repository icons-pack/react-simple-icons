import React from 'react';
import PropTypes from 'prop-types';

const Feathub = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M8.73.01h6.54v6.867H8.73V.01zm0 17.113h6.54v6.867H8.73v-6.867zM.01 8.73h23.98v6.54H.01V8.73z" />
    </svg>
  );
};

Feathub.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Feathub.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Feathub;
