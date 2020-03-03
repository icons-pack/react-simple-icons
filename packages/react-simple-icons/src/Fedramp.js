import React from 'react';
import PropTypes from 'prop-types';

const Fedramp = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M1.886 3.412A1.85 1.85 0 000 5.27v15.319h3.922v-6.094h4.934V10.66H3.922V7.336h14.595a1.67 1.67 0 010 3.324h-6.844a1.431 1.431 0 00-1.298 1.325v8.601h3.919V14.54h2.168l3.138 6.047h4.378l-3.46-6.657a5.442 5.442 0 00-2.001-10.517z" />
    </svg>
  );
};

Fedramp.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Fedramp.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Fedramp;
