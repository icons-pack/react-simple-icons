import React from 'react';
import PropTypes from 'prop-types';

const Mojang = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M6.912 0A6.913 6.913 0 000 6.912V24h17.088A6.912 6.912 0 0024 17.088V0h-4.992zm10.111 2.594c.566 0 1.024 2.505 1.024 3.07a1.024 1.024 0 11-2.047 0c0-.565.459-3.07 1.023-3.07zM14.41 5.498c.69.19 2.082 3.77 3.637 2.215 1.448-1.448 2.049 7.164 2.049 7.164l-2.05-1.022s.002-2.048-3.07-4.095c-3.809-2.54-8.189-.867-8.189 3.07 0 8.033 13.309 5.12 13.309 5.12s-.002 2.046-2.05 2.046H5.765c-2.047 0-2.05-2.047-2.05-2.047V7.713c0-2.048 2.05-2.049 2.05-2.049h4.093c2.048 0 4.096 2.049 4.096 2.049 0-1.49.117-2.098.328-2.205a.175.175 0 01.13-.01z" />
    </svg>
  );
};

Mojang.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Mojang.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Mojang;
