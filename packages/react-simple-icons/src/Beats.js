import React from 'react';
import PropTypes from 'prop-types';

const Beats = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M21.55 16.77a7.14 7.14 0 0 1-7.16 7.16H2.45v-7.16h8.36a9.61 9.61 0 0 0 8.5-5.19 7.09 7.09 0 0 1 2.24 5.2zm-4.24-6.53a7.29 7.29 0 0 0 .66-3.01A7.14 7.14 0 0 0 10.8.07H2.46v14.32h8.35c2.9 0 5.37-1.7 6.5-4.15z" />
    </svg>
  );
};

Beats.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Beats.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Beats;
