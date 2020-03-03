import React from 'react';
import PropTypes from 'prop-types';

const Openaccess = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M18.972 13.487a7.56 7.56 0 0 0-.54-1.043V6.416a6.376 6.376 0 0 0-1.88-4.536A6.375 6.375 0 0 0 12.016 0h-.002a6.375 6.375 0 0 0-4.536 1.878 6.376 6.376 0 0 0-1.88 4.538v.877h2.57v-.877c0-1.027.4-1.993 1.127-2.72a3.822 3.822 0 0 1 2.72-1.126 3.852 3.852 0 0 1 3.847 3.846v3.508A7.52 7.52 0 0 0 12 8.866a7.54 7.54 0 0 0-5.35 2.216 7.54 7.54 0 0 0-2.217 5.35 7.54 7.54 0 0 0 2.216 5.35A7.54 7.54 0 0 0 12 24.002a7.54 7.54 0 0 0 5.35-2.216 7.54 7.54 0 0 0 2.217-5.351c0-1.021-.2-2.012-.595-2.946zM12 21.43c-2.755 0-4.997-2.242-4.997-4.997S9.245 11.436 12 11.436s4.997 2.241 4.997 4.997S14.755 21.43 12 21.43zm2.145-4.974a2.12 2.12 0 1 1-4.24 0 2.12 2.12 0 0 1 4.24 0z" />
    </svg>
  );
};

Openaccess.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Openaccess.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Openaccess;
