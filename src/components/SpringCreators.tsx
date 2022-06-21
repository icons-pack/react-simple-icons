import * as React from 'react';

export type SpringCreatorsProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const SpringCreators = React.forwardRef<SVGSVGElement, SpringCreatorsProps>(function SpringCreators(
  { color = 'currentColor', size = 24, title = 'spring_creators', ...others },
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
      <path d='M8.563 24c-1.839 0-4.435-.537-7.028-2.87l2.035-2.262c3.636 3.273 7.425 1.98 8.595.888.078-.079.156-.153.234-.23-3.83-.373-6.629-3.086-6.822-3.277-2.933-2.889-3.6-6.808-1.512-8.93s6.015-1.522 8.95 1.357c.257.246 3.116 3.052 3.677 6.605a6.776 6.776 0 002.727-5.426 6.62 6.62 0 00-1.995-4.791c-1.334-1.303-3.222-2.02-5.306-2.02V0c2.88 0 5.519 1.024 7.43 2.882 1.881 1.83 2.917 4.304 2.917 6.973a9.831 9.831 0 01-6.116 9.086c-.416 1.1-1.12 2.117-2.106 3.04-.97.905-2.865 1.908-5.28 2.01-.13.007-.262.009-.4.009zM7.283 9.077c-.425 0-.79.115-1.046.375-.749.762-.275 2.904 1.48 4.633l.008.009c.025.024 2.771 2.687 6.025 2.414v-.005c.015-2.873-2.808-5.597-2.837-5.625l-.02-.019C9.85 9.832 8.37 9.077 7.283 9.077Z' />
    </svg>
  );
});

export default SpringCreators;
