import React from 'react';
import PropTypes from 'prop-types';

const Nec = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M.08 9.27H2c.44 0 .95.4 1.19.63l3.36 3.69V9.27H7.7v5.9h-2c-.36-.02-.71-.1-1.12-.49l-3.36-3.7v4.18H.08V9.27zM23.92 15.2c-1.37.19-2.75.2-4.14.09a6.21 6.21 0 01-2.34-.61c-.92-.48-1.22-1.54-1.2-2.5 0-.88.27-1.83 1.07-2.35A4.33 4.33 0 0119 9.27c1.62-.28 3.25-.22 4.84-.04v.84c-1.87-.36-3.85-.27-4.52.58a2.25 2.25 0 00-.48 1.5c0 .8.28 2 1.92 2.24 1.07.15 2.13.03 3.16-.15v.96zM12.2 14.28c.16 0 2.74.02 3.63 0v.88c-1.79.07-3.5.1-5.3.03-1.53-.06-1.8-.82-1.82-1.55V9.27h7.03v.84H11.2v1.5h4.15v.82h-4.15l.02 1.03c.02.57.3.78.99.82z" />
    </svg>
  );
};

Nec.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Nec.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Nec;
