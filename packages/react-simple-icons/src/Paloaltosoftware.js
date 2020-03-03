import React from 'react';
import PropTypes from 'prop-types';

const Paloaltosoftware = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M1.576 14.448l6.323-6.434 1.649-1.678a3.419 3.419 0 0 1 4.825 0l1.609 1.608 6.433 6.434.84-.84c.909-.839.909-2.237.07-3.146L13.603.742c-.91-.91-2.308-.91-3.217 0l-9.65 9.65c-.91.909-.91 2.307 0 3.216zm12.028-7.273c-.91-.91-2.308-.91-3.217 0l-8.042 8.042-1.608 1.608c-.91.91-.91 2.308 0 3.217l3.216 3.217c.91.909 2.308.909 3.217 0l4.825-4.826 4.826 4.826c.909.909 2.307.909 3.216 0l3.217-3.217c.91-.839.91-2.308.07-3.217z" />
    </svg>
  );
};

Paloaltosoftware.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Paloaltosoftware.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Paloaltosoftware;
