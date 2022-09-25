import * as React from 'react';

export type TqdmProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Tqdm = React.forwardRef<SVGSVGElement, TqdmProps>(function Tqdm({color = 'currentColor', size = 24, title = "tqdm", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M12 14.562a2.338 2.338 0 1 1 0-4.677 2.338 2.338 0 0 1 0 4.677zM12 0C5.392 0 .036 5.473.036 12.224c0 5.579 3.659 10.281 8.658 11.746.428.126.87-.162.962-.598l.141-.669c.086-.41-.169-.799-.57-.92-4.039-1.221-6.986-5.037-6.986-9.559 0-5.507 4.37-9.972 9.76-9.972s9.76 4.464 9.76 9.972c0 4.515-2.938 8.325-6.967 9.552-.4.122-.654.511-.567.919l.142.67c.093.437.535.723.963.596 4.986-1.474 8.633-6.169 8.633-11.738C23.964 5.473 18.608 0 12 0zm7.152 12.224c0-4.04-3.202-7.315-7.152-7.315s-7.152 3.275-7.152 7.315c0 3.191 1.999 5.903 4.786 6.902a.79.79 0 0 0 1.037-.582l.042-.199a.772.772 0 0 0-.489-.889c-2.118-.752-3.639-2.809-3.639-5.232 0-3.059 2.424-5.539 5.415-5.539s5.415 2.48 5.415 5.539c0 2.418-1.516 4.472-3.628 5.227a.772.772 0 0 0-.487.89l.042.199a.791.791 0 0 0 1.038.58c2.78-1.003 4.772-3.71 4.772-6.896z" />
    </svg>
  );
});

export default Tqdm;
