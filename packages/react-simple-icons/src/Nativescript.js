import React from 'react';
import PropTypes from 'prop-types';

const Nativescript = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M1.77 1.76A5.68 5.68 0 0 1 5.8 0h12.6c1.37 0 2.65.6 3.83 1.76A5.43 5.43 0 0 1 24 5.7v12.77c0 1.34-.56 2.58-1.68 3.73A5.77 5.77 0 0 1 18.25 24H5.87a6.3 6.3 0 0 1-4.1-1.57C.69 21.45.1 20.03 0 18.13V5.73a5.21 5.21 0 0 1 1.77-3.97zm6.25 8.3l7.93 10.06h2.12c.49-.06.88-.2 1.17-.43.3-.23.5-.56.64-1v-4.94c.08-.95.67-1.54 1.77-1.75-1.1-.4-1.69-1.02-1.77-1.86V5.42c-.12-.44-.33-.8-.64-1.07a1.83 1.83 0 0 0-1.09-.47H16v10.2L8.02 3.87H5.79c-.56.1-.97.3-1.25.6S4.08 5.25 4 5.9v4.85c-.35.69-.9 1.1-1.65 1.25.85.16 1.4.61 1.65 1.36v4.77c.02.55.2 1 .54 1.37.33.36.7.53 1.1.5H8l.02-9.94z" />
    </svg>
  );
};

Nativescript.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Nativescript.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Nativescript;
