import React from 'react';
import PropTypes from 'prop-types';

const Pagekit = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M2.401 0v24h9.6v-3.527H5.929V3.526h12.146v13.421h-6.073v3.525H21.6V0H2.401z" />
    </svg>
  );
};

Pagekit.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Pagekit.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Pagekit;
