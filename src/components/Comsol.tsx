import * as React from 'react';

export type ComsolProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Comsol = React.forwardRef<SVGSVGElement, ComsolProps>(function Comsol({color = 'currentColor', size = 24, title = "comsol", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M15.53833 11.13097c-.11125.1301-.1384.3006-.1384.38725l.2974-.00005c0-.1475.0921-.2303.1478-.27135.0377-.0278.1422-.0786.2357-.0786.1468 0 .3338.0001.3338 0h1.22156l.00025.0001c.0725 0 .1312-.0589.1312-.13125 0-.0725-.0587-.13135-.1312-.13135h-1.16086c-.17195 0-.2702-.001-.43035-.001-.2305 0-.39225.0922-.5069.2263m4.72086-.2253h-.8968s-1.0709-.0563-1.0709 1.0941c0 1.15066 1.0709 1.09436 1.0709 1.09436h.8968s1.07075.0563 1.07075-1.09435c0-1.0479-.8884-1.09455-1.04675-1.09455-.0155 0-.024.00045-.024.00045m-1.68005 1.0941s-.0658-.83165.80665-.83165h.85c.8722 0 .8065.83165.8065.83165s.0657.83165-.8065.83165h-.85c-.87245 0-.80665-.83165-.80665-.83165m-8.49447-1.0941h-.8968s-1.0709-.0563-1.0709 1.0941c0 1.15065 1.0709 1.09435 1.0709 1.09435h.8968s1.07065.0563 1.07065-1.09435c0-1.0479-.8883-1.09455-1.0467-1.09455-.0154 0-.0239.00045-.0239.00045m-1.68015 1.0941s-.0658-.83165.8067-.83165h.85005c.8722 0 .80655.83165.80655.83165s.0657.83165-.80655.83165h-.85005c-.87245 0-.8067-.83165-.8067-.83165m-3.31101.00015c0 1.15065 1.07085 1.09435 1.07085 1.09435h1.44441c.002.00005.003.0005.005.0005.0725 0 .13125-.0588.13125-.1313 0-.0725-.0588-.1313-.13125-.1313v-.00055H6.18816c-.87245 0-.80665-.8317-.80665-.8317s-.0658-.83165.80665-.83165h1.42546s.00005.0001.0002.0001c.0725 0 .13125-.0589.13125-.13125 0-.0725-.0588-.13135-.13125-.13135H6.16466s-.009-.00045-.0241-.00045c-.1584 0-1.0468.0467-1.0468 1.0946m-2.60715-1.09455c-.17581 0-.31831.14255-.31831.31825v1.55225c0 .1758.1425.31825.31831.31825h1.23395c.1757 0 .3183-.14245.3183-.31825v-1.55225c0-.1757-.1426-.31825-.3183-.31825zm-2.16836 0c-.17575 0-.31825.14254-.31825.31824l.00005.0003c0 .00035-.00005.00065-.00005.001 0 .0756.0273.14415.0711.1988l.001.004 1.2323 1.5509.003.001c.0587.0693.1451.1141.2429.1141.00035 0 .0007-.0001.001-.0001l.00025.0001c.17575 0 .3183-.14245.3183-.31825v-1.55225c0-.1757-.14255-.31825-.3183-.31825zm21.49285.13175h-.00015v2.0578h2.0579v-.00015c.0725 0 .13115-.0588.13115-.1313 0-.0724-.0587-.1313-.13115-.1313H22.0735v-1.79505c0-.0725-.0588-.13135-.13125-.13135-.0725 0-.13115.0588-.13115.13135m-7.18002-.088-.0005-.00055-1.39595 1.39585-1.40976-1.40965-.001.001c-.0227-.0187-.0513-.0303-.083-.0303-.0725 0-.13115.0588-.13115.13135h-.00015v2.0578h.2626v-1.74165l1.27031 1.27015c.006.005.0114.009.0171.0129.004.002.007.004.0112.007.004.002.007.004.0109.006.002.00095.004.002.006.003.0386.0158.0728.01.0977-.001.00095-.00035.002-.0009.003-.001.007-.003.013-.006.0181-.01.001-.00085.003-.002.004-.003.0116-.008.0181-.0147.0181-.0147v.00015l1.2683-1.2682v1.74095h.2627v-2.0578h-.00015c0-.0725-.0587-.13135-.1311-.13135-.0386 0-.0728.0169-.0969.0433m.7691.5691c0 .0867.0272.2573.1384.38735.11465.134.2764.2264.5069.2264.16015 0 .2584-.001.43035-.001h.0163v.00025h.73801c.0935 0 .19795.0508.23575.0786.0557.0409.1477.1237.1477.27125h.2975c0-.0864-.0271-.2571-.13835-.38725-.11465-.13405-.27645-.2264-.50705-.2264-.1602 0-.25835.001-.4302.001h-.0164v-.00025h-.73796c-.0935 0-.19795-.0507-.2357-.0786-.0557-.041-.1478-.12385-.1478-.27145zm2.21341.96295c0 .1474-.092.2303-.1477.2712-.0378.028-.14225.0786-.23575.0786-.1467 0-.3339-.00015-.3339 0h-1.36481v.001c-.0725 0-.13125.0588-.13125.1313 0 .0725.0588.1312.13125.1312.004 0 .007-.0008.0111-.001h1.29301c.17185 0 .27.001.4302.001.2306 0 .3924-.0923.50705-.22635.11125-.13015.13835-.30075.13835-.3874z" />
    </svg>
  );
});

export default Comsol;
