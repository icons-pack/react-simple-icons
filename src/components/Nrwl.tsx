import * as React from 'react';

export type NrwlProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Nrwl = React.forwardRef<SVGSVGElement, NrwlProps>(function Nrwl(
  { color = 'currentColor', size = 24, title = 'nrwl', ...others },
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
      <path d='M3.357 8.258a3.424 3.424 0 00-.845.123l.054-.02a3.437 3.437 0 00-.841.346 3.437 3.437 0 00-.262.168 3.437 3.437 0 00-.11.078 3.424 3.424 0 00-.025.022 3.437 3.437 0 00-.01.005 3.424 3.424 0 00-.103.084 3.437 3.437 0 00-.115.104 3.437 3.437 0 00-.05.045 3.424 3.424 0 00-.08.08 3.424 3.424 0 00-.099.107 3.437 3.437 0 00-.03.034 3.424 3.424 0 00-.071.086 3.437 3.437 0 00-.034.04 3.424 3.424 0 00-.066.088 3.437 3.437 0 00-.006.008 3.424 3.424 0 00-.072.1 3.437 3.437 0 00-.014.02 3.424 3.424 0 00-.082.132 3.424 3.424 0 00-.074.127 3.437 3.437 0 00-.012.026 3.424 3.424 0 00-.062.12 3.424 3.424 0 00-.067.143 3.424 3.424 0 00-.054.135 3.437 3.437 0 00-.008.02 3.424 3.424 0 00-.131.437 3.424 3.424 0 00-.031.152 3.424 3.424 0 00-.026.149 3.437 3.437 0 000 .013 3.424 3.424 0 00-.027.303A3.424 3.424 0 000 11.68a3.437 3.437 0 000 .04 3.424 3.424 0 00.004.124A3.424 3.424 0 00.016 12a3.424 3.424 0 00.015.14 3.437 3.437 0 00.01.057 3.424 3.424 0 00.018.108 3.437 3.437 0 000 .004 3.424 3.424 0 00.025.123 3.437 3.437 0 00.037.15 3.437 3.437 0 00.096.297 3.437 3.437 0 00.056.144 3.437 3.437 0 00.432.745c.014.02.025.024.04.043a3.424 3.424 0 00.007.01 3.424 3.424 0 00.305.33l.011.013c.1.09.16.132.137.129.008.006.02.01.03.018a3.424 3.424 0 00.017.017.711.711 0 01-.205-.08.683.683 0 00-.39-.088.696.696 0 00-.608.947 1.993 1.993 0 01.564-.12 2.088 2.088 0 01.34.007 1.707 1.707 0 00.283.006c.05-.004.098-.01.147-.018a1.714 1.714 0 00.584-.203 3.424 3.424 0 00.437.17 4.43 4.43 0 002.989-.193.528.528 0 00.115-.076.179.179 0 00.076.03l1.789.169v.863H8.75v-.734l1.12.105-4.204-.754a.111.111 0 00-.014-.004c-.01-.1-.095-.172-.13-.218a.134.134 0 01-.03-.07 1.64 1.64 0 00-1.496-1.52.504.504 0 00-.18-.193.503.503 0 01-.187-.4.56.56 0 00-.498.44 1.393 1.393 0 01-.377-2.222 1.798 1.798 0 011.312-.563A1.824 1.824 0 015.83 10.96a.914.914 0 01-.543.32.904.904 0 00-.736.748c.35 0 .585.477 1.236.477a.59.59 0 00.547-.367.592.592 0 00.549.367 1.17 1.17 0 00.49-.106v2.002l1.377.327v-1.592l2.193 2.605H12.1v-4.89h-1.38v2.605L8.53 10.852H7.373v.427c-.283-.05-.556-.255-.65-.52a3.424 3.424 0 00-3.366-2.501zM22.109 9.96v4.414c0 1.186.766 1.336 1.485 1.336.219 0 .406-.02.406-.02v-1.03s-.078.007-.164.007c-.305 0-.375-.12-.375-.453V9.96zm-6.816 1.932a2.057 2.057 0 00-.709.128 1.253 1.253 0 00-.535.385v-.453h-1.285v3.79h1.347v-1.74c0-.316.081-.551.244-.704.164-.154.39-.23.678-.23a2.937 2.937 0 01.307.017v-1.193a2.057 2.057 0 00-.047 0zm.584.06l1.094 3.787h1.306l.477-1.736.45 1.736h1.306l1.094-3.787h-1.186l-.54 1.932-.52-1.932h-1.15l-.542 1.912-.512-1.912zm-12.281 2.14c.03 0 .07.016.117.027.092.023.17.02.15.108a.171.171 0 01-.332-.08c.01-.044.033-.056.065-.055z' />
    </svg>
  );
});

export default Nrwl;
