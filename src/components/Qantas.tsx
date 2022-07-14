
    import * as React from 'react';

    export type QantasProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Qantas = React.forwardRef<SVGSVGElement, QantasProps>(function Qantas({color = 'currentColor', size = 24, title = "qantas", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M0 3.47l.218.572c1.925 5.006 5.566 2.689 10.415 7.139l.056.05c.652.599 1.1.044.888-.306a.76.76 0 0 1-.165-.532 6.7 6.7 0 0 1 2.606 1.369l-.06.126c-.366.73-3.959.421-4 1.943a.969.969 0 0 0 .607.923l.71.287a17.34 17.34 0 0 1 6.086 4.146.086.086 0 0 1-.063.147.079.079 0 0 1-.054-.018 17.32 17.32 0 0 0-8.173-3.61.467.467 0 0 1-.39-.41c-.548-5.089-5.575-5.434-7.492-8.705l5.313 13.94H24L9.979 6.449a10.022 10.022 0 0 0-7.045-2.98Z" />
        </svg>
      );
    });

    export default Qantas
  