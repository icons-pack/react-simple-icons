import React from 'react';
import PropTypes from 'prop-types';

const Jetbrains = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M0 0h24v24H0V0zm2.1 21h9v-1.5h-9V21zM3.3 6.9h.3c.7-.1 1.2-.7 1.2-1.5V3H3.7v2.5c0 .4-.1.5-.4.5-.3 0-.5-.1-.6-.3l-.7.6c.3.5.8.7 1.3.6zm5 0V6H6.2v-.6H8v-.9H6.2v-.6h2.1V3H5.1v4h3.2zm1.3 0h1.1v-3h1.2V3H8.5v.9h1.2v3zm-4 3.8c0-.5-.3-.9-.8-.9.4-.1.6-.5.6-.9 0-.2-.1-.5-.2-.7-.3-.3-.7-.4-1.1-.4h-2v3.9h2c.9 0 1.5-.4 1.5-1zm-2.5-2h.7c.3 0 .5.1.5.3 0 .3-.2.4-.5.4h-.7v-.7zm0 2.1v-.7h.8c.4 0 .6.1.5.3 0 .2-.2.4-.5.4h-.8zm7.4-3L9 11.3l-.6-.9c.5-.2.8-.7.8-1.2 0-.3-.1-.7-.3-.9-.4-.4-.9-.5-1.3-.5H5.7v3.9h1.1v-1.2h.5l.8 1.2H9.9l.3-.7h1.5l.3.7h1.2l-1.6-4h-1.1zm-3 1.9h-.7v-.9h.7c.3 0 .6.1.6.5 0 .2-.2.4-.6.4zm3.9.5h-.8l.4-1.1.4 1.1zm1.9 1.5h1.1V7.8h-1.1v3.9zm4-1.8l-1.6-2.1h-1v3.9h1.1V9.6l1.7 2.2h.9v-4h-1.1v2.1zm3.1-.6c-.5-.1-.7-.2-.7-.4 0-.1.1-.2.4-.2.4 0 .8.2 1.1.4l.6-.8c-.5-.4-1-.5-1.6-.5-.9 0-1.5.6-1.5 1.3 0 .8.6 1 1.5 1.2.5.1.7.2.7.4s-.2.3-.5.3c-.5 0-.9-.2-1.3-.5l-.6.7c.5.4 1.2.6 1.8.6 1 0 1.6-.5 1.6-1.3 0-.7-.6-1-1.5-1.2z" />
    </svg>
  );
};

Jetbrains.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Jetbrains.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Jetbrains;
