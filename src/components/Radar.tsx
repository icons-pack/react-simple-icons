
    import * as React from 'react';

    export type RadarProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Radar = React.forwardRef<SVGSVGElement, RadarProps>(function Radar({color = 'currentColor', size = 24, title = "radar", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M12 0L2.197 23.975 12 19.952 21.803 24z" />
        </svg>
      );
    });

    export default Radar
  