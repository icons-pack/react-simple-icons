import React from 'react';
import PropTypes from 'prop-types';

const Dtube = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M22.6 5.5a9.91 9.91 0 0 0-3.88-4.04A11.18 11.18 0 0 0 13.08.04H.18l6.91 4h5.99c1.94 0 3.41.62 4.42 1.88C18.5 7.17 19 9 19 11.43v1.27c-.01 2.34-.53 4.14-1.55 5.4-1.02 1.26-2.5 1.89-4.42 1.89H6.86L0 23.95h13.13c2.09 0 3.97-.49 5.63-1.44 1.66-.95 2.95-2.3 3.87-4.02S24 14.79 24 12.56v-1.1c0-2.22-.47-4.2-1.4-5.96zM.13 3.96v16.1L14.07 12z" />
    </svg>
  );
};

Dtube.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Dtube.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Dtube;
