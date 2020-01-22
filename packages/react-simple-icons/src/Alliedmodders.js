import React from 'react';
import PropTypes from 'prop-types';

const Alliedmodders = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M.602 1.077A.615.615 0 000 1.692v20.615a.615.615 0 00.615.615h8.309a.615.615 0 00.615-.615v-1.744l.647 1.94a.615.615 0 00.584.42h6.77a.615.615 0 00.585-.427l.035-.107a.615.615 0 00.61.533h4.615a.615.615 0 00.615-.615V8.155a.615.615 0 00-.447-.592L19.246 6.33a.615.615 0 00-.744.372l-1.887 4.906V6.059a.615.615 0 00-.443-.592l-3.385-.98a.615.615 0 00-.787.59v6.15l-2.809-7.48a.615.615 0 00-.408-.377l-8-2.27a.615.615 0 00-.181-.023zm.628 1.43l6.918 1.962 3.891 10.363a.615.615 0 001.191-.216v-8.72l2.155.624v8.402a.615.615 0 001.19.223l2.874-7.475 3.32.948v13.074h-3.384v-1.23h1.23a.615.615 0 00.615-.616V12.77a.615.615 0 00-1.2-.19l-2.94 9.112h-5.877L6.738 8.266a.615.615 0 00-1.199.195v11.076a.615.615 0 00.615.618H8.31v1.537H1.23zm5.54 9.747l2.224 6.674a.615.615 0 00-.07-.006H6.77zM20 16.682v2.549h-.822z" />
    </svg>
  );
};

Alliedmodders.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Alliedmodders.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Alliedmodders;
