import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Nextdoor = forwardRef(function Nextdoor({ color = 'currentColor', size = 24, ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <path d="M23.993 9.816L12 2.473l-4.12 2.524V2.473H4.124v4.819L.004 9.816l1.961 3.202 2.16-1.315v9.826h15.749v-9.826l2.159 1.315 1.96-3.202" />
    </svg>
  );
});

Nextdoor.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Nextdoor;
