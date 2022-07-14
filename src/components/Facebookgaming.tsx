
    import * as React from 'react';

    export type FacebookgamingProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Facebookgaming = React.forwardRef<SVGSVGElement, FacebookgamingProps>(function Facebookgaming({color = 'currentColor', size = 24, title = "facebookgaming", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M0 0v24h15.67v-7.35H7.35v-9.3H24V0zm8.33 15.68h8.32V24H24V8.32H8.33Z" />
        </svg>
      );
    });

    export default Facebookgaming
  