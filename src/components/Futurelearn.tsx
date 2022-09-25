
    import * as React from 'react';

    export type FuturelearnProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Futurelearn = React.forwardRef<SVGSVGElement, FuturelearnProps>(function Futurelearn({color = 'currentColor', size = 24, title = "futurelearn", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M22.081.61v7.566h-7.223v6.661H7.566v6.634H0v1.92h9.471v-6.649h7.306v-6.66H24V.61Z" />
        </svg>
      );
    });

    export default Futurelearn
