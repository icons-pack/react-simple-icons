import React from 'react';
import PropTypes from 'prop-types';

const Microsoftteams = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M9.254 5.596h2.364c.61 0 1.103.494 1.103 1.104v1.582a3.496 3.496 0 1 0-3.467-2.686zm11.048 2.688h.002a2.404 2.404 0 1 0 .004-4.808 2.404 2.404 0 0 0-.006 4.808zm-8.084 9.033V7.12c0-.563-.456-1.02-1.019-1.021H1a1.021 1.021 0 0 0-1.018 1.02v10.199a1.02 1.02 0 0 0 1.019 1.019h10.2a1.02 1.02 0 0 0 1.018-1.02zm-3.492-7.49H6.73v5.693H5.46V9.826H3.474V8.721h5.252zm14.287-.231H12.722v8.14c0 .61-.495 1.104-1.104 1.104H7.4a6.122 6.122 0 0 0 7.946 3.437 6.122 6.122 0 0 0 3.26-3.034 3.684 3.684 0 0 0 1.684.405h.027a3.701 3.701 0 0 0 3.701-3.701v-5.346c0-.555-.45-1.005-1.006-1.005z" />
    </svg>
  );
};

Microsoftteams.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Microsoftteams.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Microsoftteams;
