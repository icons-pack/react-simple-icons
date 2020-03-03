import React from 'react';
import PropTypes from 'prop-types';

const Eventbrite = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M10.5 5.8c2.7-.6 5.3.5 6.8 2.5L5.6 11c.4-2.5 2.3-4.6 4.9-5.2zm6.9 9.8c-.9 1.3-2.3 2.3-3.9 2.6-2.7.6-5.3-.5-6.8-2.6L18.4 13l1.9-.4 3.7-.8c0-.8-.1-1.6-.3-2.3C22.2 3 15.8-.9 9.3.6S-1.2 8.4.3 14.7 8.2 25 14.7 23.5c3.8-.9 6.8-3.4 8.2-6.6.1-.1-5.5-1.3-5.5-1.3z" />
    </svg>
  );
};

Eventbrite.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Eventbrite.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Eventbrite;
