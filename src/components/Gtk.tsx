import * as React from 'react';

export type GtkProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Gtk = React.forwardRef<SVGSVGElement, GtkProps>(function Gtk(
  { color = 'currentColor', size = 24, title = 'gtk', ...others },
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
      <path d='M9.01 23.773V14.45l-7.584 2.245Zm0-13.87L.91 3.828l.502 12.526 7.597-2.249ZM9.57 24l12.353-5.146-8.285-5.775-4.068 1.204ZM23.09 5.815l-9.257 2.849v4.148l8.237 5.741ZM9.57 9.975v3.964l3.932-1.164v-4.01Zm-.228-.52 4.16-1.28V0L1.231 3.37ZM22.715 5.34 13.833.052v8.021Z' />
    </svg>
  );
});

export default Gtk;
