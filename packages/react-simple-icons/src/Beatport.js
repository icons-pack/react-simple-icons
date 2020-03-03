import React from 'react';
import PropTypes from 'prop-types';

const Beatport = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M3.681 17.97a9.293 9.293 0 01-.888-7.527v-.001a.54.54 0 00-.354-.675l-1.232-.383a.54.54 0 00-.673.35l-.002-.001a11.66 11.66 0 001.115 9.453h.002a.54.54 0 00.738.182l1.105-.663a.54.54 0 00.189-.735zM24 13.22c0-1.187-.178-2.357-.53-3.48h.001l-.001-.003-.001-.004a.54.54 0 00-.674-.349l-1.23.383a.54.54 0 00-.356.674l-.001.001c.279.896.422 1.83.422 2.778a9.25 9.25 0 01-1.31 4.75.54.54 0 00.188.738l1.106.663a.54.54 0 00.74-.185A11.624 11.624 0 0024 13.22m-3.29.042c0-4.803-3.907-8.71-8.71-8.71-4.802 0-8.71 3.907-8.71 8.71 0 2.222.839 4.338 2.362 5.96a.54.54 0 00.763.022l.938-.884a.54.54 0 00.025-.76l.001-.001a6.317 6.317 0 01-1.718-4.337 6.346 6.346 0 016.34-6.34 6.347 6.347 0 016.339 6.34c0 1.616-.61 3.157-1.719 4.337l.002.002a.54.54 0 00.026.76l.94.883a.54.54 0 00.762-.023h-.001a8.676 8.676 0 002.36-5.96Z" />
    </svg>
  );
};

Beatport.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Beatport.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Beatport;
