import React from 'react';
import PropTypes from 'prop-types';

const Manageiq = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M12.096.1l-.001.001A11.547 11.547 0 00.538 11.658c0 2.069.548 4.005 1.496 5.683l2.869-2.867a7.676 7.676 0 01-.54-2.816c0-4.261 3.47-7.73 7.732-7.73 4.261 0 7.732 3.469 7.732 7.73 0 4.262-3.47 7.732-7.732 7.732a7.67 7.67 0 01-2.6-.459L6.597 21.83a11.514 11.514 0 005.499 1.388c2.316 0 4.468-.686 6.275-1.856l2.393 2.392L24 20.512l-2.349-2.349a11.51 11.51 0 002-6.505C23.651 5.368 18.644.26 12.393.1c-.08-.003-.18 0-.297 0zm-.001 9.34c-1.226 0-2.215.991-2.215 2.217 0 1.225.99 2.216 2.215 2.216a2.215 2.215 0 100-4.432zm-4.241 3.368l-.214.214L0 20.662l3.239 3.24 7.855-7.856z" />
    </svg>
  );
};

Manageiq.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Manageiq.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Manageiq;
