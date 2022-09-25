
    import * as React from 'react';

    export type HelpscoutProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Helpscout = React.forwardRef<SVGSVGElement, HelpscoutProps>(function Helpscout({color = 'currentColor', size = 24, title = "helpscout", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="m3.497 14.044 7.022-7.021a4.946 4.946 0 0 0 1.474-3.526A4.99 4.99 0 0 0 10.563 0L3.54 7.024a4.945 4.945 0 0 0-1.473 3.525c0 1.373.55 2.6 1.43 3.496zm17.007-4.103-7.023 7.022a4.946 4.946 0 0 0-1.473 3.525c0 1.36.55 2.601 1.43 3.497l7.022-7.022a4.943 4.943 0 0 0 1.474-3.526c0-1.373-.55-2.6-1.43-3.496zm-.044-2.904a4.944 4.944 0 0 0 1.474-3.525c0-1.36-.55-2.6-1.43-3.497L3.54 16.965A4.986 4.986 0 0 0 3.497 24Z" />
        </svg>
      );
    });

    export default Helpscout
