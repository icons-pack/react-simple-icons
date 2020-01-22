import React from 'react';
import PropTypes from 'prop-types';

const Mercedes = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M12.005 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zM3.25 17.539a10.357 10.357 0 0 0 8.755 4.821c3.681 0 6.917-1.924 8.755-4.821l-8.755-3.336-8.755 3.336zm10.663-6.641l7.267 5.915A10.306 10.306 0 0 0 22.365 12c0-5.577-4.417-10.131-9.94-10.352l1.488 9.25zm-2.328-9.25C6.062 1.869 1.645 6.423 1.645 12c0 1.737.428 3.374 1.185 4.813l7.267-5.915 1.488-9.25z" />
    </svg>
  );
};

Mercedes.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Mercedes.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Mercedes;
