import * as React from 'react';

export type GeneralmotorsProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Generalmotors = React.forwardRef<SVGSVGElement, GeneralmotorsProps>(function Generalmotors(
  { color = 'currentColor', size = 24, title = 'generalmotors', ...others },
  ref,
) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      fill={color}
      viewBox='0 0 24 24'
      ref={ref}
      {...others}
    >
      <title>{title}</title>
      <path d='M3.34 0A3.345 3.345 0 0 0 0 3.34v17.32A3.345 3.345 0 0 0 3.34 24h17.32A3.345 3.345 0 0 0 24 20.66V3.34C23.982 1.5 22.501 0 20.66 0zm0 1.535h17.32c.992 0 1.805.813 1.805 1.806v17.3c0 .993-.813 1.806-1.806 1.806H3.341a1.811 1.811 0 0 1-1.806-1.806v-17.3c0-.993.813-1.806 1.806-1.806zm2.98 4.677A1.877 1.877 0 0 0 4.442 8.09v4.569c0 1.03.85 1.86 1.879 1.878h1.552v.343c-.018.85-.505 1.337-1.679 1.355h-.74v1.535h.74c2.167 0 3.395-1.03 3.431-2.908v-8.65zm4.623 0v8.307h1.752V7.73h1.68v6.79h1.752V7.73h1.01c.362 0 .669.289.669.668v6.14h1.752V8.09c-.018-1.029-.85-1.878-1.879-1.878zM6.863 7.73h1.01v5.273h-1.01a.666.666 0 0 1-.669-.668V8.397c0-.36.29-.668.668-.668zm4.08 8.506v1.535h8.596v-1.535z' />
    </svg>
  );
});

export default Generalmotors;
