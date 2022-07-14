
    import * as React from 'react';

    export type BeatsbydreProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Beatsbydre = React.forwardRef<SVGSVGElement, BeatsbydreProps>(function Beatsbydre({color = 'currentColor', size = 24, title = "beatsbydre", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M12.0099 15.5996A3.5995 3.5995 0 1 0 8.4103 12a3.5995 3.5995 0 0 0 3.5996 3.5996zm0-15.5981a11.9985 11.9985 0 0 0-3.5996.552v6.6471A5.9992 5.9992 0 1 1 6.0106 12V1.6033A11.9985 11.9985 0 1 0 12.01.0015z" />
        </svg>
      );
    });

    export default Beatsbydre
  