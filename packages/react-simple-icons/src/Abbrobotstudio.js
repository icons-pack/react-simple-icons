import React from 'react';
import PropTypes from 'prop-types';

const Abbrobotstudio = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M24 12.46a9.6 9.6 0 01-19.2 0h1.07a8.53 8.53 0 108.53-8.53V2.86a9.6 9.6 0 019.6 9.6zm-9.6-3.2a3.2 3.2 0 103.2 3.2 3.2 3.2 0 00-3.2-3.2zm-2 0l-.6-6.67-2.46 1.92-1.46-1.44a4.67 4.67 0 00-5.62-.37L.24 4a.54.54 0 00-.15.74.54.54 0 00.74.15l2-1.31a3.64 3.64 0 014.29.22l1.37 1.38L6.2 7z" />
    </svg>
  );
};

Abbrobotstudio.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Abbrobotstudio.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Abbrobotstudio;
