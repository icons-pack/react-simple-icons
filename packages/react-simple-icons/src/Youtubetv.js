import React from 'react';
import PropTypes from 'prop-types';

const Youtubetv = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M17.36 20.988H6.536c-.306 0-.51-.205-.51-.511 0-.306.204-.51.51-.51h10.928c.306 0 .51.204.51.51 0 .306-.306.51-.612.51zM1.635 3.012C.714 3.012 0 3.73 0 4.648v12.56c0 .92.714 1.634 1.634 1.634h20.73c.92 0 1.636-.714 1.636-1.633V4.648c0-.92-.716-1.636-1.636-1.636zm7.863 4.393l6.23 3.472-6.23 3.575Z" />
    </svg>
  );
};

Youtubetv.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Youtubetv.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Youtubetv;
