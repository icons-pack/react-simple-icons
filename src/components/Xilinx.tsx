
    import * as React from 'react';

    export type XilinxProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Xilinx = React.forwardRef<SVGSVGElement, XilinxProps>(function Xilinx({color = 'currentColor', size = 24, title = "xilinx", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M8 18l5.241 6H5.586L.345 18l5.241-6L.345 6l5.241-6h7.655L8 6l5.241 6L8 18zM23.655 0H13.241l5.241 6 5.173-6zM13.241 24h10.414l-5.172-6-5.242 6z" />
        </svg>
      );
    });

    export default Xilinx
  