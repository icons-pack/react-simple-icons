import React from 'react';
import PropTypes from 'prop-types';

const Googlelens = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M19.9322 17.2881c1.4644 0 2.644 1.1797 2.644 2.6441s-1.1796 2.644-2.644 2.644c-1.4644 0-2.644-1.1796-2.644-2.644 0-1.4644 1.1796-2.644 2.644-2.644M12 7.322c2.583 0 4.678 2.095 4.678 4.678 0 2.583-2.095 4.678-4.678 4.678-2.583 0-4.678-2.095-4.678-4.678 0-2.583 2.095-4.678 4.678-4.678M6.6915 20.6644c-1.8508 0-3.356-1.505-3.356-3.356v-2.6643H0v2.6644C0 21.0102 2.9898 24 6.6915 24H9.356v-3.3356H6.6915M3.3355 6.6915c0-1.8508 1.5052-3.356 3.356-3.356H9.356V0H6.6915C2.9898 0 0 2.9898 0 6.6915V9.356h3.3356V6.6915m13.9729-3.356c1.8508 0 3.356 1.5052 3.356 3.356V9.356H24V6.6915C24 2.9898 21.0102 0 17.3085 0H14.644v3.3356h2.6644Z" />
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
