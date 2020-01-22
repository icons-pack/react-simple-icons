import React from 'react';
import PropTypes from 'prop-types';

const Wearos = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M21.527 3.545a2.473 2.43 0 00-2.472 2.43 2.473 2.43 0 002.472 2.43A2.473 2.43 0 0024 5.974a2.473 2.43 0 00-2.473-2.43zm-19.187.02c-.304 0-.615.057-.912.181a2.288 2.288 0 00-1.24 3.02l5.306 12.287c.506 1.17 1.881 1.715 3.072 1.218 1.191-.496 1.748-1.847 1.243-3.017L4.5 4.967a2.344 2.344 0 00-2.16-1.403zm7.549 0c-.305 0-.615.057-.912.181-1.191.497-1.748 1.85-1.243 3.02l5.31 12.287c.506 1.17 1.88 1.715 3.071 1.218 1.191-.496 1.748-1.847 1.242-3.017L12.05 4.967a2.344 2.344 0 00-2.16-1.403zm9.295 5.353a2.473 2.43 0 00-2.473 2.428 2.473 2.43 0 002.473 2.43 2.473 2.43 0 002.472-2.43 2.473 2.43 0 00-2.472-2.428Z" />
    </svg>
  );
};

Wearos.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Wearos.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Wearos;
