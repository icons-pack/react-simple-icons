import React from 'react';
import PropTypes from 'prop-types';

const Stackbit = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M21.314 13.477l-9.213 5.13-9.396-5.13a.729.729 0 0 0-.993.294.729.729 0 0 0 .294.993l9.746 5.333c.22.128.497.128.717 0l9.562-5.333a.727.727 0 0 0 .276-.993.718.718 0 0 0-.993-.294zM3.845 10.075l8.256-4.67 9.195 5.314a.749.749 0 0 0 1.011-.276.749.749 0 0 0-.276-1.012L12.47 3.915a.749.749 0 0 0-.735 0L1.988 9.43c-.497.276-.497.993 0 1.288l9.746 5.516a.748.748 0 0 0 1.011-.276.749.749 0 0 0-.276-1.011zM.057 13.937v-3.678A2.258 2.258 0 0 1 1.216 8.07l9.745-5.517a2.25 2.25 0 0 1 2.28.019l9.562 5.516a2.296 2.296 0 0 1 1.14 2.17v3.678a2.288 2.288 0 0 1-1.176 2.188l-9.562 5.332a2.281 2.281 0 0 1-2.225 0l-9.746-5.332c-.81-.442-1.232-1.306-1.177-2.188z" />
    </svg>
  );
};

Stackbit.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Stackbit.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Stackbit;
