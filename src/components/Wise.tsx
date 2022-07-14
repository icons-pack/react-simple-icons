
    import * as React from 'react';

    export type WiseProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Wise = React.forwardRef<SVGSVGElement, WiseProps>(function Wise({color = 'currentColor', size = 24, title = "wise", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="m3.6426 0 3.7383 6.3594-6.6602 6.3613H12.043l1.1816-2.7734H7.4883l3.5879-3.588-2.084-3.5878h9.7324L9.7441 24h3.373L23.2794 0Z" />
        </svg>
      );
    });

    export default Wise
  