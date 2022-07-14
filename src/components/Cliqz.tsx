
    import * as React from 'react';

    export type CliqzProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Cliqz = React.forwardRef<SVGSVGElement, CliqzProps>(function Cliqz({color = 'currentColor', size = 24, title = "cliqz", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M19.387 18.146l4.19-1.402L12 12.027l4.716 11.578 1.403-4.19 3.917 3.917 1.268-1.268zm-7.387 1c.035 0 .07-.004.105-.004l1.908 4.686c-.654.11-1.326.172-2.013.172-6.617 0-12-5.383-12-12S5.383 0 12 0s12 5.383 12 12c0 .695-.063 1.376-.177 2.04l-4.683-1.908c0-.044.006-.087.006-.133A7.153 7.153 0 0 0 12 4.854a7.155 7.154 0 0 0-7.147 7.145A7.155 7.154 0 0 0 12 19.146z" />
        </svg>
      );
    });

    export default Cliqz
  