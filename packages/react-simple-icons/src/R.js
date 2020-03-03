import React from 'react';
import PropTypes from 'prop-types';

const R = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M12 18.82c-6.627 0-12-3.598-12-8.037s5.373-8.037 12-8.037 12 3.599 12 8.037-5.373 8.037-12 8.037zm1.837-12.932c-5.038 0-9.121 2.46-9.121 5.495s4.083 5.494 9.12 5.494 8.756-1.682 8.756-5.494-3.718-5.495-8.755-5.495zM18.275 15.194a9.038 9.038 0 0 1 1.149.433 2.221 2.221 0 0 1 .582.416 1.573 1.573 0 0 1 .266.383l2.863 4.826-4.627.002-2.163-4.063a5.229 5.229 0 0 0-.716-.982.753.753 0 0 0-.549-.25h-1.099v5.292l-4.093.001V7.737h8.221s3.744.067 3.744 3.63a3.822 3.822 0 0 1-3.578 3.827zm-1.78-4.526l-2.479-.001v2.298h2.479a1.134 1.134 0 0 0 1.148-1.17 1.07 1.07 0 0 0-1.148-1.127z" />
    </svg>
  );
};

R.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

R.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default R;
