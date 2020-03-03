import React from 'react';
import PropTypes from 'prop-types';

const Opencollective = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M21.86 5.17a11.94 11.94 0 0 1 0 13.66l-3.1-3.1a7.68 7.68 0 0 0 0-7.46l3.1-3.1zm-3.03-3.03l-3.1 3.1a7.71 7.71 0 1 0 0 13.51l3.1 3.11a12 12 0 1 1 0-19.73 M21.86 5.17a11.94 11.94 0 0 1 0 13.66l-3.1-3.1a7.68 7.68 0 0 0 0-7.46l3.1-3.1z" />
    </svg>
  );
};

Opencollective.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Opencollective.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Opencollective;
