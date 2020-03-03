import React from 'react';
import PropTypes from 'prop-types';

const Kibana = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M21.04 23.99H4.18l9.88-11.86c4.23 2.76 6.98 7.04 6.98 11.86zm0-23.95H3.08v21.55z" />
    </svg>
  );
};

Kibana.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Kibana.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Kibana;
