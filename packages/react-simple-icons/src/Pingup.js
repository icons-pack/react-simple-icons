import React from 'react';
import PropTypes from 'prop-types';

const Pingup = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M13.667 0H1.721v24h7.536V9.717h-2.76c-.504 0-.65-.314-.32-.698l4.324-5.044c.327-.384.867-.384 1.195 0l4.324 5.044c.314.384.18.698-.33.698h-2.759v6.676h.73c6.225 0 8.617-4.309 8.617-8.481C22.291 3.906 19.666 0 13.667 0" />
    </svg>
  );
};

Pingup.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Pingup.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Pingup;
