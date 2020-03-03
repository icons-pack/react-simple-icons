import React from 'react';
import PropTypes from 'prop-types';

const ProtocolsDotIo = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M4.55.928c-.723.046-1.266.47-1.614 1.261a4.653 4.653 0 00-.215.6 11.006 11.006 0 00-.42 3.584c.052 1.007-.187 1.888-.6 2.797C.858 11.024.27 12.967.031 15.004c-.136 1.164.169 2.15 1.13 2.871.41.308.834.603 1.28.855 1.241.702 2.573 1.191 3.924 1.633a.825.825 0 01.297.162c1.12 1.033 2.423 1.75 3.846 2.276 1.011.373 2.005.364 3.015-.01 1.057-.391 2.089-.853 2.944-1.576.76-.642 1.612-1.011 2.527-1.334 1.307-.461 2.566-1.036 3.69-1.871.934-.695 1.413-1.596 1.298-2.778-.023-.238-.04-.476-.076-.712-.3-1.942-.888-3.802-1.705-5.58-.356-.776-.658-1.524-.441-2.403-.075-.856-.128-1.726-.233-2.588-.083-.687-.24-1.364-.574-1.982-.442-.821-1.126-1.164-2.037-1-.32.057-.642.144-.94.273-1.61.698-2.904 1.799-3.949 3.197-.101.137-.195.184-.369.182a190.37 190.37 0 00-3.328-.002c-.144.001-.241-.014-.334-.144-.623-.877-1.389-1.614-2.256-2.246-.735-.536-1.51-1-2.406-1.22a2.601 2.601 0 00-.783-.08zm.096 1.152c.087-.002.183.012.292.04.34.085.685.194.996.357 1.43.746 2.596 1.792 3.443 3.173.088.144.178.186.338.178.904-.042 1.806-.097 2.71-.103.62-.004 1.24.06 1.86.103.163.012.25-.04.336-.182.855-1.387 2.024-2.44 3.469-3.181.304-.156.64-.265.973-.348.431-.107.702.006.863.418.188.484.352.99.43 1.5.123.815.166 1.642.226 2.281-.037.648-.07 1.108-.086 1.569a.68.68 0 00.08.322 21.819 21.819 0 012.174 6.377c.073.416.077.85.064 1.273-.013.481-.324.812-.673 1.1-.873.72-1.888 1.188-2.926 1.602-.714.284-1.452.51-2.174.775-.15.055-.3.148-.418.258-1.224 1.13-2.625 1.94-4.26 2.285-.37.078-.804.014-1.174-.098-1.473-.445-2.788-1.18-3.892-2.27a.692.692 0 00-.272-.148c-1.35-.431-2.684-.905-3.931-1.588-.35-.19-.676-.42-1.014-.632-.81-.51-1.026-1.267-.893-2.166.355-2.387 1.131-4.632 2.235-6.772a.745.745 0 00.07-.375c-.106-1.522-.064-3.034.293-4.525.064-.265.162-.528.281-.774.146-.299.32-.442.58-.449zM13.867 8.8c-.354.04-.539.263-.719.72-.032.083-.06.167-.082.252-.196.782-.121 1.563-.025 2.352.108.89.498 1.492 1.367 1.832 1.379.54 2.11 1.645 2.442 3.047.08.343.148.688.228 1.068.39-.138.764-.265 1.135-.404.998-.373 1.972-.794 2.863-1.39.15-.1.224-.212.195-.393-.091-.586-.142-1.181-.273-1.758-.409-1.806-1.407-3.178-3.08-4.018-.61-.305-1.222-.614-1.861-.845a9.585 9.585 0 00-1.774-.444 1.586 1.586 0 00-.416-.02zM9.66 8.81a2.26 2.26 0 00-.264.035c-1.57.32-2.996.965-4.298 1.892-.489.348-.91.766-1.225 1.282-.727 1.193-1.073 2.5-1.152 3.886-.01.178.053.288.199.364.722.375 1.433.777 2.172 1.117.583.268 1.2.462 1.824.697.083-.39.15-.737.23-1.08.331-1.402 1.073-2.48 2.436-3.06.05-.021.093-.052.143-.069.723-.249 1.069-.77 1.185-1.516.143-.919.259-1.829-.03-2.736-.221-.7-.494-.872-1.22-.812zm2.594 7.502c-.96.045-1.653.137-2.274.505-.426.254-.559.555-.396.979.366.952.999 1.69 1.89 2.19.33.184.685.193 1.02.011.918-.499 1.554-1.252 1.928-2.22.14-.365.044-.626-.274-.864-.147-.11-.312-.219-.486-.266-.544-.146-1.096-.263-1.408-.335Z" />
    </svg>
  );
};

ProtocolsDotIo.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ProtocolsDotIo.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default ProtocolsDotIo;
