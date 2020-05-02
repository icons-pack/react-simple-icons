import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bitbucket = forwardRef(function Bitbucket(
  { color = 'currentColor', size = 24, title = 'Bitbucket', ...others },
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
      <path d="M.778 1.211c-.424-.006-.772.334-.778.758 0 .045.002.09.01.134l3.263 19.811c.084.499.515.867 1.022.872H19.95c.382.004.708-.271.77-.646l3.27-20.03c.068-.418-.216-.813-.635-.881-.045-.008-.089-.011-.133-.01L.778 1.211zM14.52 15.528H9.522L8.17 8.464h7.561l-1.211 7.064z" />
    </svg>
  );
});

Bitbucket.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The <title> element provides an accessible, short-text description of any SVG
   */
  title: PropTypes.string,
};

export default Bitbucket;
