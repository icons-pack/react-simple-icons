import React from 'react';
import PropTypes from 'prop-types';

const Apacheairflow = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M12.033 10.713c-.691 0-1.263.564-1.263 1.255 0 .69.572 1.262 1.263 1.262a1.258 1.258 0 000-2.517zm0 .797c.258 0 .457.2.457.458s-.2.458-.457.458c-.259 0-.458-.2-.458-.458s.199-.458.458-.458zM.65.001C.577.001.544.013.3.041.053.07-.027.364.03.673c.055.31.072.205.196.384.124.18 4.228 4.144 6.352 6.216l-3.625 3.72-.133.133-.007.008c-1.25 1.282-1.91 3.251-2.296 5.433C.13 18.748.03 21.161 0 23.35a.63.63 0 00.554.62.757.757 0 00.118 0 .608.608 0 00.384-.184h.007l6.209-6.37c4.021 3.721 4.12 5.08 9.294 6.067 2.182.386 4.595.487 6.784.517a.626.626 0 00.62-.546l.008-.008a.746.746 0 00-.008-.133.621.621 0 00-.177-.37v-.008l-6.378-6.208L21.047 13c.046-.043.089-.088.133-.133l.007-.008c1.25-1.281 1.918-3.244 2.304-5.426.385-2.182.479-4.595.509-6.783a.627.627 0 00-.546-.62L23.446.02a.668.668 0 00-.133.008.608.608 0 00-.369.178h-.007l-6.209 6.37-3.72-3.624-.133-.133-.008-.008C11.586 1.562 9.617.894 7.434.509 5.18.26 2.917.034.65 0zm.48.835c2.039.038 4.213.12 6.164.465 2.105.372 3.927 1.03 5.012 2.089h.008l.103.11c.023.023.049.053.074.082.002.003.005.004.007.008l.008.008.015.015c0 .002-.002.008 0 .008.002.003.005.004.007.008.128.176.354.52.42.664.049.101.093.208.134.325.179.519.268 1.166.206 1.985v.008c-.014.181-.038.37-.066.569-.014.095-.033.2-.052.31a10.753 10.753 0 01-.14.642c-.028.115-.056.232-.089.347v.008c-.13.468-.3.976-.51 1.52-.052.138-.103.272-.161.414-.046.111-.099.225-.148.34l-.258.051c-.875-1.655-1.831-2.8-2.688-3.455-.432-.33-.837-.54-1.225-.627h-.007c-.387-.084-.8-.027-1.07.251l.038.075.32-.239zm22.036.288c-.038 2.04-.12 4.218-.465 6.17-.372 2.105-1.031 3.928-2.09 5.013l-.11.103c-.03.026-.062.059-.096.088l-.015.016h-.007c-.174.126-.527.36-.672.428-.101.047-.21.1-.325.14h-.007c-.516.177-1.166.26-1.979.2-.183-.016-.375-.031-.576-.06l-.302-.052h-.008a10.905 10.905 0 01-.642-.14h-.007c-.117-.03-.234-.065-.347-.096a16.097 16.097 0 01-1.521-.502c-.136-.052-.279-.111-.421-.17a20.905 20.905 0 01-.317-.132c.009-.063-.079.096 0 0a.666.666 0 00-.052-.288c1.638-.87 2.78-1.814 3.433-2.665.331-.433.548-.844.635-1.233.087-.386.027-.806-.251-1.077l.007.008.11.351zM13.9 4.947l2.532 2.466.015.015.015.015c.038.038.078.11.03.332-.022.095-.146.264-.207.391-.082.166-.116.3-.274.502-.546.7-1.616 1.566-3.137 2.377.046-.107.09-.213.133-.317.06-.147.115-.294.17-.436.218-.568.4-1.103.538-1.602a11.804 11.804 0 00.244-1.063V7.62c.019-.107.043-.212.059-.324a8.97 8.97 0 00.067-.628c.05-.677-.07-1.196-.185-1.72zM7.774 7.51c1.592.72 2.634 2.424 3.277 3.617-.108-.047-.217-.089-.324-.133-.147-.06-.294-.115-.436-.17a17.265 17.265 0 00-1.595-.539H8.69c-.125-.034-.244-.067-.362-.096-.24-.059-.476-.106-.701-.148-.108-.018-.22-.034-.332-.051V9.98a10.394 10.394 0 00-.628-.067c-.68-.051-1.202.069-1.727.185l2.473-2.532.03-.03c.036-.039.11-.08.332-.03zm-1.167 3.203c.18.012.368.038.569.067h.007c.096.015.194.034.303.052.205.038.418.085.642.14l.177.044c.057.015.113.027.17.044h.007c.47.13.974.299 1.521.51.137.053.28.104.42.162.12.049.24.103.363.155l.014.266c-1.64.87-2.787 1.82-3.44 2.672-.332.433-.548.837-.635 1.225v.008c-.087.387-.027.8.251 1.07H6.97l-.188-.335-5.94 6.071c.04-2.037.114-4.208.458-6.156.372-2.105 1.031-3.928 2.09-5.012v-.008c.024-.027.053-.048.08-.074l.03-.03a1.788 1.788 0 01.089-.081h.007c.006-.004.01-.012.015-.016.171-.125.533-.367.68-.435a3.658 3.658 0 01.331-.133c.519-.18 1.166-.269 1.986-.207zm5.153.2c-.415.132-.698.42-.834.834l.44-.49zm.546.03l.18.323.146.095.405.313c-.148-.348-.372-.603-.73-.73zm-.288.517c.312 0 .554.242.554.553a.547.547 0 01-.554.554.547.547 0 01-.553-.554c0-.31.242-.554.554-.554zm-1.048.863c.14.363.381.61.746.746l-.241-.276-.203-.234zm2.06.038l-.282.116-.062.178-.284.327c.29-.142.498-.324.628-.62zm-.074.51c.106.045.213.096.318.14.147.06.292.115.435.17.566.217 1.098.394 1.595.53.128.039.253.067.369.097.24.059.476.114.701.155.107.019.22.034.332.051.216.03.426.058.628.074.68.052 1.202-.068 1.727-.184l-2.473 2.532-.015.015-.014.015c-.037.038-.115.074-.325.03h-.008c-.216-.05-.531-.204-.893-.487-.7-.547-1.567-1.618-2.377-3.137zm-1.83.088l-.134.317c-.06.147-.115.294-.17.436a17.065 17.065 0 00-.531 1.594c-.036.128-.067.251-.096.37-.06.24-.114.475-.155.7a12.379 12.379 0 00-.052.333 9.86 9.86 0 00-.073.628c-.052.68.068 1.202.184 1.727L7.567 16.59l-.015-.023-.015-.008v-.008c-.04-.04-.078-.101-.03-.317.002-.004 0-.002 0-.008.05-.216.206-.532.488-.893.546-.7 1.613-1.567 3.13-2.377zm1.04.258c.866 1.626 1.81 2.776 2.658 3.426.433.332.836.548 1.225.634h.008c.387.085.799.027 1.07-.25l-.035-.071-.304.27 6.09 5.942c-2.04-.04-4.22-.122-6.172-.467-2.105-.372-3.928-1.03-5.012-2.089h-.008l-.022-.023-.03-.03c-.008-.008-.013-.019-.022-.03l-.03-.03c-.023-.027-.053-.057-.08-.089v-.008c-.003-.004-.012-.01-.015-.015a6.316 6.316 0 01-.436-.679 3.49 3.49 0 01-.133-.332c-.18-.519-.269-1.166-.206-1.986.013-.18.037-.368.066-.568v-.008c.014-.094.033-.196.052-.303.037-.205.085-.419.14-.642v-.008l.044-.17.045-.17v-.008c.13-.47.298-.973.51-1.52.052-.137.111-.28.169-.42.047-.115.097-.231.148-.348l.28-.015z" />
    </svg>
  );
};

Apacheairflow.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Apacheairflow.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Apacheairflow;
