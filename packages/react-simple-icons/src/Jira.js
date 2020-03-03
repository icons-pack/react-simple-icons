import React from 'react';
import PropTypes from 'prop-types';

const Jira = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M23.323 11.33L13.001 1 12 0 4.225 7.775.67 11.33a.96.96 0 0 0 0 1.347l7.103 7.103L12 24l7.771-7.771.121-.121 3.431-3.431a.945.945 0 0 0 0-1.347zM12 15.551L8.449 12 12 8.453 15.548 12 12 15.551z" />
    </svg>
  );
};

Jira.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Jira.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Jira;
