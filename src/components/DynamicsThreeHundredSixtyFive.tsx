
    import * as React from 'react';

    export type DynamicsThreeHundredSixtyFiveProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const DynamicsThreeHundredSixtyFive = React.forwardRef<SVGSVGElement, DynamicsThreeHundredSixtyFiveProps>(function DynamicsThreeHundredSixtyFive({color = 'currentColor', size = 24, title = "dynamics365", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M15.805 11.322v4.889a2.536 2.536 0 0 1-1.643 2.374l-1.732.652a.507.507 0 0 1-.686-.475v-5.956l-3.392 1.239a1.015 1.015 0 0 0-.664.953v7.986c0 .705.7 1.195 1.363.953l10.161-3.713a2.535 2.535 0 0 0 1.666-2.382V7.696a2.537 2.537 0 0 1-1.666 2.381l-3.407 1.245Zm0-.532V9.323a2.537 2.537 0 0 0-1.645-2.375l-1.728-.65a.508.508 0 0 0-.686.475v4.59c0 .701-.695 1.191-1.355.956L3.795 9.963a1.015 1.015 0 0 1-.674-.956V1.015c0-.701.695-1.191 1.356-.955l14.718 5.256A2.538 2.538 0 0 1 20.83 7.21c-.136.861-1.05 2.128-1.79 2.398l-3.235 1.182Z" />
        </svg>
      );
    });

    export default DynamicsThreeHundredSixtyFive
