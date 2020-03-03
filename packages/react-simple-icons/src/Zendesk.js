import React from 'react';
import PropTypes from 'prop-types';

const Zendesk = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M11.085 21.095H0L11.085 7.712v13.383zm12.915 0H12.915c0-3.063 2.479-5.543 5.543-5.543 3.063 0 5.542 2.482 5.542 5.543zm-11.085-4.804V2.905H24L12.915 16.291zm-1.83-13.386c0 3.061-2.481 5.544-5.543 5.544C2.482 8.449 0 5.968 0 2.907h11.085v-.002z" />
    </svg>
  );
};

Zendesk.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Zendesk.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Zendesk;
