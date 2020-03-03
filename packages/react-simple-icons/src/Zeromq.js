import React from 'react';
import PropTypes from 'prop-types';

const Zeromq = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M22.088,5.499l1.894-1.894l-3.587-3.587l-1.894,1.894C16.627,0.702,14.396,0,12,0C5.373,0,0,5.373,0,12c0,2.396,0.702,4.627,1.912,6.501l-1.894,1.894l3.587,3.587l1.894-1.894C7.373,23.298,9.604,24,12,24c6.627,0,12-5.373,12-12C24,9.604,23.298,7.373,22.088,5.499z M4.569,12c0-4.104,3.327-7.431,7.431-7.431c1.125,0,2.191,0.25,3.146,0.698l-9.88,9.88C4.819,14.191,4.569,13.125,4.569,12z M12,19.431c-1.125,0-2.191-0.25-3.146-0.698l9.88-9.88c0.447,0.956,0.698,2.022,0.698,3.146C19.431,16.104,16.104,19.431,12,19.431z" />
    </svg>
  );
};

Zeromq.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Zeromq.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Zeromq;
