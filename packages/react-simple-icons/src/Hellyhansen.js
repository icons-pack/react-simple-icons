import React from 'react';
import PropTypes from 'prop-types';

const Hellyhansen = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M4.27 10.09h4.08V5.63h4.11L9.98 18.37H8.34V14H4.26v4.37H0V5.63h4.27zm15.45 3.82h-4.07v4.46h-4.1l2.47-12.74h1.64V10h4.08V5.63H24v12.74h-4.28Z" />
    </svg>
  );
};

Hellyhansen.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Hellyhansen.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Hellyhansen;
