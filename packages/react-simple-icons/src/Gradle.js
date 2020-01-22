import React from 'react';
import PropTypes from 'prop-types';

const Gradle = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M22.7 4.3c-1.5-1.5-3.8-1.5-5.3-.1-.1.1-.1.2-.1.3 0 .1 0 .2.1.3l.5.5c.1.1.3.1.5 0 .4-.3.8-.4 1.3-.4 1.2 0 2.2 1 2.2 2.2 0 .6-.2 1.1-.6 1.5-3 3-7.1-5.4-16.2-1.1-.6.3-.9 1-.6 1.6v.1L6 11.9c.3.6 1.1.8 1.7.5l.7-.4c.8-.5 1.5-1 2.2-1.6.1-.1.4-.1.5 0 .2.1.2.3.1.5l-.1.1c-.7.6-1.5 1.2-2.3 1.7l-.7.3c-.3.2-.6.3-1 .3-.7 0-1.4-.4-1.7-1L3.9 9.7c-2.8 2-4.6 5.9-3.6 10.8 0 .2.2.3.4.3h1.7c.2 0 .3-.1.4-.3.2-1.4 1.4-2.3 2.8-2.1 1.1.1 2 1 2.1 2.1 0 .2.2.3.4.3h1.6c.2 0 .3-.1.4-.3.2-1.4 1.4-2.3 2.8-2.1 1.1.1 2 1 2.1 2.1 0 .2.2.3.4.3H17c.2 0 .4-.2.4-.4 0-2.3.7-4.9 2.4-6.2 5.9-4.6 4.3-8.5 2.9-9.9zm-6.2 6.9l-1.2-.6c0-.4.3-.7.7-.7.4 0 .7.3.7.7.1.3 0 .5-.2.6z" />
    </svg>
  );
};

Gradle.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Gradle.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Gradle;
