import React from 'react';
import PropTypes from 'prop-types';

const Skillshare = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M10.542 23.91c-2.14-.278-4.344-1.196-5.95-2.48C.98 18.545-.662 13.994.276 9.468c.405-1.952 1.45-4.008 2.79-5.487a11.637 11.637 0 0 1 3.509-2.688C8.338.398 10.027-.005 12.019-.005c1.432 0 2.579.187 3.897.636a12.012 12.012 0 0 1 7.458 7.458c.703 2.065.834 4.26.383 6.435-.357 1.72-1.283 3.65-2.425 5.05-.47.577-1.545 1.608-2.113 2.028a12.203 12.203 0 0 1-5.782 2.31c-.615.076-2.298.074-2.895-.003zm3.27-1.004a11.17 11.17 0 0 0 7.254-4.533c2.027-2.851 2.571-6.67 1.425-10.001-.27-.784-.937-2.086-1.424-2.775-.544-.77-1.888-2.115-2.659-2.66-.75-.529-2.031-1.174-2.902-1.462a11.065 11.065 0 0 0-9.498 1.212 11.498 11.498 0 0 0-3.29 3.288 11.068 11.068 0 0 0-1.21 9.498c.287.871.933 2.152 1.462 2.902.545.771 1.889 2.116 2.66 2.66.689.486 1.99 1.154 2.774 1.424 1.725.593 3.573.746 5.409.447zm-4.155-4.023a4.223 4.223 0 0 1-1.584-.58c-.431-.277-3.706-3.482-3.866-3.784-.182-.345.137-.97.594-1.16l.215-.09-.66-.673c-.363-.37-.707-.763-.763-.874-.128-.25-.134-.784-.011-1.022.05-.098.17-.245.267-.327.16-.136.174-.18.157-.516-.016-.3.01-.415.14-.639.187-.318.574-.536.953-.537.208 0 .265-.03.353-.185.234-.41.908-.558 1.42-.31l.276.133.139-.13c.186-.175.56-.326.807-.326.492 0 1.187.566 1.187.966 0 .475-.434.557-.862.163-.288-.265-.43-.293-.547-.107-.058.092.08.258.922 1.106.838.843.99 1.026.99 1.186a.49.49 0 0 1-.473.463c-.152 0-.402-.22-1.554-1.368-1.174-1.17-1.39-1.358-1.483-1.3-.253.16-.168.277 1.207 1.656.747.75 1.36 1.415 1.36 1.476 0 .132-.117.367-.215.432a.61.61 0 0 1-.255.047c-.16.001-.406-.218-1.716-1.524s-1.546-1.516-1.64-1.457c-.256.162-.172.275 1.326 1.78.814.817 1.498 1.548 1.52 1.625.042.14-.052.388-.179.473a.622.622 0 0 1-.259.048c-.163 0-.365-.176-1.448-1.26-1.04-1.042-1.285-1.258-1.415-1.244-.377.043-.244.212 1.693 2.153 1.679 1.682 1.895 1.921 1.895 2.096 0 .139-.05.237-.166.328-.302.238-.42.183-1.177-.55-.387-.373-.787-.732-.89-.796-.191-.12-.675-.169-.767-.076-.03.029.685.782 1.586 1.675 1.503 1.488 1.678 1.641 2.119 1.853.85.41 1.768.413 2.619.008 1.263-.6 1.962-2.064 1.618-3.388-.172-.659-.386-.977-1.256-1.869-1-1.025-1.23-1.306-1.474-1.797-.273-.55-.393-1.085-.393-1.756 0-.721.076-1.05.396-1.724.306-.646.94-1.32 1.57-1.67 1.236-.685 2.86-.628 4.04.142.235.153 1.082.949 2.136 2.006 1.567 1.572 1.747 1.773 1.747 1.956 0 .425-.348.898-.733.994-.148.038-.118.08.538.745.383.387.739.808.791.934.186.443.104.874-.232 1.222-.174.18-.195.244-.2.603-.006.317-.04.448-.163.629-.206.3-.547.486-.891.487-.242 0-.291.026-.41.21-.273.421-.986.568-1.446.297l-.23-.137-.165.157c-.365.348-.95.395-1.396.112-.359-.228-.625-.543-.625-.742 0-.175.256-.464.41-.464.148 0 .35.115.575.328.227.214.421.213.452-.005.017-.117-.17-.34-.928-1.103-.797-.803-.95-.986-.949-1.143a.61.61 0 0 1 .048-.255c.084-.127.325-.218.474-.18.081.02.74.63 1.464 1.354.725.725 1.363 1.318 1.42 1.318.161 0 .264-.16.19-.295-.035-.062-.646-.694-1.358-1.404-1.115-1.11-1.294-1.316-1.293-1.479a.61.61 0 0 1 .047-.259c.065-.097.3-.214.432-.214.062 0 .795.682 1.633 1.517 1.539 1.534 1.652 1.62 1.813 1.364.06-.094-.15-.33-1.456-1.64-1.349-1.352-1.526-1.553-1.526-1.729 0-.124.052-.248.138-.327.288-.269.371-.213 1.758 1.167 1.313 1.308 1.432 1.394 1.59 1.145.058-.094-.207-.386-1.835-2.019-1.774-1.78-1.903-1.925-1.903-2.132 0-.31.18-.46.527-.437.064.004.437.319.827.7.39.38.81.735.935.787.245.102.53.12.654.042.117-.075-3.127-3.267-3.546-3.489a3.012 3.012 0 0 0-4.163 1.383c-.201.434-.23.56-.255 1.12-.024.527-.006.693.107 1.027.202.597.381.843 1.29 1.773.984 1.008 1.172 1.241 1.423 1.778.702 1.501.404 3.233-.756 4.392-.884.884-2.084 1.3-3.276 1.136z" />
    </svg>
  );
};

Skillshare.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Skillshare.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Skillshare;
