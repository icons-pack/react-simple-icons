import * as React from 'react';

export type ProgateProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Progate = React.forwardRef<SVGSVGElement, ProgateProps>(function Progate(
  { color = 'currentColor', size = 24, title = 'progate', ...others },
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
      <path d='M10.056 24a17.14 17.14 0 01-3.457-.698c-1.244-.364-2.899-1-2.913-2.319 0-.946.54-1.755 1.675-2.477a15.827 15.827 0 011.6-.844 39.6 39.6 0 012.2-.928V4.98l-4.41-.476v12.652a.848.848 0 01-.895.846.85.85 0 01-.904-.846V3.496a.906.906 0 01.904-.903.8.8 0 01.096.014l6.198.67a.902.902 0 01.8.9v11.826a61.194 61.194 0 002.399-1.03c2.27-1.036 3.799-2.091 4.668-3.237 1.056-1.374 1.218-3.075 1.168-4.259a6.264 6.264 0 00-1.254-3.515 5.498 5.498 0 00-2.095-1.725 6.208 6.208 0 00-1.663-.486c-.6-.082-.896-.51-.864-.938.032-.427.384-.75.888-.8.863-.071 1.503.147 2.375.536a7.76 7.76 0 012.86 2.32 8.167 8.167 0 011.6 4.522 8.967 8.967 0 01-.485 3.481 7.36 7.36 0 01-1.088 1.966c-1.584 2.065-4.39 3.34-5.31 3.764-.868.4-2.8 1.2-3.18 1.352V23.1a.908.908 0 01-.31.682.918.918 0 01-.567.218zm-.896-5.318c-.552.2-1.4.512-1.72.66-.32.147-1.215.565-1.61.91-.1.085-.417.385-.339.629.078.244.446.374 1.904.766.518.14 1.125.274 1.765.4z' />
    </svg>
  );
});

export default Progate;
