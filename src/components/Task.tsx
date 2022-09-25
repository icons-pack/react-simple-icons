
    import * as React from 'react';

    export type TaskProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Task = React.forwardRef<SVGSVGElement, TaskProps>(function Task({color = 'currentColor', size = 24, title = "task", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M1.857 18.013 11.736 24V12.456L1.857 6.468Zm20.286 0V6.468l-9.879 5.988V24Zm-.246-12.014L12 0 2.103 5.999 12 11.998Z" />
        </svg>
      );
    });

    export default Task
