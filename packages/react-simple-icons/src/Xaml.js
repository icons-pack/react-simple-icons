import React from 'react';
import PropTypes from 'prop-types';

const Xaml = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M6.39 1.537a.78.78 0 00-.677.393L.105 11.607a.781.781 0 000 .786l5.608 9.68a.78.78 0 00.678.39h11.218a.781.781 0 00.678-.393l5.608-9.677a.781.781 0 000-.786l-5.608-9.68a.781.781 0 00-.678-.39H6.391zm0 .418H17.56l-5.68 9.836h-6.03l4.712-8.156v-.002l.013-.026.114-.195a.132.132 0 00-.114-.197h-.256l-2.81-.002a.265.265 0 00-.229.13l-4.847 8.391a.539.539 0 00-.03.057H.482l5.592-9.652a.371.371 0 01.317-.184zm11.542.191l5.6 9.67c.032.056.05.12.05.184a.367.367 0 01-.05.184l-5.606 9.677-.002.002-5.688-9.853 5.696-9.864zM7.598 3.633h2.478l-4.63 8.021a.68.68 0 000 .682l4.642 8.033-2.48-.002-4.815-8.318a.106.106 0 010-.106l4.805-8.31zm10.328 1.869a.131.131 0 00-.113.068l-.108.19-.002.002-.015.031h-.002l-1.391 2.465a.261.261 0 000 .26l1.943 3.36a.26.26 0 010 .263l-1.927 3.338a.261.261 0 000 .26l1.4 2.45v.002l.016.028v.002l.11.191a.13.13 0 00.227.002l.112-.195.002-.002.015-.026 3.422-5.92a.525.525 0 000-.525l-3.447-5.955-.018-.031-.11-.192a.13.13 0 00-.114-.066zm.004.71l3.324 5.743a.106.106 0 01-.002.106l-3.299 5.71-1.234-2.162 1.88-3.257.003-.002a.676.676 0 00-.002-.68v-.002l-1.897-3.281 1.227-2.174zM.482 12.21h1.924a.525.525 0 00.026.049l4.857 8.396a.26.26 0 00.227.131l2.814.002h.258a.13.13 0 00.113-.195l-.113-.196v-.001l-.016-.026-4.715-8.16h6.01l5.678 9.836H6.39a.362.362 0 01-.317-.184L.482 12.21ZZ" />
    </svg>
  );
};

Xaml.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Xaml.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Xaml;
