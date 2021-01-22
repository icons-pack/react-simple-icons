import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Phpstorm = forwardRef(function Phpstorm(
  { color = 'currentColor', size = 24, title = 'PhpStorm', ...others },
  ref
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <title>{title}</title>
      <path d="M7.833 6.611v-.055c0-1-.667-1.5-1.778-1.5H4.389v3.056h1.722c1.111-.001 1.722-.668 1.722-1.501zM0 0v24h24V0H0zm2.167 3.111h4.056c2.389 0 3.833 1.389 3.833 3.445v.055c0 2.333-1.778 3.5-4.056 3.5H4.333v3H2.167v-10zM11.278 21h-9v-1.5h9V21zM18.5 10.222c0 2-1.5 3.111-3.667 3.111-1.5-.056-3-.611-4.222-1.667l1.278-1.556c.89.722 1.833 1.222 3 1.222.889 0 1.444-.333 1.444-.944v-.056c0-.555-.333-.833-2-1.277C12.333 8.555 11 8 11 6v-.056c0-1.833 1.444-3 3.5-3 1.444 0 2.723.444 3.723 1.278l-1.167 1.667c-.889-.611-1.777-1-2.611-1-.833 0-1.278.389-1.278.889v.056c0 .667.445.889 2.167 1.333 2 .556 3.167 1.278 3.167 3v.055z" />
    </svg>
  );
});

Phpstorm.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The title provides an accessible short text description to the SVG
   */
  title: PropTypes.string,
};

export default Phpstorm;
