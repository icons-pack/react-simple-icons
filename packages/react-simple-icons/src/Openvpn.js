import React from 'react';
import PropTypes from 'prop-types';

const Openvpn = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M12 .365C5.385.365 0 5.697 0 12.26c0 4.36 2.358 8.154 5.896 10.205l.77-5.076A7.046 7.046 0 0 1 4.82 12.67c0-3.897 3.18-7.076 7.13-7.076 3.948 0 7.126 3.179 7.126 7.076 0 1.847-.717 3.488-1.846 4.77l.77 5.078c3.59-2.051 6-5.899 6-10.258C24 5.697 18.615.365 12 .365zm-.05 8.156a3.786 3.786 0 0 0-3.796 3.795 3.738 3.738 0 0 0 2.461 3.54L9.13 23.65h5.64l-1.435-7.795c1.385-.564 2.41-1.898 2.41-3.539a3.786 3.786 0 0 0-3.795-3.795z" />
    </svg>
  );
};

Openvpn.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Openvpn.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Openvpn;
