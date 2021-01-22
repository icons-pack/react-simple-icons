import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Cirrusci = forwardRef(function Cirrusci(
  { color = 'currentColor', size = 24, title = 'Cirrus CI', ...others },
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
      <path d="M19.422.453a1.113 1.113 0 0 0-1.113 1.115 1.113 1.113 0 0 0 1.112 1.114c1.31 0 2.35 1.042 2.35 2.363 0 1.32-1.04 2.363-2.35 2.363H1.112A1.113 1.113 0 0 0 0 8.52a1.113 1.113 0 0 0 1.113 1.117h18.31c1.308 0 2.35 1.042 2.35 2.363 0 1.32-1.042 2.363-2.35 2.363H1.112A1.113 1.113 0 0 0 0 15.48a1.113 1.113 0 0 0 1.113 1.112h18.31c1.308 0 2.35 1.042 2.35 2.363 0 1.32-1.042 2.363-2.35 2.363H1.112A1.113 1.113 0 0 0 0 22.432a1.113 1.113 0 0 0 1.113 1.115h18.31a1.113 1.113 0 0 0 .206-.022c2.42-.112 4.37-2.12 4.37-4.57 0-1.393-.642-2.634-1.63-3.478C23.356 14.632 24 13.393 24 12c0-1.393-.643-2.632-1.63-3.477C23.357 7.68 24 6.438 24 5.045c0-2.52-2.06-4.592-4.578-4.592z" />
    </svg>
  );
});

Cirrusci.propTypes = {
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

export default Cirrusci;
