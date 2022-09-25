
    import * as React from 'react';

    export type ElmProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Elm = React.forwardRef<SVGSVGElement, ElmProps>(function Elm({color = 'currentColor', size = 24, title = "elm", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M23.986 12.806V23.2l-5.197-5.197zM6.796 6.01H17.19l-5.197 5.197zm9.275-1.12H5.677L.8.015h10.394zm7.116 7.117L17.99 6.81l-5.197 5.197 5.197 5.197zm.813-.813L12.806 0H24zM0 23.2V.813l11.194 11.194zm23.187.8H.8l11.193-11.194Z" />
        </svg>
      );
    });

    export default Elm
