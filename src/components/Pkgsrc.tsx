import * as React from 'react';

export type PkgsrcProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Pkgsrc = React.forwardRef<SVGSVGElement, PkgsrcProps>(function Pkgsrc(
  { color = 'currentColor', size = 24, title = 'pkgsrc', ...others },
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
      <path d='m12.908 8.763 9.157-5.132L11.25 0 1.62 4.42Zm1.5 2.29 9-5.368-.948 11.84-8.191 6.382zM.593 6.712 1.619 18.79 11.922 24l-.12-12.788Z' />
    </svg>
  );
});

export default Pkgsrc;
