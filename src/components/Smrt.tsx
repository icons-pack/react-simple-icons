import * as React from 'react';

export type SmrtProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Smrt = React.forwardRef<SVGSVGElement, SmrtProps>(function Smrt(
  { color = 'currentColor', size = 24, title = 'smrt', ...others },
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
      <path d='M2.6535 13.753c.8096 4.4368 4.677 7.8105 9.3392 7.8105 4.677 0 8.6171-4.0882 9.3967-8.5422h-2.5631c-.7499 3.0597-3.5506 6.0385-6.8334 6.0385-2.3686 0-4.4526-1.1984-5.727-2.999h5.292c.435 0 .8542-.2304 1.214-.7029l1.2895-1.8584c.121-.2305.3448-.3601.6145-.3601h7.54L24 10.8318H13.6117c-.2535 0-.48.144-.6148.3284l-1.7089 2.2932c-.1037.1728-.2852.288-.4946.288zm18.6783-3.5063c-.8096-4.4396-4.6468-7.8102-9.3242-7.8102-4.677 0-8.4993 3.9755-9.2786 8.4299h2.5634c.7496-3.0598 3.4322-5.9265 6.7302-5.9265 2.3686 0 4.452 1.1985 5.7263 2.9964h-5.3065c-.4348 0-.8545.2305-1.2143.7058l-1.2892 1.8581c-.121.2305-.3448.3604-.6148.3604h-7.54L0 13.1365h10.3883c.2535 0 .48-.144.6148-.3284l1.7089-2.3107c.1037-.1729.2852-.2881.4946-.2881z' />
    </svg>
  );
});

export default Smrt;
