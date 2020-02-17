import React from 'react';
import PropTypes from 'prop-types';

const Dynamics365 = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M4.59 7.41l4.94 3.54L4.59 24zm0-7.41v6.36l9.53 5.29 4.59-3.52zm0 24l14.82-8.47v-6.7Z" />
    </svg>
  );
};

Dynamics365.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Dynamics365.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Dynamics365;
