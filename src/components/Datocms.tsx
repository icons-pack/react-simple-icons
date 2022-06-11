import * as React from 'react';

export type DatocmsProps = {
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

const Datocms = React.forwardRef<SVGSVGElement, DatocmsProps>(function Datocms(
  { color = 'currentColor', size = 24, title = 'datocms', ...others },
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
      <path d='M12 0H.076v24H12c5.964 0 11.924-5.373 11.924-11.998C23.924 5.376 17.963 0 12 0zm0 17.453a5.453 5.453 0 115.455-5.451A5.45 5.45 0 0112 17.452z' />
    </svg>
  );
});

export default Datocms;
