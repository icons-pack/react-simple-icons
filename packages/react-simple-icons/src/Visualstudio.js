import React from 'react';
import PropTypes from 'prop-types';

const Visualstudio = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M17.58.07a1.5 1.5 0 0 0-1.032.392 1.5 1.5 0 0 0-.001 0 .88.88 0 0 0-.05.045L8.53 9.317 3.88 5.504l-.407-.35A1 1 0 0 0 2.45 5a1 1 0 0 0-.012.005l-1.816.75a1 1 0 0 0-.077.035 1 1 0 0 0-.047.028 1 1 0 0 0-.038.022 1 1 0 0 0-.048.034 1 1 0 0 0-.031.024 1 1 0 0 0-.043.036 1 1 0 0 0-.036.033 1 1 0 0 0-.032.035 1 1 0 0 0-.033.038 1 1 0 0 0-.035.044 1 1 0 0 0-.024.034 1 1 0 0 0-.032.051 1 1 0 0 0-.02.034 1 1 0 0 0-.024.05 1 1 0 0 0-.02.045 1 1 0 0 0-.016.044 1 1 0 0 0-.016.047 1 1 0 0 0-.015.055 1 1 0 0 0-.01.04 1 1 0 0 0-.008.054 1 1 0 0 0-.006.05 1 1 0 0 0-.004.083V17.33a1 1 0 0 0 .615.917l1.816.763a1 1 0 0 0 1.034-.163l.408-.35 4.65-3.813 7.968 8.81a1.5 1.5 0 0 0 .072.065 1.5 1.5 0 0 0 .057.05 1.5 1.5 0 0 0 .058.042 1.5 1.5 0 0 0 .063.044 1.5 1.5 0 0 0 .065.038 1.5 1.5 0 0 0 .065.036 1.5 1.5 0 0 0 .068.031 1.5 1.5 0 0 0 .07.03 1.5 1.5 0 0 0 .073.025 1.5 1.5 0 0 0 .066.02 1.5 1.5 0 0 0 .08.02 1.5 1.5 0 0 0 .068.014 1.5 1.5 0 0 0 .075.01 1.5 1.5 0 0 0 .075.007 1.5 1.5 0 0 0 .073.003 1.5 1.5 0 0 0 .077 0 1.5 1.5 0 0 0 .078-.005 1.5 1.5 0 0 0 .067-.007 1.5 1.5 0 0 0 .087-.014 1.5 1.5 0 0 0 .06-.012 1.5 1.5 0 0 0 .08-.022 1.5 1.5 0 0 0 .068-.02 1.5 1.5 0 0 0 .07-.028 1.5 1.5 0 0 0 .089-.037l4.942-2.376a1.5 1.5 0 0 0 .475-.362 1.5 1.5 0 0 0 .09-.112 1.5 1.5 0 0 0 .004-.007 1.5 1.5 0 0 0 .08-.125 1.5 1.5 0 0 0 .062-.12 1.5 1.5 0 0 0 .009-.017 1.5 1.5 0 0 0 .041-.107 1.5 1.5 0 0 0 .014-.037 1.5 1.5 0 0 0 .03-.107 1.5 1.5 0 0 0 .009-.037 1.5 1.5 0 0 0 .017-.1 1.5 1.5 0 0 0 .008-.05 1.5 1.5 0 0 0 .006-.091 1.5 1.5 0 0 0 .004-.079V3.946a1.5 1.5 0 0 0 0-.002 1.5 1.5 0 0 0 0-.032 1.5 1.5 0 0 0-.01-.15 1.5 1.5 0 0 0-.84-1.17L18.203.217a1.5 1.5 0 0 0-.621-.146zm.417 6.852v10.157l-6.195-5.078zM3.005 8.576l3.097 3.425-3.097 3.424z" />
    </svg>
  );
};

Visualstudio.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Visualstudio.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Visualstudio;
