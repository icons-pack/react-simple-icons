import React from 'react';
import PropTypes from 'prop-types';

const Microsoftoffice = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M14.85 0L2 5V19.4L6.6 17.45V6.1L14.95 4.2V21.05L2 19.4L14.85 24L22 21.7V2.4L14.85 0Z" />
    </svg>
  );
};

Microsoftoffice.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Microsoftoffice.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Microsoftoffice;
