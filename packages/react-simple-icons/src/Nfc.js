import React from 'react';
import PropTypes from 'prop-types';

const Nfc = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M23.96 1.98A1.89 1.89 0 0022.14.2c-1.1-.07-4.66-.12-5.69-.12 1.83 1.26 2.08 3.64 2.26 8.06.1 2.62 0 11.8 0 12.2l-.05 2.5-9.63-9.64v-3l7.66 7.65c.02-1.52.04-3.5.04-5.3 0-1.76-.03-3.35-.08-4.2-.29-4.81-.74-7.07-3.25-7.96a7.88 7.88 0 00-2.68-.35c-1 0-7.87 0-8.87.05A1.85 1.85 0 00.05 1.9c-.06.98-.07 19.17 0 20.17.05.98.8 1.72 1.8 1.78 1.1.06 4.67.07 5.7.07-1.83-1.26-2.08-3.64-2.26-8.06-.1-2.62 0-11.8 0-12.2l.05-2.5 9.63 9.64v3L7.3 6.16c-.02 1.52-.04 3.5-.04 5.3 0 1.76.03 3.35.08 4.2.29 4.81.74 7.07 3.25 7.95.77.28 1.49.34 2.68.36 1 0 7.87 0 8.86-.05a1.85 1.85 0 001.82-1.81c.05-.98.06-19.13 0-20.12Z" />
    </svg>
  );
};

Nfc.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Nfc.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Nfc;
