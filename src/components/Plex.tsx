
    import * as React from 'react';

    export type PlexProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Plex = React.forwardRef<SVGSVGElement, PlexProps>(function Plex({color = 'currentColor', size = 24, title = "plex", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M11.643 0H4.68l7.679 12L4.68 24h6.963l7.677-12-7.677-12" />
        </svg>
      );
    });

    export default Plex
  