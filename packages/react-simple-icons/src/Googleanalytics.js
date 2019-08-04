import React from 'react';
import PropTypes from 'prop-types';

const Googleanalytics = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M22.074 24H1.895C.852 24 0 23.147 0 22.104v-4.419c0-1.043.852-1.896 1.895-1.896H7.58V9.474c0-1.042.852-1.894 1.894-1.894h6.331V1.925C15.805.87 16.674 0 17.729 0h4.346C23.13 0 24 .87 24 1.926v20.148C24 23.13 23.13 24 22.074 24z" />
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
