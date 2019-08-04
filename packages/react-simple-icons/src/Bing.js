import React from 'react';
import PropTypes from 'prop-types';

const Bing = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M3.605 0L8.4 1.686V18.56l6.753-3.895-3.31-1.555-2.09-5.2 10.64 3.738v5.435L8.403 24l-4.797-2.67V0z" />
    </svg>
  );
};

Bing.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Bing.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Bing;
