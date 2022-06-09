import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Popos = forwardRef(function Popos({ color = 'currentColor', size = 24, title = 'popos', ...others }, ref) {
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
      <path d="M15.724 11.253c-.776 1.366-.932 1.5-1.153 1.411-.261-.104-.171-1.472.067-3.134.067-.464.183-.684.312-.796.186-.158.524-.165.752-.131.263.038.514.16.704.344.168.163.187.33.13.546-.094.344-.256.674-.411.996-.036.079-.358.689-.401.764zm-1.41 2.034a.57.57 0 0 0-.382.411.53.53 0 0 0 .146.52.451.451 0 0 0 .543.055.484.484 0 0 0 .208-.309c.08-.336-.093-.794-.514-.677zm-5.01-1.239c.154.656.138 1.377.006 1.896-.123.49-.458.93-.989 1.076-.466.13-1.009.035-1.341-.285-.548-.525-.868-1.758-.725-2.653.115-.718.503-1.638 1.352-1.678a1.11 1.11 0 0 1 .163.003c.866.078 1.34.808 1.534 1.641zm-1.153.35a.807.807 0 0 0-.205-.333c-.344-.314-.688.013-.748.386-.046.291.021.63.203.865a.588.588 0 0 0 .336.226.32.32 0 0 0 .144-.006c.162-.046.255-.215.298-.378a1.296 1.296 0 0 0-.028-.76zm4.8.132c-.333.508-1.34.876-1.772.844v.066c-.002 1.212.12 2.14-.413 2.25-.432.087-.418-.292-.45-.61-.129-1.235-.246-3.285-.296-4.526.035-.533.392-.86.764-.94.573-.123 1.185-.088 1.692.226 1.003.62 1.083 1.76.475 2.69zm-1.042-1.266c-.077-.24-.315-.584-.602-.541-.062.01-.165.038-.194.099-.069.142-.064 1.047.056 1.425.02.062.062.122.125.144.227.083.432-.195.525-.363a.972.972 0 0 0 .09-.764zM5.52 9.69c.135.61.107 1.234-.081 1.635-.376.795-1.001 1.427-1.865 1.74.248.647.5 1.288.748 1.935.138.35.269.732.149 1.076-.125.352-.612.45-.965.075-.68-.724-2.98-5.308-3.15-5.652-.145-.297-.36-.614-.355-.957.011-.516.808-1.037 1.191-1.305.535-.373 1.153-.628 1.814-.63.516 0 .956.142 1.347.392A2.698 2.698 0 0 1 5.52 9.69zm-1.833.763A2.533 2.533 0 0 0 2.864 9.2a.883.883 0 0 0-.277-.168c-.717-.235-.407.964-.29 1.266.162.424.407.96.735 1.28.072.07.157.134.255.153.149.03.287-.074.362-.195a.845.845 0 0 0 .1-.338 1.999 1.999 0 0 0-.063-.745zm18.128 5.574zm1.046-1.318c-.355-.05-.556-.117-.556-.355 0-.243.31-.379.6-.383.133-.003.308.02.478.101l.027.355h.421c0-.216.003-.344.003-.56-.328-.263-.586-.32-.949-.312-.45 0-1.058.267-1.058.804 0 .602.432.733.97.788.314.032.705.093.716.391 0 .328-.35.413-.687.413a1.21 1.21 0 0 1-.544-.142l-.03-.367h-.435c.003.076.001.51 0 .586.328.286.587.363 1.002.362.544 0 1.178-.178 1.182-.853-.002-.62-.561-.75-1.14-.828zm-1.045 1.318c0 .017 0 .015 0 0zm-.398-1.046c-.003.703-.432 1.406-1.378 1.406s-1.386-.692-1.386-1.398c0-.88.613-1.425 1.406-1.425.918.008 1.366.69 1.358 1.417zm-.478 0c.008-.475-.243-.962-.88-.973-.595 0-.928.413-.93.977 0 .49.273.95.918.95s.892-.499.892-.955zm-3.096.934H15.27a.223.223 0 0 0-.223.223v.02c0 .122.099.222.223.222h2.573a.223.223 0 0 0 .223-.223v-.019a.222.222 0 0 0-.223-.223z" />
    </svg>
  );
});

Popos.propTypes = {
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

export default Popos;
