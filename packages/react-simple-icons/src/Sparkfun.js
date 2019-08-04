import React from 'react';
import PropTypes from 'prop-types';

const Sparkfun = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M17.805 3.852s.34 1.441-.746 1.64c-.754.133-1.973-.617-2.586-1.363-.758-.922-.66-1.649-.075-2.29.883-.98 2.399-.6 2.399-.6s-2.774-2.43-5.66-.438c-2.57 1.77-1.832 4.18.488 6.285 2.09 1.902.422 3.988-1.688 3.719-1.44-.184-2.03-1.344-1.687-2.055.3-.61 1.336-.984 1.336-.984s-1.191-.48-2.59.046c-1.262.473-2.297 1.512-2.215 4.122v12.078s1.301-1.602 2.832-3.235c1.711-1.84 2.492-3.082 4.25-2.937 3.328.207 5.735-1.274 7.371-3.645 3.141-4.562.68-9.66-1.43-10.343zm0 0" />
    </svg>
  );
};

Sparkfun.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Sparkfun.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Sparkfun;