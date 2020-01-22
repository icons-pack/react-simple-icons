import React from 'react';
import PropTypes from 'prop-types';

const Quarkus = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M12.788 15.963l3.872-2.236v-4.47l-3.872 2.235v4.471zm.37.214L16.66 18.2v-4.043l-3.502 2.021zm3.291-7.714V4.42L12.947 6.44l3.502 2.022zm-3.872-1.808L8.704 8.891l3.873 2.236 3.872-2.236-3.872-2.236zm-.371-.214L8.704 4.42v4.043l3.502-2.022zm4.825 3.03v4.042l3.501-2.021-3.501-2.022zm-4.665 6.492v-4.471L8.494 9.256v4.471l3.872 2.236zM8.123 9.47L4.62 11.492l3.502 2.021V9.47zm.37 4.686v4.043l3.502-2.022-3.501-2.021z M20.007.134H3.979C1.79.134 0 1.902 0 4.064v15.832c0 2.161 1.79 3.93 3.979 3.93h10.976l-2.962-7.108-2.15 4.488H3.98c-.72 0-1.327-.6-1.327-1.31V4.064c0-.71.608-1.31 1.327-1.31h16.028c.719 0 1.327.6 1.327 1.31v15.832c0 .71-.608 1.31-1.327 1.31h-3.478l1.092 2.62h2.386c2.188 0 3.979-1.769 3.979-3.93V4.064c0-2.162-1.79-3.93-3.979-3.93z" />
    </svg>
  );
};

Quarkus.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Quarkus.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Quarkus;
