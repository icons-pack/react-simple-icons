import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Sennheiser = forwardRef(function Sennheiser(
  { color = 'currentColor', size = 24, title = 'Sennheiser', ...others },
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
      <path d="M0 3v18h24V3zm13.209 1.659c-1.428.548-2.799 1.757-3.905 4.182-.321.703-.925 2.062-1.2 2.67-2.224 4.882-3.364 5.932-6.72 5.932V4.35H13.15c.184-.011.235.25.06.309zm9.428 1.894V19.65H10.851c-.181.005-.227-.25-.055-.309 1.427-.548 2.798-1.757 3.904-4.182.321-.703.926-2.062 1.2-2.67 2.22-4.882 3.36-5.932 6.716-5.932z" />
    </svg>
  );
});

Sennheiser.propTypes = {
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

export default Sennheiser;
