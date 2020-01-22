import React from 'react';
import PropTypes from 'prop-types';

const Feedly = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M13.86 1.989a2.609 2.609 0 0 0-3.726 0L.768 11.527a2.729 2.729 0 0 0 0 3.795l6.684 6.808a2.618 2.618 0 0 0 1.74.664h5.613a2.616 2.616 0 0 0 1.872-.791l6.554-6.675a2.726 2.726 0 0 0 0-3.795l-9.37-9.544zm-.26 17.422l-.935.95a.372.372 0 0 1-.268.114h-.8a.376.376 0 0 1-.247-.096l-.954-.97a.39.39 0 0 1 0-.542l1.337-1.36a.37.37 0 0 1 .531 0l1.337 1.361a.389.389 0 0 1 0 .543zm0-5.711l-3.737 3.808a.374.374 0 0 1-.268.111h-.799a.376.376 0 0 1-.25-.093l-.951-.97a.391.391 0 0 1 0-.544l4.139-4.214a.372.372 0 0 1 .531 0l1.337 1.362a.386.386 0 0 1 0 .54zm0-5.707l-6.54 6.66a.372.372 0 0 1-.268.113h-.8a.373.373 0 0 1-.249-.094L4.79 13.7a.388.388 0 0 1 0-.54l6.943-7.07a.372.372 0 0 1 .531 0l1.337 1.36a.389.389 0 0 1 0 .543z" />
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
