import React from 'react';
import PropTypes from 'prop-types';

const Nokia = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M1.163 13.954H.008v-3.89h1.997l2.292 2.904v-2.904h1.155v3.89H3.495L1.163 11v2.954m9.814-1.203c0 .54-.097.727-.257.906-.244.266-.6.346-1.288.346H7.46c-.686 0-1.043-.08-1.288-.346-.16-.179-.256-.365-.256-.906v-1.5c0-.54.096-.726.256-.905.245-.266.602-.347 1.288-.347h1.972c.687 0 1.044.08 1.288.347.16.179.257.365.257.906v1.499m-1.593.267c.264 0 .356-.016.42-.073.059-.053.085-.121.085-.35v-1.187c0-.229-.026-.297-.085-.35-.064-.058-.156-.073-.42-.073H7.509c-.264 0-.357.015-.42.073-.06.053-.085.121-.085.35v1.187c0 .229.026.297.085.35.063.057.156.073.42.073h1.875m3.271-2.954v3.89h-1.207v-3.89h1.207m2.039 0h1.593l-2.15 1.82 2.425 2.07h-1.705l-2.202-2.029 2.039-1.86m2.09 0h1.207v3.889h-1.207m5.808 0l-.357-.678H19.9l-.353.678h-1.333l2.139-3.89h1.5l2.139 3.89h-1.4m-2.273-1.522h1.5l-.75-1.409-.75 1.409" />
    </svg>
  );
};

Nokia.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Nokia.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Nokia;
