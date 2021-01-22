import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Codeclimate = forwardRef(function Codeclimate(
  { color = 'currentColor', size = 24, title = 'Code Climate', ...others },
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
      <path d="M16.047 5.32L24 13.273l-2.707 2.711-5.246-5.246-1.844 1.852-2.715-2.711zm-5.395 5.399l2.707 2.715 2.547 2.539-2.715 2.707-5.238-5.239-4.176 4.176-1.07 1.063L0 15.973 7.953 8.02zm0 0" />
    </svg>
  );
});

Codeclimate.propTypes = {
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

export default Codeclimate;
