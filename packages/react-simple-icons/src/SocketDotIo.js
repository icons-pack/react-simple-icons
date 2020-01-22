import React from 'react';
import PropTypes from 'prop-types';

const SocketDotIo = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M11.936.016a12.17 12.17 0 0 0-2.975.378C4.281 1.557.567 5.797.091 10.604c-.59 4.549 1.708 9.286 5.644 11.635 3.861 2.418 9.093 2.32 12.874-.223 3.397-2.206 5.512-6.228 5.386-10.285-.058-4.016-2.31-7.917-5.759-9.98C16.354.59 14.143.007 11.936.016zm-.063 1.696c4.945-.007 9.789 3.814 10.282 8.925.945 5.66-3.753 11.413-9.488 11.58-5.454.544-10.725-4.08-10.88-9.557C1.38 8.226 4.303 3.825 8.485 2.36a9.113 9.113 0 0 1 3.388-.647zm5.091 3.225c-2.687 2.085-5.26 4.308-7.889 6.457 1.203.017 2.412.016 3.621.01 1.41-2.165 2.859-4.301 4.268-6.467zm-5.665 7.654c-1.41 2.166-2.86 4.309-4.27 6.474 2.693-2.08 5.255-4.32 7.902-6.456a255.425 255.425 0 0 0-3.632-.018z" />
    </svg>
  );
};

SocketDotIo.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SocketDotIo.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default SocketDotIo;
