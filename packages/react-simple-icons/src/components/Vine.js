import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Vine = forwardRef(function Vine({ color = 'currentColor', size = 24, title = 'Vine', ...others }, ref) {
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
      <path d="M22.521 11.922c-.618.143-1.217.206-1.758.206-3.028 0-5.361-2.116-5.361-5.794 0-1.801.706-2.731 1.696-2.731.946 0 1.562.841 1.562 2.552 0 .975-.256 2.041-.45 2.672 0 0 .93 1.636 3.481 1.125.54-1.201.842-2.762.842-4.127C22.533 2.146 20.657 0 17.219 0c-3.543-.017-5.615 2.7-5.615 6.288 0 3.55 1.659 6.597 4.395 7.985-1.15 2.301-2.614 4.328-4.142 5.856-2.769-3.351-5.273-7.82-6.302-16.541H1.467c1.889 14.526 7.517 19.149 9.004 20.035.84.504 1.566.48 2.336.049 1.215-.688 4.848-4.315 6.859-8.563.84-.003 1.861-.1 2.867-.328v-2.865l-.012.006z" />
    </svg>
  );
});

Vine.propTypes = {
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

export default Vine;