import React from 'react';
import PropTypes from 'prop-types';

const Uber = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M11.97.006A11.995 11.995 0 0 0 .034 10.801h8.336v-1.8a.6.6 0 0 1 .6-.599h5.997c.334 0 .6.268.6.6v5.997a.6.6 0 0 1-.599.6h-6a.599.599 0 0 1-.598-.6V13.2H.035c.663 6.592 6.543 11.397 13.134 10.735 6.592-.663 11.397-6.543 10.734-13.134A11.994 11.994 0 0 0 11.97.006z" />
    </svg>
  );
};

Uber.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Uber.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Uber;
