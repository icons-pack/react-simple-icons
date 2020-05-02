import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Commonworkflowlanguage = forwardRef(function Commonworkflowlanguage(
  { color = 'currentColor', size = 24, ...others },
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
      <path d="M12.063 9.205l-3.565 3.568 3.518 3.512 1.545-1.545-1.975-1.967 2.023-2.023-1.546-1.545zM13.606 22.423L11.6 20.375l3.786-3.815-1.559-1.573-5.33 5.403.115.114-.015.008 3.456 3.484zm1.896-13.565l-3.685-3.541 3.685-3.722L13.936 0 8.598 5.352l.108.101v.007l5.252 4.943z" />
    </svg>
  );
});

Commonworkflowlanguage.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Commonworkflowlanguage;
