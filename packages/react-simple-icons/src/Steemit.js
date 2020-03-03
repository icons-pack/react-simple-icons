import React from 'react';
import PropTypes from 'prop-types';

const Steemit = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M20.982 7.246a9.659 9.659 0 0 0-3.4-2.202c.721-2.12 3.277-2.892 3.277-2.892A21.632 21.632 0 0 0 8.31.29a10.14 10.14 0 0 0-5.842 3.478 9.152 9.152 0 0 0 .991 12.984c.598.512 1.934 1.308 1.958 1.349-.876 2.226-3.678 2.835-3.678 2.835a23.335 23.335 0 0 0 8.676 2.917 18.256 18.256 0 0 0 4.17.05 10.598 10.598 0 0 0 6.34-3.12 9.525 9.525 0 0 0 .058-13.538zm-1.704 12.058a8.886 8.886 0 0 1-5.137 2.381 16.265 16.265 0 0 1-3.555-.016 16.9 16.9 0 0 1-4.22-1.154 6.277 6.277 0 0 0 1.5-2.145 1.652 1.652 0 0 0-.05-1.308 6.995 6.995 0 0 1 1.426-8.077 7.26 7.26 0 0 1 10.159.057 7.324 7.324 0 0 1-.123 10.262z" />
    </svg>
  );
};

Steemit.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Steemit.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Steemit;
