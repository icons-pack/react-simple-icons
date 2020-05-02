import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Hurriyetemlak = forwardRef(function Hurriyetemlak(
  { color = 'currentColor', size = 24, title = 'Hurriyetemlak', ...others },
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
      <path d="M24 16.085L11.994 4.091 0 16.097l3.817 3.812 8.182-8.189 8.189 8.182z" />
    </svg>
  );
});

Hurriyetemlak.propTypes = {
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

export default Hurriyetemlak;
