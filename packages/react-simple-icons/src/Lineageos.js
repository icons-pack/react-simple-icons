import React from 'react';
import PropTypes from 'prop-types';

const Lineageos = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M21.6453 12.0573a2.404 2.404 0 00-1.803.7993l-.1382-.054a17.801 17.801 0 00-2.8667-.8594 4.8078 4.8078 0 00-9.6156 0h-.1322a17.7469 17.7469 0 00-2.7645.8353l-.1382.0541a2.404 2.404 0 10.5589 1.0697 16.599 16.599 0 012.5782-.7752 4.8078 4.8078 0 009.3572 0 16.557 16.557 0 012.5782.7692 2.404 2.404 0 102.3859-1.839zM2.414 15.6633a1.202 1.202 0 111.202-1.202 1.202 1.202 0 01-1.202 1.202zm9.6156 0a3.6059 3.6059 0 113.6059-3.606 3.6059 3.6059 0 01-3.6059 3.606zm9.6157 0a1.202 1.202 0 111.202-1.202 1.202 1.202 0 01-1.202 1.202zm-7.8127-3.606a1.803 1.803 0 11-1.803-1.8029 1.803 1.803 0 011.803 1.803Z" />
    </svg>
  );
};

Lineageos.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Lineageos.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Lineageos;
