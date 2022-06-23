import * as React from 'react';

export type TensorflowProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Tensorflow = React.forwardRef<SVGSVGElement, TensorflowProps>(function Tensorflow(
  { color = 'currentColor', size = 24, title = 'tensorflow', ...others },
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
      <path d='M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-6.168 3.564.015-5.31zm21.43 5.311l-.014-5.31L12.46 0v24l4.095-2.378V14.87l3.092 1.788-.018-4.618-3.074-1.756V7.603l6.168 3.564z' />
    </svg>
  );
});

export default Tensorflow;
