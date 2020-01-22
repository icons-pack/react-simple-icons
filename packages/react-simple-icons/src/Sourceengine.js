import React from 'react';
import PropTypes from 'prop-types';

const Sourceengine = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M19.865.718h-.26L7.64.786C5.169.659 2.735 1.264.63 2.475l.002.002a1.211 1.211 0 00.578 2.274c.35 0 .662-.148.883-.383a10.321 10.321 0 018.818-.462c5.275 2.165 7.805 8.22 5.64 13.495a10.283 10.283 0 01-2.495 3.613l.01.013a1.21 1.21 0 101.63 1.69 12.638 12.638 0 003.04-4.419c.049-.118 4.952-12.061 4.964-12.093A3.992 3.992 0 0021.522.998c-.55-.226-1.064-.278-1.657-.28zM6.067 6.853c-2.635 0-5.342.807-5.342 3.941 0 2.16 1.946 2.849 3.893 3.277 2.422.522 3.823.878 3.823 1.899 0 1.188-1.235 1.568-2.208 1.568-1.33 0-2.564-.594-2.588-2.066H.44c.143 3.252 2.92 4.32 5.77 4.32 2.801 0 5.603-1.044 5.603-4.273 0-2.28-1.923-2.992-3.894-3.443-1.923-.451-3.823-.617-3.823-1.828 0-.997 1.116-1.14 1.877-1.14 1.21 0 2.207.357 2.302 1.662h3.205c-.26-3.015-2.73-3.917-5.413-3.917z" />
    </svg>
  );
};

Sourceengine.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Sourceengine.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Sourceengine;
