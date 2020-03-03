import React from 'react';
import PropTypes from 'prop-types';

const Googleanalytics = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M7.36 21.14A2.86 2.86 0 014.5 24a2.86 2.86 0 01-2.86-2.86 2.86 2.86 0 012.86-2.87 2.86 2.86 0 012.86 2.87zM9.14 12v8.86C9.14 22.88 10.53 24 12 24c1.36 0 2.86-.95 2.86-3.14v-8.72c0-1.85-1.36-3-2.86-3A2.91 2.91 0 009.14 12zm7.5-9.14v18c0 2.02 1.39 3.14 2.86 3.14 1.36 0 2.86-.95 2.86-3.14V3c0-1.85-1.36-3-2.86-3a2.91 2.91 0 00-2.86 2.86Z" />
    </svg>
  );
};

Googleanalytics.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Googleanalytics.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Googleanalytics;
