import React from 'react';
import PropTypes from 'prop-types';

const Angularjs = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M11.964 0L.672 3.974l1.784 14.794L11.976 24l9.568-5.303 1.784-14.794zm-.027 1.258l10.265 3.5-1.663 13.232-8.602 4.76-8.469-4.697L1.939 4.822zm0 .78L4.957 17.57l2.604-.048 1.4-3.501h6.257l1.532 3.55 2.492.046zm.02 4.98l2.355 4.93H9.878Z" />
    </svg>
  );
};

Angularjs.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Angularjs.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Angularjs;
