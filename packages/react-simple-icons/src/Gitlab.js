import React from 'react';
import PropTypes from 'prop-types';

const Gitlab = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M4.844.904a1.007 1.007 0 00-.955.692l-2.53 7.783c0 .007-.005.012-.007.02L.07 13.335a1.437 1.437 0 00.522 1.607l11.072 8.045a.566.566 0 00.67-.004l11.074-8.04a1.436 1.436 0 00.522-1.61l-1.26-3.867a.547.547 0 00-.031-.104l-2.526-7.775a1.004 1.004 0 00-.957-.684.987.987 0 00-.949.69l-2.406 7.408H8.203l-2.41-7.408a.987.987 0 00-.943-.69h-.006zm-.006 1.42l2.174 6.678H2.674l2.164-6.678zm14.328 0l2.168 6.678h-4.342l2.174-6.678zm-10.594 7.81h6.862l-2.15 6.618L12 20.693 8.572 10.135zm-5.515.005h4.322l3.086 9.5-7.408-9.5zm13.568 0h4.326l-6.703 8.588-.709.914 2.959-9.108.127-.394zM2.1 10.762l6.978 8.947-7.818-5.682a.305.305 0 01-.112-.341l.952-2.924zm19.8 0l.952 2.922a.305.305 0 01-.11.341v.002l-7.82 5.68.025-.035 6.953-8.91Z" />
    </svg>
  );
};

Gitlab.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Gitlab.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Gitlab;
