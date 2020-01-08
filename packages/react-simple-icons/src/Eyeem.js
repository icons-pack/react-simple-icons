import React from 'react';
import PropTypes from 'prop-types';

const Eyeem = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M3.673 9.181v-1.04H0v5.723h3.68v-1.048H1.186v-1.378h2.158v-1.017H1.186V9.18zm2.162 6.634l2.532-5.907h-1.24l-.902 2.357-.91-2.357H4.081l1.546 3.604-1.01 2.303zm6.625-3.573v-.444c0-1.232-.75-1.966-1.89-1.966-1.179 0-2.013.78-2.013 2.058 0 1.27.834 2.058 2.043 2.058.926 0 1.684-.536 1.821-1.285l-1.124-.054c-.085.275-.337.436-.727.436-.505 0-.804-.314-.827-.803zm-1.898-1.538c.505 0 .75.314.773.796H9.743c.031-.505.345-.796.82-.796zM17.04 9.18v-1.04h-3.672v5.723h3.68v-1.048h-2.495v-1.378h2.158v-1.017h-2.158V9.18zm5.46.65c-.597 0-.987.268-1.216.628-.26-.406-.697-.627-1.24-.627s-.864.206-1.04.482v-.406h-1.056v3.956h1.117v-2.196c0-.474.268-.796.711-.796.406 0 .643.283.643.788v2.204h1.117V11.53c.046-.398.291-.658.689-.658.428 0 .658.283.658.788v2.204H24v-2.426c0-1.002-.597-1.606-1.5-1.606z" />
    </svg>
  );
};

Eyeem.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Eyeem.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Eyeem;
