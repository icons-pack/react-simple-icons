import * as React from 'react';

export type VauxhallProps = React.ComponentPropsWithoutRef<'svg'> & {
  /**
   * Hex color or color name
   */
  title?: string;
  /**
   * The size of the Icon.
   */
  color?: string;
  /**
   * The title provides an accessible short text description to the SVG
   */
  size?: string | number;
};

const Vauxhall = React.forwardRef<SVGSVGElement, VauxhallProps>(function Vauxhall(
  { color = 'currentColor', size = 24, title = 'vauxhall', ...others },
  ref,
) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      fill={color}
      viewBox='0 0 24 24'
      ref={ref}
      {...others}
    >
      <title>{title}</title>
      <path d='M12.002 24C5.375 24.001.002 18.63 0 12.002-.001 5.375 5.37.002 11.998 0s12 5.37 12.002 11.998c.007 6.621-5.375 12.007-11.998 12.002zM15.8 5.371c.338.022.658.038.978.066a4.12 4.12 0 0 1 1.496.386.774.774 0 0 1 .413.414c.05.15.074.306.076.464 0 .14.034.213.185.25.351.091.699.204 1.044.314.395.096.694.42.759.822.053.28.062.568.028.853a6.958 6.958 0 0 1-.238.962c0 .053-.066.094-.1.138a.872.872 0 0 1-.132-.132c-.054-.09-.091-.194-.141-.288a.73.73 0 0 0-.612-.417 8.532 8.532 0 0 0-2.02.038.84.84 0 0 0-.206.1c.063.04.122.085.185.12a.496.496 0 0 0 .135.03l.815.154a.79.79 0 0 1 .627.477c.072.172.035.241-.144.263h-.213c-.562.044-1.123.072-1.681.135-.41.044-.561.244-.574.658-.029.911.023 1.823.154 2.725a2.565 2.565 0 0 0 1.326 2.023 29.746 29.746 0 0 0 3.214 1.567c.107.047.166.032.217-.075.16-.313.332-.646.482-.975.5-1.063.818-2.203.941-3.37a10.38 10.38 0 0 0-.085-2.647 11.046 11.046 0 0 0-1.204-3.65 10.912 10.912 0 0 0-3.449-3.741 10.347 10.347 0 0 0-4.954-1.828 11.097 11.097 0 0 0-3.299.182 10.662 10.662 0 0 0-6.356 3.995c-.15.174.092.232.239.207h5.989c.279 0 .313.063.172.313-1.07 1.882-2.14 3.763-3.208 5.645a.558.558 0 0 1-.542.313H1.432c-.226 0-.235 0-.238.232.004.855.109 1.707.314 2.537.035.17.137.32.282.417a3.393 3.393 0 0 0 1.966.627h4.01a.176.176 0 0 0 .201-.144c.035-.144.078-.286.12-.427.07-.187-.201-.136-.286-.14-.22 0-.44-.023-.659-.045-.208.015-.181-.195-.103-.332.354-.752.7-1.511 1.063-2.26.129-.291.37-.517.668-.628.266-.097.53-.213.79-.332.06-.029.097-.104.144-.154a.627.627 0 0 0-.179-.085c-.188-.018-.379-.015-.567-.034-.188-.019-.2-.097-.12-.232.383-.627.766-1.27 1.158-1.9a1 1 0 0 1 .599-.427 4.61 4.61 0 0 0 .536-.178.94.94 0 0 0 .213-.157l-.025-.057c-.176-.025-.351-.047-.527-.075-.175-.028-.185-.106-.1-.238.085-.132.141-.213.21-.314a4.293 4.293 0 0 1 1.254-1.351c.462-.276.97-.467 1.499-.565a.683.683 0 0 0 .289-.156c.743-.662 1.44-1.38 2.2-2.032-.137.67-.238 1.31-.344 1.96zM2.56 6.604l.022.134c.314 1.314.605 2.628.9 3.945.025.107.072.135.179.132h1.687a.279.279 0 0 0 .294-.17c.728-1.298 1.46-2.593 2.195-3.885.025-.043.044-.087.079-.153H6.778a.42.42 0 0 0-.417.244c-.52.922-1.047 1.84-1.567 2.76l-.091.14c-.22-.94-.433-1.865-.646-2.78-.094-.418-.06-.358-.455-.361l-1.04-.006zm.627 11.639c.958 1.52 2.473 2.693 4.076 3.502a.176.176 0 0 0 .22-.028c.364-.299.73-.594 1.097-.887l.386-.314a15.253 15.253 0 0 1-.777-.95.483.483 0 0 0-.295-.213l-3.876-.916-.83-.194zm14.938-11.26c-.088-.019-.14-.038-.191-.044-.263-.034-.53-.05-.787-.11a.825.825 0 0 0-.724.189c-.035.025-.072.072-.066.103a.141.141 0 0 0 .09.088c.314.097.628.197.957.27a.408.408 0 0 0 .314-.066c.145-.133.28-.277.404-.43h.003z' />
    </svg>
  );
});

export default Vauxhall;
