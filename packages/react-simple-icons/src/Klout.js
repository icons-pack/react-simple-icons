import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Klout = forwardRef(function Klout({ color = 'currentColor', size = 24, title = 'Klout', ...others }, ref) {
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
      <path d="M0 2.673v14.72h16.17L24 21.327V2.673H0zm9.827 8.42h-1.17l-2.88 4.054H2.35l3.94-5.265-3.638-5.07h3.336l2.66 3.885h1.18v2.397zm8.407 4.053l-2.88-4.053h-1.966v4.053h-2.73V4.812h2.734v3.885h1.965l2.658-3.885h3.33l-3.636 5.07 3.94 5.265h-3.416z" />
    </svg>
  );
});

Klout.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The <title> element provides an accessible, short-text description of any SVG
   */
  title: PropTypes.string,
};

export default Klout;
