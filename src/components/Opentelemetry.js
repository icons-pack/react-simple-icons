import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Opentelemetry = forwardRef(function Opentelemetry(
  { color = 'currentColor', size = 24, title = 'opentelemetry', ...others },
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
      <title>{title}</title>
      <path d="M12.6974 13.1173c-1.0224 1.0224-1.0224 2.68 0 3.7024 1.0224 1.0224 2.68 1.0224 3.7024 0 1.0224-1.0223 1.0224-2.68 0-3.7024-1.0223-1.0223-2.68-1.0223-3.7024 0zm2.7677 2.7701c-.5063.5063-1.3267.5063-1.833 0s-.5063-1.3266 0-1.833c.5063-.5062 1.3267-.5062 1.833 0 .5063.504.5063 1.3267 0 1.833zM16.356.2355l-1.6041 1.6042c-.314.314-.314.83 0 1.144L21.015 9.247c.314.314.83.314 1.144 0l1.6042-1.6041c.314-.314.314-.83 0-1.144L17.4976.2354c-.314-.314-.8276-.314-1.1416 0zM5.1173 20.734c.2848-.2848.2848-.7497 0-1.0345l-.8155-.8155c-.2848-.2848-.7497-.2848-1.0345 0l-1.6845 1.6845-.0024.0024-.4625-.4625c-.2556-.2556-.6718-.2556-.925 0-.2556.2556-.2556.6718 0 .925l2.775 2.775c.2556.2556.6718.2556.925 0 .2532-.2556.2556-.6718 0-.925l-.4625-.4625.0024-.0024zm8.4856-15.893-3.5637 3.5637c-.3164.3164-.3164.8374 0 1.1538l2.2006 2.2005c1.5554-1.1197 3.7365-.981 5.1361.4187l1.7819-1.7818c.3164-.3165.3164-.8374 0-1.1538l-4.401-4.401c-.3165-.319-.8374-.319-1.1539 0zm-2.2881 7.8455-1.2999-1.2999c-.3043-.3043-.8033-.3043-1.1076 0l-4.5836 4.586c-.3042.3043-.3042.8033 0 1.1076l2.5973 2.5973c.3043.3043.8033.3043 1.1076 0l2.9478-2.9527c-.6231-1.2877-.5112-2.8431.3384-4.0383z" />
    </svg>
  );
});

Opentelemetry.propTypes = {
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

export default Opentelemetry;