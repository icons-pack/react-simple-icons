
    import * as React from 'react';

    export type LinuxfoundationProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Linuxfoundation = React.forwardRef<SVGSVGElement, LinuxfoundationProps>(function Linuxfoundation({color = 'currentColor', size = 24, title = "linuxfoundation", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M4.8 19.2h9.6V24H0V9.6h4.8v9.6zM0 0v7.2h4.8V4.822h14.4V19.2h-2.4V24H24V0H0z" />
        </svg>
      );
    });

    export default Linuxfoundation
