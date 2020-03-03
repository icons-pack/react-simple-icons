import React from 'react';
import PropTypes from 'prop-types';

const Googlelens = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M12 16.667a4.666 4.666 0 100-9.333 4.666 4.666 0 000 9.333m8 6a2.666 2.666 0 100-5.333 2.666 2.666 0 000 5.333m-13.333-2a3.343 3.343 0 01-3.334-3.334v-2.666H0v2.666A6.665 6.665 0 006.667 24h2.666v-3.333zm-3.334-14c0-1.834 1.5-3.334 3.334-3.334h2.666V0H6.667A6.665 6.665 0 000 6.667v2.666h3.333zm14-3.334c1.834 0 3.334 1.5 3.334 3.334v2.666H24V6.667A6.665 6.665 0 0017.333 0h-2.666v3.333Z" />
    </svg>
  );
};

Googlelens.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Googlelens.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Googlelens;
