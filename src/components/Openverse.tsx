
    import * as React from 'react';

    export type OpenverseProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Openverse = React.forwardRef<SVGSVGElement, OpenverseProps>(function Openverse({color = 'currentColor', size = 24, title = "openverse", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M4.882 1.018C2.182 1.018 0 3.214 0 5.932c0 2.704 2.182 4.915 4.882 4.915Zm7.118 0c-2.686 0-4.882 2.196-4.882 4.914 0 2.704 2.182 4.915 4.882 4.915zm7.118 0c-2.696 0-4.881 2.2-4.881 4.914 0 2.714 2.185 4.915 4.88 4.915 2.697 0 4.883-2.2 4.883-4.915 0-2.714-2.186-4.914-4.882-4.914zm0 12.093c-2.696 0-4.881 2.2-4.881 4.915 0 2.714 2.185 4.914 4.88 4.914 2.697 0 4.883-2.2 4.883-4.914 0-2.714-2.186-4.915-4.882-4.915ZM12 13.126c-2.686 0-4.882 2.196-4.882 4.9S9.3 22.94 12 22.94zm-7.118.04c-2.7 0-4.882 2.197-4.882 4.9 0 2.719 2.182 4.916 4.882 4.916Z" />
        </svg>
      );
    });

    export default Openverse
