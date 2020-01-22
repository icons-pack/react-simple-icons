import React from 'react';
import PropTypes from 'prop-types';

const Asciidoctor = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M18.07,0H5.93A5.94,5.94,0,0,0,0,5.93V18.07A5.94,5.94,0,0,0,5.93,24H18.07A5.94,5.94,0,0,0,24,18.07V5.93A5.94,5.94,0,0,0,18.07,0ZM10.71,15.4H8.81v0L7.2,19.28h0a.5.5,0,0,1-.66.27.51.51,0,0,1-.27-.67L7.72,15.4H4.85a.5.5,0,0,1-.5-.51.52.52,0,0,1,.52-.5h5.86a.5.5,0,0,1,.49.52A.49.49,0,0,1,10.71,15.4Zm7.92,4.17a.51.51,0,0,1-.66-.29l-5.35-13L10.23,12H11.8a.5.5,0,0,1,.49.52.49.49,0,0,1-.51.49H5.92a.5.5,0,0,1-.5-.51.52.52,0,0,1,.52-.5h3.2l3-7.27a.49.49,0,0,1,.45-.31.52.52,0,0,1,.48.31L18.91,18.9h0A.51.51,0,0,1,18.63,19.57Z" />
    </svg>
  );
};

Asciidoctor.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Asciidoctor.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Asciidoctor;
