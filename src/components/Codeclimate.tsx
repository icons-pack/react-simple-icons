
    import * as React from 'react';

    export type CodeclimateProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Codeclimate = React.forwardRef<SVGSVGElement, CodeclimateProps>(function Codeclimate({color = 'currentColor', size = 24, title = "codeclimate", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M16.125 5.272l-4.511 4.475 2.684 2.659 1.827-1.813 5.19 5.145L24 13.079zM8.13 8.265L0 16.066l2.772 2.662 5.357-5.145 5.357 5.145 2.772-2.662z" />
        </svg>
      );
    });

    export default Codeclimate
  