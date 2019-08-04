import React from 'react';
import PropTypes from 'prop-types';

const Hulu = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M14.4 7.355h-3.607a5.91 5.91 0 0 0-2.063.405V-.03H2.94v24.06h5.8v-9.51a1.61 1.61 0 0 1 1.56-1.7h3.39a1.59 1.59 0 0 1 1.59 1.56v9.59h5.78V13.54c0-4.41-2.25-6.162-5.9-6.162" />
    </svg>
  );
};

Hulu.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Hulu.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Hulu;
