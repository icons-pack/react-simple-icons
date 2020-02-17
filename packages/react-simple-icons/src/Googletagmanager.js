import React from 'react';
import PropTypes from 'prop-types';

const Googletagmanager = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M11.929,18.136c1.619,0,2.932,1.313,2.932,2.932S13.549,24,11.929,24s-2.932-1.313-2.932-2.932 S10.31,18.136,11.929,18.136z M23.119,9.878l-9-9c-1.171-1.171-3.071-1.171-4.242,0c-1.171,1.171-1.171,3.071,0,4.242l6.866,6.866 l-4.493,4.588l2.119,2.211c0.581,0.621,0.901,1.432,0.901,2.282c0,0.313-0.044,0.615-0.125,0.903l7.974-7.851 C24.291,12.949,24.291,11.05,23.119,9.878z M11.669,7.491L9.588,5.41C8.944,4.766,8.589,3.91,8.589,3c0-0.333,0.048-0.659,0.14-0.97 L0.876,9.809c-1.17,1.17-1.17,3.067,0,4.238l7.824,7.875c-0.072-0.273-0.111-0.559-0.111-0.854c0-1.842,1.499-3.341,3.341-3.341 c0.351,0,0.69,0.055,1.008,0.156l-5.706-5.955L11.669,7.491z" />
    </svg>
  );
};

Googletagmanager.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Googletagmanager.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Googletagmanager;
