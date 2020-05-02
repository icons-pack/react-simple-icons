import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Logstash = forwardRef(function Logstash({ color = 'currentColor', size = 24, ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <path d="M12.6 7.2V24c-5.2 0-10.8-4-10.8-9.3V0h3.6c3.8 0 7.2 3.4 7.2 7.2zm2.4 6V24h7.2V13.2z" />
    </svg>
  );
});

Logstash.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Logstash;
