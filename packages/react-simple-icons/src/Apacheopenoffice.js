import React from 'react';
import PropTypes from 'prop-types';

const Apacheopenoffice = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M12 0A12 12 0 000 12a12.44 12.44 0 00.25 2.46A13 13 0 013.56 14a12.45 12.45 0 015.15 1.1l.76-.5a12.64 12.64 0 0111.36-.88.19.19 0 01.11.17.16.16 0 01-.06.13.19.19 0 01-.13 0h-.25a8.7 8.7 0 00-.89 0 12.9 12.9 0 00-9.11 3.34 10.7 10.7 0 00-1.17 1.34l-.11.15a.16.16 0 01-.12 0 .17.17 0 01-.12 0A12 12 0 00.68 16 12 12 0 1012 0zm9.39 7.18h-.56a7.08 7.08 0 00-6.21 2.17c-.06.06-.12.07-.18 0a7 7 0 00-4.79-2.19 7.44 7.44 0 00-2 .09.13.13 0 01-.13-.13.14.14 0 010-.1 7.27 7.27 0 016.94.12 7.33 7.33 0 016.8-.26l.14.08a.11.11 0 01.07.11.16.16 0 010 .09.11.11 0 01-.08.02z" />
    </svg>
  );
};

Apacheopenoffice.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Apacheopenoffice.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Apacheopenoffice;
