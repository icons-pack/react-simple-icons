
    import * as React from 'react';

    export type PurismProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Purism = React.forwardRef<SVGSVGElement, PurismProps>(function Purism({color = 'currentColor', size = 24, title = "purism", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M24 19.588H0V4.412h24zM2.824 16.765h18.352v-9.53H2.824Z" />
        </svg>
      );
    });

    export default Purism
