import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Mixer = forwardRef(function Mixer({ color = 'currentColor', size = 24, title = 'Mixer', ...others }, ref) {
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
      <path d="M2.456 1.375a2.461 2.461 0 0 0-1.65.642C-.134 2.884-.21 4.348.553 5.38l4.917 6.59-4.946 6.65c-.762 1.032-.702 2.496.254 3.363a2.45 2.45 0 0 0 3.617-.344l6.904-9.28a.65.65 0 0 0 0-.763L4.423 2.361a2.432 2.432 0 0 0-1.967-.986zm19.089 0a2.432 2.432 0 0 0-1.968.986l-6.86 9.22a.65.65 0 0 0 0 .762l6.89 9.296a2.45 2.45 0 0 0 3.617.344c.956-.867 1.016-2.331.254-3.363l-4.947-6.65 4.917-6.59c.762-1.032.687-2.496-.254-3.363a2.459 2.459 0 0 0-1.65-.641z" />
    </svg>
  );
});

Mixer.propTypes = {
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

export default Mixer;
