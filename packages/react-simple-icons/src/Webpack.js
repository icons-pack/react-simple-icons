import React from 'react';
import PropTypes from 'prop-types';

const Webpack = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M21.0157 18.1202L12.351 23v-3.8007l5.3986-2.9567 3.266 1.8776zm.5927-.5344V7.3805l-3.1708 1.822v6.5593l3.1708 1.824zm-18.6827.5344L11.5904 23v-3.8007l-5.3986-2.9567-3.266 1.8776zm-.5927-.5344V7.3805l3.1707 1.822v6.5593l-3.1707 1.824zm.371-10.8656l8.8864-5.0056v3.6748L5.8974 8.507l-.0434.0248-3.15-1.8116zm18.5335 0L12.351 1.7146v3.6748l5.693 3.1177.0434.0248 3.15-1.8116zm-9.647 11.6146l-5.3262-2.9155V9.642l5.326 3.062v5.6308zm.7605 0l5.326-2.9155V9.642l-5.326 3.062v5.6308zM6.625 8.9734l5.3467-2.928 5.3468 2.928-5.3468 3.0744L6.625 8.9734z" />
    </svg>
  );
};

Webpack.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Webpack.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Webpack;
