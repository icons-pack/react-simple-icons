import React from 'react';
import PropTypes from 'prop-types';

const Googlesheets = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M4.908 0c-.873 0-1.635.764-1.635 1.637v20.726c0 .873.762 1.637 1.635 1.637h14.184c.873 0 1.635-.764 1.635-1.637V7.045h-4.909a2.157 2.157 0 0 1-2.136-2.137V0H4.908zm9.774.5v4.408c0 .581.555 1.137 1.136 1.137h4.409L14.682.5zM7.637 11.781h8.726v7.856H7.637V11.78zm1.09 1.092v1.309h2.728v-1.309H8.727zm3.818 0v1.309h2.728v-1.309h-2.728zm-3.818 2.182v1.308h2.728v-1.308H8.727zm3.818 0v1.308h2.728v-1.308h-2.728zm-3.818 2.181v1.309h2.728v-1.309H8.727zm3.818 0v1.309h2.728v-1.309h-2.728z" />
    </svg>
  );
};

Googlesheets.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Googlesheets.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Googlesheets;
