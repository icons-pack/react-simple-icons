import React from 'react';
import PropTypes from 'prop-types';

const Kaios = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M4.47 0a2.81 2.81 0 0 0-2.84 2.78v18.43A2.8 2.8 0 0 0 4.47 24a2.8 2.8 0 0 0 2.85-2.78V2.78A2.83 2.83 0 0 0 4.47 0zm9.4 8.54a2.8 2.8 0 0 0-3.89-.66 2.68 2.68 0 0 0-.68 3.8l8 11.15a2.81 2.81 0 0 0 3.88.66 2.68 2.68 0 0 0 .74-3.72l-.06-.09-7.98-11.14zm3.65-1.18a3.71 3.71 0 0 0 3.74-3.67A3.71 3.71 0 0 0 17.52.02a3.71 3.71 0 0 0-3.75 3.67 3.71 3.71 0 0 0 3.75 3.67z" />
    </svg>
  );
};

Kaios.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Kaios.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Kaios;
