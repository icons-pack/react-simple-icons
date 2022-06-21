import * as React from 'react';

export type WixProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Wix = React.forwardRef<SVGSVGElement, WixProps>(function Wix(
  { color = 'currentColor', size = 24, title = 'wix', ...others },
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
      <path d='M13.731 7.509c-.476.249-.653.67-.653 1.832 0 0 .241-.233.598-.363.26-.094.483-.237.612-.331.401-.295.464-.674.464-1.312 0 0-.656-.018-1.021.174m-2.82.272c-.388.342-.502.887-.502.887l-1.284 4.975L8.057 9.57c-.104-.433-.291-.968-.588-1.33-.378-.46-1.146-.49-1.228-.49-.082 0-.85.03-1.228.49-.296.362-.484.897-.588 1.33l-1.068 4.072-1.284-4.975s-.113-.545-.5-.887C.942 7.227 0 7.345 0 7.345l2.459 9.297s.811.059 1.217-.148c.533-.272.787-.482 1.11-1.747.287-1.127 1.091-4.44 1.166-4.676.038-.116.085-.395.29-.395.208 0 .252.278.288.395.074.236.88 3.549 1.167 4.676.323 1.265.576 1.475 1.11 1.747.405.207 1.216.148 1.216.148l2.46-9.297s-.943-.118-1.572.436m3.84 1.082s-.154.238-.505.434c-.225.126-.441.212-.674.323-.388.186-.494.394-.494.71V16.643s.62.079 1.027-.128c.522-.266.642-.523.647-1.68V9.2h-.001zm6.13 3.153L24 7.376s-1.317-.224-1.969.369c-.417.38-.883 1.063-.883 1.063L20 10.463c-.056.086-.13.18-.245.18-.117 0-.19-.094-.245-.18l-1.148-1.655s-.467-.683-.884-1.063c-.652-.593-1.969-.37-1.969-.37l3.12 4.641-3.112 4.626s1.372.174 2.024-.42c.417-.38.82-.998.82-.998l1.149-1.654c.055-.086.128-.18.245-.18.116 0 .189.094.245.18l1.148 1.654s.427.618.844.998c.652.594 2 .42 2 .42Z' />
    </svg>
  );
});

export default Wix;
