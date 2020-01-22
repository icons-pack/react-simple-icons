import React from 'react';
import PropTypes from 'prop-types';

const Apachecordova = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M18.545,0.545H5.455L0,9.273l2.182,14.182h3.886l-0.273-3.273h1.909l0.273,3.273 h8.045l0.273-3.273h1.909l-0.273,3.273h3.886L24,9.273L18.545,0.545z M18.545,18H5.455L4.364,9.273l2.182-4.364h3.506L9.818,6.545 h4.364l-0.234-1.636h3.506l2.182,4.364L18.545,18z M15.545,11.045c0.301,0,0.545,0.908,0.545,2.029 c0,1.121-0.244,2.029-0.545,2.029c-0.301,0-0.545-0.908-0.545-2.029C15,11.954,15.244,11.045,15.545,11.045z M8.659,11.215 c0.301,0,0.545,0.908,0.545,2.029c0,1.121-0.244,2.029-0.545,2.029c-0.301,0-0.545-0.908-0.545-2.029 C8.114,12.123,8.358,11.215,8.659,11.215z" />
    </svg>
  );
};

Apachecordova.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Apachecordova.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Apachecordova;
