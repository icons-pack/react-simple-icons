
    import * as React from 'react';

    export type RevoltdotchatProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Revoltdotchat = React.forwardRef<SVGSVGElement, RevoltdotchatProps>(function Revoltdotchat({color = 'currentColor', size = 24, title = "revoltdotchat", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M17.005 7.796c0 1.88-1.023 3.009-3.207 3.009h-3.615v-5.95H13.8c2.183 0 3.206 1.162 3.206 2.94zM.853 0l3.5 4.866v19.133h5.832v-9.06h1.398L16.563 24h6.583l-5.525-9.504a6.966 6.966 0 0 0 3.879-2.532 7 7 0 0 0 1.44-4.408C22.94 3.384 20.009 0 14.143 0h-9.79z" />
        </svg>
      );
    });

    export default Revoltdotchat
