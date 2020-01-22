import React from 'react';
import PropTypes from 'prop-types';

const Indeed = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M14.822 10.308a3.018 3.018 0 111.32-4.038 3.006 3.006 0 01-1.32 4.044zM11.6.572c2.47-.901 5.294-.852 7.408.982a3.587 3.587 0 011.023 1.37c.213.69-.749-.07-.88-.168a9.407 9.407 0 00-2.15-1.095C12.837.386 8.897 2.707 6.463 6.316a19.505 19.505 0 00-2.248 5.126 2.918 2.918 0 01-.213.642c-.107.204-.049-.547-.049-.572a15.821 15.821 0 01.43-2.239C5.511 5.34 8.01 2.065 11.6.565zm.037 20.993v-8.763c.249.025.486.037.736.037a6.167 6.167 0 003.219-.895v9.62c0 .822-.15 1.43-.52 1.826A1.874 1.874 0 0113.62 24a1.825 1.825 0 01-1.427-.609c-.368-.404-.56-1.013-.56-1.825z" />
    </svg>
  );
};

Indeed.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Indeed.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Indeed;
