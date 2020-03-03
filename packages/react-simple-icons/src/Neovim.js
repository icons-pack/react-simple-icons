import React from 'react';
import PropTypes from 'prop-types';

const Neovim = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M2.902,4.998l3.864,5.754v12.151l-4.207-4.198V5.344L2.902,4.998 M2.97,4.287L2.107,5.158v13.734l5.112,5.101 v-13.38L2.97,4.287L2.97,4.287z M21.858,5.207L16.676,0v13.331l4.335,6.519c0,0,0.882-0.957,0.882-0.957L21.858,5.207z M7.215,0.001 l13.29,20.28L16.786,24L3.489,3.765L7.215,0.001z" />
    </svg>
  );
};

Neovim.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Neovim.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Neovim;
