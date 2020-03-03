import React from 'react';
import PropTypes from 'prop-types';

const Bandcamp = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M0 18.75l7.437-13.5H24l-7.438 13.5H0z" />
    </svg>
  );
};

Bandcamp.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Bandcamp.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Bandcamp;
