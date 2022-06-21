import * as React from 'react';

export type LogstashProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Logstash = React.forwardRef<SVGSVGElement, LogstashProps>(function Logstash(
  { color = 'currentColor', size = 24, title = 'logstash', ...others },
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
      <path d='M13.745 24h8.291v-9.164h-8.29zm-2.618 0h.437v-9.164h-9.6A9.163 9.163 0 0011.127 24m.438-9.164h-9.6V0h.873a8.727 8.727 0 018.727 8.727z' />
    </svg>
  );
});

export default Logstash;
