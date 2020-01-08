import React from 'react';
import PropTypes from 'prop-types';

const Linode = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M22 10.68a.15.15 0 00-.07-.15l-3.26-1.82a.14.14 0 00-.14 0l-2.77 1.69a.17.17 0 00-.07.13v1.45l-1.13-.74a.14.14 0 00-.15 0l-1.62 1-.07-1.64a.19.19 0 00-.07-.12L11 9.39l1.51-.78a.16.16 0 00.08-.14l-.27-6.27a.16.16 0 00-.08-.13L8 0h-.1L2.08 1.81A.16.16 0 002 2l1.27 6.23a.22.22 0 000 .08L5.1 9.69l-1.26.6a.16.16 0 00-.08.17l1 4.7a.18.18 0 000 .07L6 16.37l-.8.49a.15.15 0 00-.06.16l.75 3.64a.11.11 0 000 .07l3 3.22a.14.14 0 00.2 0l3.92-3.12a.16.16 0 00.06-.12L13 18.59l1.32 1.1a.14.14 0 00.18 0l3.14-2.51a.24.24 0 00.06-.11l.09-1.57 1 .67a.14.14 0 00.17 0l2.57-2a.14.14 0 00.05-.1zm-9.62.15l.07 1.57.12 2.78-4.23 2.87-.66-4.53zm-.35-8.42l.25 5.91-5 2.59-.9-6.32zM3.54 8.12L2.33 2.26l3.74 2.32.93 6.2-1.58-1.2zM5 15.05l-.88-4.26 3.28 2.74.6 4.38-1.68-1.62zm1.14 5.51l-.65-3.14 2.89 2.85.47 3.16zm3 3l-.49-3.33 4-2.87.14 3.28zM13 18.2v-1.08a.16.16 0 00-.05-.11l-1.13-.92 1-.7a.14.14 0 00.06-.12v-.26l1.39 1.06v3.21zm4.44-1.2l-2.86 2.28v-3.22l3.07-2.2zm1.29-1.21l-.9-.63.09-1.59a.11.11 0 000-.06.1.1 0 000-.05l-1.93-1.27V10.8l3 1.89zm2.55-1.86L19 15.74l.26-3.06L21.69 11z" />
    </svg>
  );
};

Linode.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Linode.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Linode;
