import React from 'react';
import PropTypes from 'prop-types';

const Adguard = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M12 0C8.519 0 4.426.828.931 2.628l-.545.279v.616c0 3.711.071 13.613 11.101 20.169L12 24l.513-.308c11.03-6.556 11.1-16.458 11.1-20.17v-.608l-.538-.282C19.622.825 15.481 0 12 0zm0 2.012c2.978 0 6.584.763 9.576 2.197-.008 3.888-.418 11.543-9.576 17.33-9.158-5.787-9.569-13.442-9.576-17.33C5.46 2.77 9.022 2.012 12 2.012zm5.035 5.565c-.26.008-.484.173-.61.299l-5.38 5.58-2.012-2.413c-.955-1.106-2.262-.251-2.564-.05l4.677 5.43 6.385-8.648a.7.7 0 00-.496-.198z" />
    </svg>
  );
};

Adguard.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Adguard.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Adguard;
