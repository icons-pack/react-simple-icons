import * as React from 'react';

export type JfrogbintrayProps = {
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

const Jfrogbintray = React.forwardRef<SVGSVGElement, JfrogbintrayProps>(function Jfrogbintray(
  { color = 'currentColor', size = 24, title = 'jfrogbintray', ...others },
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
      <path d='M2.617 22.316h18.766V24H2.617zm15.88-12.632l-5.655 5.655V3.249l1.744 1.743L15.79 3.79 12 0 8.21 3.79l1.204 1.203 1.744-1.804v12.15L5.504 9.686H7.97V8H2.617v5.354H4.3v-2.527L12 18.526l7.698-7.699v2.527h1.685V8H16.03v1.684z' />
    </svg>
  );
});

export default Jfrogbintray;
