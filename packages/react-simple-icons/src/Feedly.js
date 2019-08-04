import React from 'react';
import PropTypes from 'prop-types';

const Feedly = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M7.396 21.932L.62 15.108c-.825-.824-.825-2.609 0-3.39l9.709-9.752c.781-.78 2.521-.78 3.297 0l9.756 9.753c.826.825.826 2.611 0 3.391l-6.779 6.824c-.411.41-1.053.686-1.695.686H9c-.596-.001-1.19-.276-1.604-.688zm6.184-2.656c.137-.138.137-.413 0-.55l-1.328-1.328c-.138-.15-.412-.15-.549 0l-1.329 1.319c-.138.134-.138.405 0 .54l1.054 1.005h1.099l1.065-1.02-.012.034zm0-5.633c.092-.09.092-.32 0-.412l-1.42-1.409c-.09-.091-.32-.091-.412 0l-4.121 4.124c-.139.15-.139.465 0 .601l.959.96h1.102l3.893-3.855v-.009zm0-5.587c.092-.091.137-.366 0-.458l-1.375-1.374c-.09-.104-.365-.104-.502 0l-6.914 6.915c-.094.09-.14.359-.049.449l1.1 1.05h1.053l6.687-6.582z" />
    </svg>
  );
};

Feedly.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Feedly.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Feedly;
