import * as React from 'react';

export type CssmodulesProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Cssmodules = React.forwardRef<SVGSVGElement, CssmodulesProps>(function Cssmodules(
  { color = 'currentColor', size = 24, title = 'cssmodules', ...others },
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
      <path d='M19.705 2.147v19.706H0V2.147h19.705ZM.141 21.712h19.423V2.288H.141v19.424Zm2.561-10.444c.428 0 .76.113.996.338.236.225.367.482.393.768h-.446a.926.926 0 0 0-.303-.517c-.15-.128-.362-.191-.635-.191-.333 0-.602.117-.808.352-.204.233-.306.59-.306 1.074 0 .396.092.717.276.964.186.245.462.368.828.368.338 0 .595-.13.771-.389.094-.136.163-.316.21-.538h.446c-.04.356-.172.654-.396.895-.268.29-.63.434-1.086.434-.392 0-.722-.118-.989-.356-.35-.315-.527-.8-.527-1.456 0-.499.132-.907.396-1.226.285-.347.679-.52 1.18-.52Zm2.28 2.38c.01.192.056.348.135.467.152.224.42.336.803.336.172 0 .328-.024.47-.073.272-.095.409-.266.409-.511 0-.184-.058-.315-.173-.393-.116-.077-.299-.144-.547-.2l-.458-.104c-.299-.067-.51-.142-.635-.223-.214-.141-.322-.352-.322-.633 0-.303.105-.553.315-.747.21-.195.508-.292.893-.292.354 0 .655.085.902.257.248.17.372.443.372.82h-.43a.847.847 0 0 0-.147-.417c-.14-.177-.377-.265-.71-.265-.27 0-.465.057-.583.17a.533.533 0 0 0-.177.396c0 .166.07.287.207.364.09.049.295.11.614.184l.474.108c.229.052.405.123.53.214.214.158.321.387.321.687 0 .375-.136.642-.41.803a1.822 1.822 0 0 1-.947.242c-.42 0-.75-.108-.987-.322-.237-.213-.354-.502-.35-.867h.43Zm3.137 0c.011.192.056.348.136.467.152.224.42.336.803.336.171 0 .328-.024.469-.073.273-.095.41-.266.41-.511 0-.184-.058-.315-.173-.393-.117-.077-.3-.144-.548-.2l-.457-.104c-.3-.067-.511-.142-.635-.223-.215-.141-.322-.352-.322-.633 0-.303.105-.553.315-.747.21-.195.508-.292.892-.292.355 0 .655.085.902.257.249.17.373.443.373.82h-.43a.847.847 0 0 0-.148-.417c-.14-.177-.376-.265-.71-.265-.27 0-.464.057-.582.17a.533.533 0 0 0-.177.396c0 .166.069.287.207.364.09.049.295.11.614.184l.474.108c.228.052.404.123.529.214.214.158.322.387.322.687 0 .375-.137.642-.41.803a1.822 1.822 0 0 1-.947.242c-.42 0-.75-.108-.987-.322-.238-.213-.355-.502-.35-.867h.43Zm-6.197 3.6.97 2.857.965-2.857h.648v3.38h-.434v-1.995c0-.07.001-.183.004-.343.003-.16.005-.33.005-.513l-.964 2.85h-.453l-.97-2.85v.104c0 .083 0 .21.004.38.004.168.007.292.007.372v1.994h-.437v-3.379h.655Zm4.743-.091c.597 0 1.038.191 1.325.575.224.299.336.681.336 1.147 0 .505-.128.924-.384 1.259-.3.392-.73.589-1.286.589-.52 0-.929-.172-1.226-.516-.265-.33-.398-.75-.398-1.256 0-.457.113-.848.34-1.173.292-.417.723-.625 1.293-.625Zm.046 3.16c.403 0 .695-.144.874-.432.181-.29.272-.623.272-.999 0-.397-.105-.717-.313-.959-.207-.242-.49-.363-.851-.363-.35 0-.635.12-.856.36-.22.24-.331.594-.331 1.061 0 .375.094.69.283.948.19.256.497.384.922.384Zm3.455-.08c.155 0 .283-.017.382-.049a.84.84 0 0 0 .437-.345c.09-.136.156-.311.196-.524a2 2 0 0 0 .034-.355c0-.418-.083-.743-.25-.975-.166-.231-.434-.347-.803-.347H9.35v2.595h.816ZM8.89 17.247h1.368c.465 0 .825.165 1.081.495.229.297.343.679.343 1.143 0 .36-.067.683-.202.973-.238.512-.647.769-1.226.769H8.89v-3.38Zm3.88 0v2.089c0 .245.046.45.138.612.136.245.367.368.69.368.388 0 .652-.133.791-.398.076-.144.113-.338.113-.582v-2.089h.465v1.898c0 .415-.056.735-.168.96-.206.407-.594.61-1.164.61s-.958-.203-1.162-.61c-.112-.225-.168-.545-.168-.96v-1.898h.465Zm2.899 0Zm.458 0v2.977h1.711v.402h-2.17v-3.379h.459Zm2.208 0h2.463v.414h-2.017v1.026h1.865v.391h-1.865v1.146h2.052v.402h-2.498v-3.379Zm3.402 2.29c.01.19.056.347.135.466.152.224.42.336.803.336.172 0 .328-.025.47-.074.272-.095.409-.265.409-.51 0-.184-.058-.315-.173-.394-.116-.076-.299-.143-.547-.2l-.458-.103c-.299-.068-.51-.142-.635-.223-.215-.141-.322-.352-.322-.633 0-.304.105-.553.315-.748.21-.194.508-.292.893-.292.354 0 .655.086.901.258.249.17.373.443.373.819h-.43a.847.847 0 0 0-.147-.416c-.14-.177-.377-.265-.711-.265-.27 0-.464.057-.582.17a.533.533 0 0 0-.177.396c0 .165.069.287.207.363.09.05.295.11.614.184l.474.108c.228.053.405.124.529.214.215.158.322.388.322.688 0 .374-.136.642-.41.803a1.822 1.822 0 0 1-.947.241c-.42 0-.75-.107-.987-.322-.238-.213-.354-.502-.35-.867h.43Z' />
    </svg>
  );
});

export default Cssmodules;
