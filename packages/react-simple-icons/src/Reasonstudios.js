import React from 'react';
import PropTypes from 'prop-types';

const Reasonstudios = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M2.49,5.114l8.299-4.79c0.739-0.427,1.647-0.432,2.391-0.017l0.03,0.017 l8.299,4.79c0.74,0.427,1.2,1.212,1.211,2.065V7.21v9.58c0,0.854-0.451,1.644-1.184,2.08l-0.027,0.016l-8.299,4.79 c-0.739,0.427-1.647,0.432-2.391,0.017l-0.03-0.017l-8.299-4.79c-0.74-0.427-1.199-1.213-1.21-2.065V16.79V7.21 c0-0.854,0.45-1.644,1.184-2.08L2.49,5.114l8.299-4.79L2.49,5.114z M12,4.026L5.092,8.013v7.974L12,19.974V12l6.908-3.987L12,4.026 z" />
    </svg>
  );
};

Reasonstudios.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Reasonstudios.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Reasonstudios;
