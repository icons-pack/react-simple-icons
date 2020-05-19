import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Azurefunctions = forwardRef(function Azurefunctions(
  { color = 'currentColor', size = 24, title = 'Azure Functions', ...others },
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
      <path d="M17.515 5.106c-.205-.204-.612-.204-.817 0-.102.103-.204.256-.204.409 0 .153.05.306.204.408l5.412 5.362a.69.69 0 0 1 0 .868l-5.566 5.515a.693.693 0 0 0 0 .868c.255.204.614.204.817 0l6.485-6.383a.69.69 0 0 0 0-.868l-6.331-6.179zM1.992 12.153a.69.69 0 0 1 0-.868l5.31-5.362c.102-.102.204-.255.204-.408a.463.463 0 0 0-.204-.409c-.205-.204-.612-.204-.817 0L.154 11.285a.69.69 0 0 0 0 .868l6.433 6.383c.255.204.614.204.817 0a.69.69 0 0 0 0-.868l-5.412-5.515zm5.923 10.264L17.617 8.63h-4.699l4.597-7.047H10.67L6.997 12.051l4.493.051-3.574 10.315z" />
    </svg>
  );
});

Azurefunctions.propTypes = {
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

export default Azurefunctions;
