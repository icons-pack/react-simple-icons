import * as React from 'react';

export type NokiaProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Nokia = React.forwardRef<SVGSVGElement, NokiaProps>(function Nokia(
  { color = 'currentColor', size = 24, title = 'nokia', ...others },
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
      <path d='M1.156 13.954H0v-3.892h1.998l2.294 2.905v-2.905h1.156v3.892H3.489l-2.333-2.956v2.956m9.82-1.204c0 .54-.097.728-.257.907-.244.266-.6.346-1.289.346H7.457c-.686 0-1.044-.08-1.289-.346-.16-.18-.256-.365-.256-.907v-1.5c0-.54.096-.727.256-.906.245-.266.603-.347 1.289-.347H9.43c.688 0 1.045.08 1.29.347.16.18.256.365.256.907v1.5m-1.594.267c.264 0 .356-.017.42-.074.06-.053.086-.12.086-.35v-1.187c0-.23-.026-.297-.085-.35-.065-.059-.157-.074-.42-.074H7.505c-.264 0-.357.015-.42.074-.06.053-.085.12-.085.35v1.187c0 .23.026.297.085.35.063.057.156.074.42.074h1.876m3.273-2.956v3.892h-1.207v-3.892h1.207m2.04 0h1.595l-2.152 1.82 2.427 2.072h-1.706l-2.204-2.03 2.04-1.861m2.092 0h1.208v3.891h-1.208m5.812 0l-.357-.678h-2.337l-.353.678h-1.334l2.14-3.892h1.502L24 13.954h-1.4m-2.275-1.523h1.5l-.75-1.41-.75 1.41' />
    </svg>
  );
});

export default Nokia;
