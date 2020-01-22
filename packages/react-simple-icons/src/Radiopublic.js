import React from 'react';
import PropTypes from 'prop-types';

const Radiopublic = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M13.938 4.073c3.256-.284 6.512-1.977 9.768-.536v19.889c-4.491-1.989-8.983 1.989-13.474 0v-3.151-.347c-3.313.27-6.625 1.987-9.938.539V.578c4.548 1.989 9.096-1.989 13.644 0zm2.48 10.797c.393-.086.784-.174 1.176-.259 1.735-.379 2.427-1.403 2.426-3.014V9c0-1.585-.447-2.59-2.556-2.135-1.176.257-2.35.543-3.527.645v12.968c.827-.072 1.654-.235 2.482-.414zm0-2.11V9.1l.467-.102c.58-.129.633.156.635.627v2.161c0 .401-.055.744-.635.872l-.466.102zm-9.887 4.35v-5.542l.522-.114c.504-.11.652.015.653.625v3.783c0 .575.094.834.224.946.828-.173 1.654-.323 2.481-.377v-.087c-.092-.15-.205-.385-.204-.944v-4.41c0-.962-.673-1.33-1.064-1.4.465-.272 1.101-.802 1.1-1.88V5.638c0-1.391-.764-2.126-2.276-1.805-1.305.272-2.612.606-3.918.718V17.52c.827-.072 1.654-.232 2.482-.409zm0-7.686V6.147c.186-.04.373-.08.56-.122.503-.11.615.041.615.599v1.76c0 .61-.185.824-.69.934l-.485.106z" />
    </svg>
  );
};

Radiopublic.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Radiopublic.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Radiopublic;
