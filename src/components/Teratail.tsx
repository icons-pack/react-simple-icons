
    import * as React from 'react';

    export type TeratailProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Teratail = React.forwardRef<SVGSVGElement, TeratailProps>(function Teratail({color = 'currentColor', size = 24, title = "teratail", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M9.81.968h4.375L24 23.032h-5.107L12.121 6.605h-.198L5.148 23.03H0Z" />
        </svg>
      );
    });

    export default Teratail
  