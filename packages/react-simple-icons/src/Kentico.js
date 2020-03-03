import React from 'react';
import PropTypes from 'prop-types';

const Kentico = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M0 0v25h25V0H0zm14.5 8.8l3-3s2.2 1.3.9 2.6l-2.1 2.1c-1.2 1.1-2.9-.6-1.8-1.7zm-.8-3.3v3c0 1.5-2.5 1.5-2.5 0V4.3s2.5-.6 2.5 1.2zM8.4 6.7l2.1 2.1c1.1 1.1-.6 2.8-1.7 1.7l-3-3s1.3-2.1 2.6-.8zm-2.9 4.6h3c1.5 0 1.5 2.5 0 2.5H4.3c0-.1-.6-2.5 1.2-2.5zm5 4.9l-3 3s-2.2-1.3-.9-2.6l2.1-2.1c1.2-1.1 2.9.6 1.8 1.7zm3.2 4.5s-2.5.6-2.5-1.2v-3c0-1.5 2.5-1.5 2.5 0v4.2zm-1.2-6.4c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm4.1 4l-2.1-2.1c-1.1-1.1.6-2.8 1.7-1.7l3 3s-1.3 2.1-2.6.8zm2.9-4.6h-3c-1.5 0-1.5-2.5 0-2.5h4.2c0 .1.6 2.5-1.2 2.5z" />
    </svg>
  );
};

Kentico.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Kentico.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Kentico;
