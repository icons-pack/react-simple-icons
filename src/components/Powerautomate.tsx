import * as React from 'react';

export type PowerautomateProps = {
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

const Powerautomate = React.forwardRef<SVGSVGElement, PowerautomateProps>(function Powerautomate(
  { color = 'currentColor', size = 24, title = 'powerautomate', ...others },
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
      <path d='M.258 4.142c-.579-.646-.12-1.672.747-1.672h14.139l-8.191 9.155L.258 4.142zM19.744 6.86l-3.629-4.056a1.002 1.002 0 0 0-.368-.257L7.289 12 .258 19.858c-.578.646-.12 1.672.748 1.672h5.613L19.744 6.86zm4 4.471-1.695-1.895-1.97-2.201L7.289 21.53h8.079c.285 0 .557-.122.748-.334l5.934-6.632 1.695-1.895c.34-.381.34-.957-.001-1.338z' />
    </svg>
  );
});

export default Powerautomate;
