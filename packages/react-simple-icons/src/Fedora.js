import React from 'react';
import PropTypes from 'prop-types';

const Fedora = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M12 0C5.375 0 .005 5.368 0 11.992v9.286A2.728 2.728 0 0 0 2.728 24h9.277C18.63 23.997 24 18.626 24 12c0-6.627-5.373-12-12-12zm4.595 5.577c-.379 0-.516-.073-1.072-.073a2.973 2.973 0 0 0-2.973 2.968v2.583a.42.42 0 0 0 .42.42h1.953c.728 0 1.316.58 1.316 1.31 0 .734-.594 1.312-1.33 1.312h-2.358v2.985a5.632 5.632 0 0 1-5.633 5.632 4.48 4.48 0 0 1-1.244-.168c-.637-.166-1.157-.689-1.157-1.296 0-.734.533-1.268 1.33-1.268.378 0 .516.072 1.071.072 1.64 0 2.97-1.328 2.973-2.968v-2.583a.42.42 0 0 0-.42-.419H7.518c-.727 0-1.315-.58-1.315-1.31 0-.734.594-1.312 1.33-1.312H9.89V8.477a5.632 5.632 0 0 1 5.632-5.632c.472 0 .807.053 1.244.167.637.167 1.158.69 1.158 1.296 0 .735-.533 1.269-1.33 1.269z" />
    </svg>
  );
};

Fedora.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Fedora.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Fedora;
