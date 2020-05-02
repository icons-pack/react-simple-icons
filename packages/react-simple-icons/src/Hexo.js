import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Hexo = forwardRef(function Hexo({ color = 'currentColor', size = 24, title = 'Hexo', ...others }, ref) {
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
      <path d="M12 .007L1.57 6.056V18.05L12 23.995l10.43-6.049V5.952L12 .007zm4.798 17.105l-.939.521-.939-.521V12.94H9.08v4.172l-.94.521-.938-.521V6.89l.939-.521.939.521v4.172h5.84V6.89l.94-.521.938.521v10.222z" />
    </svg>
  );
});

Hexo.propTypes = {
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

export default Hexo;
