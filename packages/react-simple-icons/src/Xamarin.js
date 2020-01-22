import React from 'react';
import PropTypes from 'prop-types';

const Xamarin = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M7.137 1.422c-.891 0-1.576.275-2.055 1.1-.479.821-4.389 7.61-4.8 8.226-.413.617-.413 1.374.273 2.607.686 1.234 4.115 7.269 4.527 8.024.412.755 1.028 1.2 2.055 1.2h9.73c1.03 0 1.647-.448 2.057-1.2.412-.755 3.84-6.787 4.525-8.024.681-1.233.681-1.99.272-2.607-.412-.617-4.32-7.402-4.801-8.227-.479-.821-1.164-1.1-2.055-1.1H7.137zm-.45 5.074h2.297l3.028 5.307 3.025-5.307h2.299l-3.086 5.502 3.086 5.502h-2.264l-3.06-5.307-3.06 5.307H6.687l3.083-5.502-3.084-5.502Z" />
    </svg>
  );
};

Xamarin.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Xamarin.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Xamarin;
