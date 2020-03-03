import React from 'react';
import PropTypes from 'prop-types';

const Stadia = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M.202 8.668a.482.482 0 0 0-.202.39v.006c0 .064.014.128.04.19l2.298 5.204c.102.23.364.343.602.259 1.504-.536 6.713-2.233 10.083-1.318 0 0-3.381.196-6.438 2.593a.48.48 0 0 0-.142.571l1.029 2.326.396.929c.094.22.395.247.528.047.713-1.074 1.916-1.611 3.072-2.08a17.647 17.647 0 0 1 3.679-1.05 15.993 15.993 0 0 1 4.07-.167.481.481 0 0 0 .503-.335l1.038-3.317a.48.48 0 0 0-.176-.531c-1.158-.838-5.741-3.654-13.802-2.523 0 0 6.878-3.951 15.61.39a.481.481 0 0 0 .673-.288l.915-2.925A.484.484 0 0 0 24 6.902v-.014a.48.48 0 0 0-.243-.41C22.66 5.858 18.95 4 13.846 4 9.934 4 5.203 5.09.202 8.668" />
    </svg>
  );
};

Stadia.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Stadia.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Stadia;
