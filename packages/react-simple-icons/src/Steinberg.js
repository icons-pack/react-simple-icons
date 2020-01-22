import React from 'react';
import PropTypes from 'prop-types';

const Steinberg = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M19.481,12.629c0.642-0.371,0.642-1.009,0-1.379l-4.769-2.754 c-0.642-0.371-1.195-0.052-1.195,0.69v5.507c0,0.741,0.553,1.06,1.195,0.69L19.481,12.629z M12.001,2.727 c5.121,0,9.273,4.152,9.273,9.273s-4.152,9.273-9.273,9.273S2.729,17.121,2.729,12S6.88,2.727,12.001,2.727 M12.001,0.002 C5.386,0.002,0.004,5.384,0.004,12c0,6.616,5.382,11.998,11.998,11.998S23.999,18.616,23.999,12 C23.999,5.384,18.617,0.002,12.001,0.002L12.001,0.002z" />
    </svg>
  );
};

Steinberg.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Steinberg.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Steinberg;
