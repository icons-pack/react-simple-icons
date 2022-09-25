
    import * as React from 'react';

    export type AffinityProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Affinity = React.forwardRef<SVGSVGElement, AffinityProps>(function Affinity({color = 'currentColor', size = 24, title = "affinity", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M9.368 1.08h3.778l.318.55h1.082L24 18.004v.001l-2.036 3.47H13.69l.84 1.445h-.365l-.84-1.446H3.057l-.526-.923h-.652L0 17.298l.002-.001 2.41-4.176 2.23-1.288 3.69-6.39-.742-1.285L9.368 1.08zm2.224 5.652L5.066 18.008h6.25l-.723-1.246 6.808.006-5.809-10.036Z" />
        </svg>
      );
    });

    export default Affinity
