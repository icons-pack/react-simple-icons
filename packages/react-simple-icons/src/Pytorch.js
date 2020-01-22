import React from 'react';
import PropTypes from 'prop-types';

const Pytorch = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M12.005.04l-7.03 7.03a9.832 9.832 0 0 0 0 13.975 9.833 9.833 0 0 0 13.976 0c3.97-3.887 3.972-10.171.084-13.976l-1.738 1.737c2.895 2.895 2.895 7.608 0 10.503-2.894 2.894-7.608 2.894-10.503 0C3.9 16.414 3.9 11.7 6.794 8.806l4.632-4.631.58-.663zm3.556 3.886a1.323 1.323 0 0 0-1.323 1.323 1.323 1.323 0 0 0 1.323 1.323 1.323 1.323 0 0 0 1.323-1.323 1.323 1.323 0 0 0-1.323-1.323z" />
    </svg>
  );
};

Pytorch.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Pytorch.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Pytorch;
