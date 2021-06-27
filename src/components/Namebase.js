import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Namebase = forwardRef(function Namebase(
  { color = 'currentColor', size = 24, title = 'namebase', ...others },
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
      <path d="M23.0978 2.406c0 1.3288-1.0516 2.406-2.3488 2.406s-2.3487-1.0772-2.3487-2.406S19.4519 0 20.7491 0s2.3487 1.0772 2.3487 2.406zm-11.5089.5415C5.6868 2.9475.9022 7.8488.9022 13.8948V24h6.5764V13.8948c0-2.3254 1.8403-4.2105 4.1103-4.2105s4.1103 1.8851 4.1103 4.2105V24h6.5764V13.8948c0-6.046-4.7846-10.9473-10.6867-10.9473z" />
    </svg>
  );
});

Namebase.propTypes = {
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

export default Namebase;
