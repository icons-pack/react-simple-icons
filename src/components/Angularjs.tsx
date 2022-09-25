
    import * as React from 'react';

    export type AngularjsProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Angularjs = React.forwardRef<SVGSVGElement, AngularjsProps>(function Angularjs({color = 'currentColor', size = 24, title = "angularjs", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M11.964 0L.672 3.974l1.784 14.794L11.976 24l9.568-5.303 1.784-14.794zm-.027 1.258l10.265 3.5-1.663 13.232-8.602 4.76-8.469-4.697L1.939 4.822zm0 .78L4.957 17.57l2.604-.048 1.4-3.501h6.257l1.532 3.55 2.492.046zm.02 4.98l2.355 4.93H9.878Z" />
        </svg>
      );
    });

    export default Angularjs
