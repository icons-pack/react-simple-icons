import React from 'react';
import PropTypes from 'prop-types';

const Netapp = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M0 2v20h9.33V10h5.34v12H24V2Z" />
    </svg>
  );
};

Netapp.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Netapp.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Netapp;
