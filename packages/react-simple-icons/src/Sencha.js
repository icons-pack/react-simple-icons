import React from 'react';
import PropTypes from 'prop-types';

const Sencha = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M15.287,24c0.458-1.221,0.917-1.532,0.917-2.442c0-1.452-0.878-2.8-2.237-3.434 l-5.831-2.813C5.211,13.85,3.392,10.97,3.392,7.797c0-3.23,1.867-6.133,4.871-7.576L8.712,0C8.129,0.674,7.796,1.532,7.796,2.44 c0,1.453,0.878,2.801,2.237,3.435l5.831,2.813c2.926,1.462,4.744,4.342,4.744,7.514c0,3.23-1.867,6.133-4.871,7.577L15.287,24" />
    </svg>
  );
};

Sencha.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Sencha.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Sencha;
