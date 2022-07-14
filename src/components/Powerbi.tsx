
    import * as React from 'react';

    export type PowerbiProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Powerbi = React.forwardRef<SVGSVGElement, PowerbiProps>(function Powerbi({color = 'currentColor', size = 24, title = "powerbi", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M21 1v22a1 1 0 0 1-1 1h-3.5V7c0-.827-.673-1.5-1.5-1.5h-2V1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1zm-6 5H9a1 1 0 0 0-1 1v4.5h2c.827 0 1.5.673 1.5 1.5v11H16V7a1 1 0 0 0-1-1zm-5 6H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h7V13a1 1 0 0 0-1-1z" />
        </svg>
      );
    });

    export default Powerbi
  