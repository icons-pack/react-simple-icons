
    import * as React from 'react';

    export type AnaProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Ana = React.forwardRef<SVGSVGElement, AnaProps>(function Ana({color = 'currentColor', size = 24, title = "ana", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M19.11 8.975l-3.454 6.05h3.432l3.455-6.05zm3.933 0l-3.455 6.05h.959L24 8.975zm-10.01.781H14.8l.403 5.27h-1.31l-.025-.58a.206.206 0 0 0-.202-.227h-1.867l.429-.757h1.21c.151 0 .328.026.328-.202l-.202-2.37c0-.15-.126-.226-.227-.075L11.193 15h-.882zm-9.983 0h1.74l.353 5.27h-1.31l-.026-.58a.226.226 0 0 0-.227-.227H1.563l.429-.757h1.386c.151 0 .328.026.328-.202l-.151-2.37c0-.15-.126-.226-.227-.075L.882 15H0zm3.278 0h1.79l1.16 4.084c.05.126.15.101.176 0l.756-4.084h.782l-.933 5.27H8.244l-1.135-4.034c-.025-.101-.151-.127-.176 0l-.706 4.033h-.832Z" />
        </svg>
      );
    });

    export default Ana
  