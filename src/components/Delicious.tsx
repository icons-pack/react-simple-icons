
    import * as React from 'react';

    export type DeliciousProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Delicious = React.forwardRef<SVGSVGElement, DeliciousProps>(function Delicious({color = 'currentColor', size = 24, title = "delicious", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M12 12H0v12h12V12zM24 0H12v12h12V0z" />
        </svg>
      );
    });

    export default Delicious
  