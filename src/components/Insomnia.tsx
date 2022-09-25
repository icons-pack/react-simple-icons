import * as React from 'react';

export type InsomniaProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Insomnia = React.forwardRef<SVGSVGElement, InsomniaProps>(function Insomnia({color = 'currentColor', size = 24, title = "insomnia", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M12.1356 3.4577c4.7179 0 8.5424 3.8245 8.5424 8.5424 0 4.7178-3.8245 8.5423-8.5424 8.5423-4.7178 0-8.5423-3.8245-8.5423-8.5423 0-1.153.2284-2.2527.6425-3.2562.6046.8233 1.5796 1.3579 2.6795 1.3579 1.8347 0 3.322-1.4874 3.322-3.3221 0-1.0999-.5345-2.0749-1.3579-2.6795 1.0036-.414 2.1032-.6425 3.2562-.6425zM12 0C5.3726 0 0 5.3726 0 12s5.3726 12 12 12 12-5.3726 12-12S18.6274 0 12 0Zm0 1.2203c5.9534 0 10.7797 4.8263 10.7797 10.7797S17.9534 22.7797 12 22.7797 1.2203 17.9534 1.2203 12 6.0466 1.2203 12 1.2203Z" />
    </svg>
  );
});

export default Insomnia;
