import React from 'react';
import PropTypes from 'prop-types';

const Googledrive = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M4.433 22.396l4-6.929H24l-4 6.929H4.433zm3.566-6.929l-3.998 6.929L0 15.467 7.785 1.98l3.999 6.931-3.785 6.556zm15.784-.375h-7.999L7.999 1.605h8.002l7.785 13.486h-.003z" />
    </svg>
  );
};

Googledrive.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Googledrive.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Googledrive;
