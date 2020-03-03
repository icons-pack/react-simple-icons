import React from 'react';
import PropTypes from 'prop-types';

const Markdown = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M22.269 19.385H1.731a1.73 1.73 0 0 1-1.73-1.73V6.345a1.73 1.73 0 0 1 1.73-1.73h20.538a1.73 1.73 0 0 1 1.73 1.73v11.308a1.73 1.73 0 0 1-1.73 1.731zm-16.5-3.462v-4.5l2.308 2.885 2.307-2.885v4.5h2.308V8.078h-2.308l-2.307 2.885-2.308-2.885H3.461v7.847zM21.231 12h-2.308V8.077h-2.307V12h-2.308l3.461 4.039z" />
    </svg>
  );
};

Markdown.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Markdown.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Markdown;
