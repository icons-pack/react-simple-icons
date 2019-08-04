import React from 'react';
import PropTypes from 'prop-types';

const Sourcegraph = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M9.341.002a2.56 2.56 0 0 0-.484.069C7.501.379 6.7 1.735 7.007 3.092L8.412 8.14 3.368 6.485C2.073 6.053.655 6.793.223 8.088c-.431 1.295.31 2.714 1.603 3.146l5.853 1.919-4.063 4.556a2.635 2.635 0 0 0-.618 1.666 2.474 2.474 0 0 0 2.467 2.466c.678 0 1.357-.308 1.85-.863l3.563-3.979 1.433 5.151A2.498 2.498 0 0 0 14.716 24h.001c.185 0 .431-.061.617-.123a2.514 2.514 0 0 0 1.726-3.084l-1.38-5.017 4.957 1.625c.309.062.556.123.802.123 1.111 0 2.036-.678 2.343-1.726.433-1.296-.308-2.714-1.603-3.146l-5.728-1.878 4.063-4.537c.925-1.048.863-2.59-.185-3.514-1.049-.926-2.59-.864-3.516.184l-3.571 4.006-1.424-5.178C11.494.655 10.462-.046 9.34.002z" />
    </svg>
  );
};

Sourcegraph.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Sourcegraph.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Sourcegraph;