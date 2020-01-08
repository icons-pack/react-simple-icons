import React from 'react';
import PropTypes from 'prop-types';

const Microstrategy = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M9.103 2.596h5.811v18.808h-5.81zm-9.072 0h5.81v18.808H.032zm18.127 0v18.806h5.811V8.339z" />
    </svg>
  );
};

Microstrategy.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Microstrategy.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Microstrategy;
