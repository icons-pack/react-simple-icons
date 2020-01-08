import React from 'react';
import PropTypes from 'prop-types';

const ParseDotLy = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M9.623,19.131c0-0.064,0-0.123-0.023-0.191c-0.103-0.741-0.375-1.449-0.796-2.07c-0.268-0.34-0.577-0.646-0.92-0.912 c-0.101-0.078-0.189-0.041-0.193,0.082l-0.087,1.281c0,0.123-0.147,0.128-0.184,0L6.849,15.52c-0.026-0.065-0.066-0.125-0.115-0.175 c-0.05-0.05-0.109-0.09-0.175-0.117c-0.382-0.131-0.773-0.236-1.169-0.315c-0.525-0.091-1.284-0.141-1.284-0.141 c-0.129,0-0.17,0.077-0.097,0.178l0.782,1.409c0.074,0.105,0,0.205-0.11,0.123l-1.703-1.368c-0.159-0.103-0.337-0.172-0.524-0.203 c-0.187-0.031-0.378-0.024-0.562,0.021c-0.377,0.059-0.92,0.173-0.92,0.173c-0.059,0.013-0.112,0.047-0.147,0.096 c-0.037,0.047-0.055,0.105-0.051,0.164c0,0,0.041,0.547,0.087,0.912c0.005,0.186,0.049,0.369,0.128,0.537 c0.079,0.168,0.192,0.319,0.332,0.443l1.772,1.254c0.11,0.073,0.032,0.182-0.087,0.137l-1.578-0.351 c-0.12-0.046-0.189,0-0.152,0.137c0,0,0.262,0.711,0.492,1.181c0.195,0.368,0.416,0.721,0.663,1.058 c0.044,0.055,0.098,0.1,0.16,0.133c0.062,0.034,0.129,0.055,0.199,0.063l1.905,0.046c0.124,0,0.156,0.141,0.041,0.178l-1.219,0.456 c-0.12,0.036-0.129,0.128-0.028,0.205c0.357,0.252,0.743,0.461,1.15,0.62c0.72,0.231,1.483,0.295,2.232,0.187 c0.557-0.078,1.106-0.208,1.638-0.388c-0.02-0.151-0.031-0.303-0.032-0.456c0.002-0.488,0.106-0.97,0.307-1.416 c0.2-0.446,0.493-0.845,0.858-1.173 M23.217,15.388c0.002-0.059-0.016-0.117-0.051-0.164c-0.036-0.049-0.088-0.083-0.147-0.096 c0,0-0.543-0.114-0.92-0.169c-0.183-0.045-0.373-0.053-0.559-0.022c-0.186,0.031-0.364,0.099-0.522,0.2l-1.703,1.368 c-0.101,0.082-0.184,0-0.11-0.123l0.778-1.409c0.078-0.1,0.037-0.182-0.092-0.178c0,0-0.759,0.05-1.284,0.141 c-0.396,0.079-0.787,0.184-1.169,0.315c-0.065,0.027-0.125,0.067-0.175,0.117c-0.05,0.05-0.089,0.109-0.115,0.175l-0.571,1.796 c-0.037,0.119-0.179,0.114-0.184,0l-0.092-1.281c0-0.123-0.087-0.16-0.189-0.082c-0.343,0.266-0.652,0.572-0.92,0.912 c-0.42,0.615-0.693,1.316-0.796,2.052c0,0.068,0,0.128,0,0.191c0.365,0.327,0.657,0.727,0.857,1.173 c0.2,0.446,0.303,0.929,0.303,1.417c-0.001,0.152-0.012,0.305-0.032,0.456c0.534,0.179,1.084,0.309,1.643,0.388 c0.749,0.108,1.512,0.044,2.232-0.187c0.408-0.16,0.794-0.368,1.15-0.62c0.101-0.077,0.092-0.169-0.028-0.205l-1.219-0.456 c-0.115-0.036-0.083-0.173,0.041-0.178l1.901-0.046c0.071-0.006,0.14-0.027,0.203-0.06c0.063-0.034,0.117-0.08,0.161-0.136 c0.227-0.328,0.431-0.671,0.612-1.026c0.235-0.456,0.497-1.181,0.497-1.181c0.037-0.118-0.032-0.182-0.152-0.137l-1.578,0.351 c-0.124,0.046-0.198-0.064-0.092-0.137l1.785-1.254c0.14-0.124,0.253-0.275,0.332-0.443c0.079-0.169,0.123-0.351,0.128-0.537 c0.046-0.378,0.087-0.912,0.087-0.912 M18.229,9.429c0-0.196-0.129-0.269-0.304-0.16l-1.841,0.994c-0.17,0.109-0.207-0.1-0.083-0.26 l1.758-2.325c0.064-0.091,0.107-0.195,0.126-0.305c0.018-0.11,0.012-0.222-0.02-0.329c-0.23-0.627-0.505-1.236-0.824-1.824 c-0.321-0.516-0.678-1.01-1.068-1.477c-0.124-0.155-0.276-0.128-0.341,0.059l-0.86,2.129c-0.064,0.187-0.226,0.182-0.221,0 l0.101-3.342c-0.002-0.237-0.094-0.465-0.258-0.638c0,0-0.511-0.511-0.92-0.884c-0.409-0.374-1.173-0.966-1.173-0.966 C12.22,0.036,12.117,0,12.012,0c-0.106,0-0.208,0.036-0.29,0.102c0,0-0.722,0.561-1.192,0.966c-0.469,0.406-0.92,0.88-0.92,0.88 c-0.166,0.166-0.264,0.387-0.276,0.62L9.439,5.91c0,0.201-0.156,0.205-0.226,0l-0.86-2.106c-0.06-0.187-0.216-0.214-0.341-0.055 C7.601,4.245,7.227,4.771,6.895,5.322C6.592,5.877,6.33,6.453,6.112,7.045C6.083,7.15,6.076,7.261,6.094,7.368 c0.017,0.108,0.058,0.211,0.12,0.301l1.767,2.334c0.124,0.16,0.087,0.369-0.087,0.26L6.052,9.27C5.882,9.16,5.74,9.233,5.744,9.429 c0.015,0.645,0.12,1.285,0.313,1.901c0.435,1.115,1.13,2.111,2.029,2.909c1.182,1.209,2.14,2.615,2.83,4.153 c0.702-0.225,1.457-0.225,2.158,0c0.688-1.534,1.639-2.938,2.812-4.149c0.823-0.731,1.479-1.628,1.924-2.63 c0.253-0.701,0.394-1.436,0.419-2.179 M14.308,21.721c0,0.451-0.135,0.892-0.388,1.266c-0.253,0.375-0.612,0.667-1.033,0.84 c-0.42,0.173-0.883,0.218-1.329,0.13c-0.446-0.088-0.856-0.305-1.178-0.624c-0.322-0.319-0.541-0.725-0.63-1.167 c-0.089-0.442-0.043-0.9,0.131-1.317c0.174-0.417,0.469-0.773,0.847-1.023c0.378-0.25,0.823-0.384,1.278-0.384 c0.61,0,1.195,0.24,1.627,0.668C14.066,20.536,14.308,21.116,14.308,21.721z" />
    </svg>
  );
};

ParseDotLy.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ParseDotLy.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default ParseDotLy;
