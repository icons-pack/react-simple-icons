
    import * as React from 'react';

    export type DotenvProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Dotenv = React.forwardRef<SVGSVGElement, DotenvProps>(function Dotenv({color = 'currentColor', size = 24, title = "dotenv", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M24 0v24H0V0h24ZM10.933 15.89H6.84v5.52h4.198v-.93H7.955v-1.503h2.77v-.93h-2.77v-1.224h2.978v-.934Zm2.146 0h-1.084v5.52h1.035v-3.6l2.226 3.6h1.118v-5.52h-1.036v3.686l-2.259-3.687Zm5.117 0h-1.208l1.973 5.52h1.19l1.976-5.52h-1.182l-1.352 4.085-1.397-4.086ZM5.4 19.68H3.72v1.68H5.4v-1.68Z" />
        </svg>
      );
    });

    export default Dotenv
  