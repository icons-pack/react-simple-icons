
    import * as React from 'react';

    export type SpinnakerProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Spinnaker = React.forwardRef<SVGSVGElement, SpinnakerProps>(function Spinnaker({color = 'currentColor', size = 24, title = "spinnaker", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M21.343 0C17.785 8.741 11.317 21.987.815 23.882c10.806 1.064 19.481-5.327 21.646-8.066C24.627 13.076 21.343 0 21.343 0zM.815 23.882L.8 23.88v.004l.015-.003zM17.182 5.8C15.409 10.988 10.477 18.547 5.4 20.39c.885.033 1.74-.019 2.561-.132 3.989-3.221 7.14-8.037 9.577-12.771-.193-.981-.356-1.687-.356-1.687z" />
        </svg>
      );
    });

    export default Spinnaker
  