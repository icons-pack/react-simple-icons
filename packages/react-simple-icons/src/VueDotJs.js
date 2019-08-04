import React from 'react';
import PropTypes from 'prop-types';

const VueDotJs = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M19.197 1.608l.003-.006h-4.425L12 6.4v.002l-2.772-4.8H4.803v.005H0l12 20.786L24 1.608" />
    </svg>
  );
};

VueDotJs.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

VueDotJs.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default VueDotJs;
