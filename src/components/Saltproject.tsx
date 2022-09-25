
    import * as React from 'react';

    export type SaltprojectProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Saltproject = React.forwardRef<SVGSVGElement, SaltprojectProps>(function Saltproject({color = 'currentColor', size = 24, title = "saltproject", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M0 12v10.56h12L18 12h6V1.44H12L6 12Z" />
        </svg>
      );
    });

    export default Saltproject
