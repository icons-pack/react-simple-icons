
    import * as React from 'react';

    export type BufferProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Buffer = React.forwardRef<SVGSVGElement, BufferProps>(function Buffer({color = 'currentColor', size = 24, title = "buffer", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M1.371 5.476L11.943 0l10.686 5.476-10.686 5.495zm3.36 4.81l7.212 3.547 7.288-3.547 3.398 1.655-10.686 5.202L1.371 11.94zm0 6.171l7.212 3.911 7.288-3.91 3.398 1.815L11.943 24 1.371 18.273z" />
        </svg>
      );
    });

    export default Buffer
