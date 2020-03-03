import React from 'react';
import PropTypes from 'prop-types';

const Sublimetext = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M21.24,12.06a.72.72,0,0,0-.46-.65L13.4,9.07l7.37-2.34a.73.73,0,0,0,.47-.66V.38A.35.35,0,0,0,20.77,0L3.23,5.58a.68.68,0,0,0-.47.64v5.7a.65.65,0,0,0,.46.62l7.46,2.37L3.22,17.27a.73.73,0,0,0-.46.66v5.69a.34.34,0,0,0,.46.36l17.56-5.57a.65.65,0,0,0,.46-.62Z" />
    </svg>
  );
};

Sublimetext.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Sublimetext.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Sublimetext;
