import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const WebcomponentsDotOrg = forwardRef(function WebcomponentsDotOrg(
  { color = 'currentColor', size = 24, ...others },
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
      <path d="M11.73 2.225l-.01.016H5.617l-5.618 9.738 5.618 9.736h12.799l.04.06 2.134-3.735.518-.893H21.1l.008-.014-.626-.75h.895l.006-.01.008.01 2.607-4.389-2.607-4.39-.003.005-.011-.019h-.945l.631-.764-2.607-4.569-.006.01-.024-.04H11.73zM9.106 6.824h6.189l-.529.764h-.024l2.398 4.015h.875l-.277.328.357.435h-.956l-2.398 4.015h.027l.523.764H9.073l-2.99-5.168 3.022-5.155z" />
    </svg>
  );
});

WebcomponentsDotOrg.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default WebcomponentsDotOrg;
