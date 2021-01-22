import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Arkecosystem = forwardRef(function Arkecosystem(
  { color = 'currentColor', size = 24, title = 'ARK Ecosystem', ...others },
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
      <path d="M1.8 0C.806 0 0 .805 0 1.8v20.4c0 .995.805 1.8 1.8 1.8h20.4c.995 0 1.8-.805 1.8-1.8V1.8c0-.995-.805-1.8-1.8-1.8H1.8zm10.223 4.39l9.29 15.098-9.29-9.82-9.351 9.82 9.351-15.097zm0 7.583l1.633 1.691h-3.285l1.652-1.691zM9.31 14.762h5.41l1.496 1.574H7.813l1.496-1.574z" />
    </svg>
  );
});

Arkecosystem.propTypes = {
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

export default Arkecosystem;
