import React from 'react';
import PropTypes from 'prop-types';

const Adonisjs = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M13.333 1.333l-.596 1.193-2.404 4.807L8 2.667l-8 16h4.667l-2 4H24zm0 2.982l8.51 17.018H4.823l1.334-2.666H16l-4.922-9.843Z" />
    </svg>
  );
};

Adonisjs.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Adonisjs.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Adonisjs;
