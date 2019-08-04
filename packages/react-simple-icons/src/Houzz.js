import React from 'react';
import PropTypes from 'prop-types';

const Houzz = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M18.93 12v8L12 24v-8.002L5.07 20V3.998L12 0v8l-6.928 4L12 15.998V8l6.93-4.002V12z" />
    </svg>
  );
};

Houzz.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Houzz.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Houzz;
