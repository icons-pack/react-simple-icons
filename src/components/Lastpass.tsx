import * as React from 'react';

export type LastpassProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Lastpass = React.forwardRef<SVGSVGElement, LastpassProps>(function Lastpass(
  { color = 'currentColor', size = 24, title = 'lastpass', ...others },
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
      <path d='M22.629,6.857c0-0.379,0.304-0.686,0.686-0.686C23.693,6.171,24,6.483,24,6.857 v10.286c0,0.379-0.304,0.686-0.686,0.686c-0.379,0-0.686-0.312-0.686-0.686V6.857z M2.057,10.286c1.136,0,2.057,0.921,2.057,2.057 S3.193,14.4,2.057,14.4S0,13.479,0,12.343S0.921,10.286,2.057,10.286z M9.6,10.286c1.136,0,2.057,0.921,2.057,2.057 S10.736,14.4,9.6,14.4s-2.057-0.921-2.057-2.057S8.464,10.286,9.6,10.286z M17.143,10.286c1.136,0,2.057,0.921,2.057,2.057 S18.279,14.4,17.143,14.4s-2.057-0.921-2.057-2.057S16.007,10.286,17.143,10.286z' />
    </svg>
  );
});

export default Lastpass;
