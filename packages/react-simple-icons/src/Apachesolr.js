import React from 'react';
import PropTypes from 'prop-types';

const Apachesolr = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M20.74 3.797L8.919 16.585l14.866-6.842a11.695 11.695 0 0 0-3.045-5.946zM11.964 0a11.7 11.7 0 0 0-4.621.931L5.767 14.293 13.683.144C13.146.036 12.573 0 11.964 0zm11.929 10.46L9.815 18.34l13.218-1.576c.609-1.468.967-3.045.967-4.728 0-.537-.036-1.075-.107-1.576zm-5.194 11.534a12.403 12.403 0 0 0 3.797-4.155l-12.358 2.436 8.561 1.719zM14.436.251L7.558 15.188 20.346 3.367c-1.647-1.54-3.653-2.651-5.91-3.116zM13.003 24a11.838 11.838 0 0 0 3.761-.931l-6.949-.824L13.003 24zm-12-16.907A11.626 11.626 0 0 0 0 10.961l1.863 3.331-.86-7.199zm5.301-5.696a11.957 11.957 0 0 0-4.226 3.797l1.755 8.776L6.304 1.397z" />
    </svg>
  );
};

Apachesolr.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Apachesolr.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Apachesolr;
