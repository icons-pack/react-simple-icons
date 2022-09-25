import * as React from 'react';

export type SkodaProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Skoda = React.forwardRef<SVGSVGElement, SkodaProps>(function Skoda({color = 'currentColor', size = 24, title = "skoda", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M11.9587 0C5.332.023-.0228 5.4147.0001 12.0416.0229 18.6685 5.4146 24.0229 12.0415 24c6.6268-.0228 11.9813-5.4143 11.9584-12.0412C23.9771 5.332 18.5856-.0228 11.9587.0001zm.0415 2.1343c2.6354 0 5.1128 1.0264 6.9761 2.8896C20.84 6.8873 21.8661 9.3647 21.8661 12c0 2.635-1.0262 5.1125-2.8898 6.9759-1.8633 1.8632-4.3407 2.8894-6.976 2.8894-2.6355 0-5.113-1.0262-6.9764-2.8894C3.1603 17.1125 2.1341 14.635 2.1341 12c0-2.6353 1.0262-5.1127 2.8898-6.9761 1.8633-1.8632 4.341-2.8896 6.9763-2.8896zm.1142 1.1936a8.7615 8.7615 0 0 0-2.523.3687h-.0002c-.079.0239-.1383.0563-.18.097-.0415.0405-.0642.0902-.0677.1406-.007.1009.0547.1973.143.2733h.0001c.7772.6649 1.8207 1.6606 2.5574 2.8952-.413.0084-.739-.2201-1.0197-.4892h-.0002c-.9956-.9475-2.0316-1.6227-2.8543-2.0848-.1488-.0832-.3106-.1218-.467-.032l-.0002.0002c-.9073.5276-1.5223 1.0269-2.2427 1.8623-.0675.0784-.0848.1612-.06.2292.0249.068.0834.1165.1487.1512.7708.4087 1.9748 1.1835 3.086 2.1856-.0976.063-.2136.0912-.3677.0694-.1777-.0252-.3974-.1082-.6588-.2452h-.0002c-1.0182-.535-1.9967-.8426-2.7428-1.0347-.1735-.0445-.3665.0051-.4594.1663-.4796.8333-.8098 1.828-.966 2.837v.0003c-.033.215.1155.4078.3286.445.8651.1514 2.0661.4305 3.1122 1.1123 1.046.6818 1.9382 1.7635 2.1934 3.533.02.1418-.0343.2725-.1335.3483-.0994.076-.2443.1003-.4196.018-.5214-.2443-1.0423-.488-1.5631-.7324v-.0002h-.0002c-.0574-.0265-.1244-.0508-.1945-.0508H4.3061c-.1881 0-.3296.0926-.388.2247-.0582.1321-.0322.2995.0902.4397.5892.6785 1.1295 1.4106 1.5915 2.1862.0457.077.115.116.2045.116h1.0725a.42.42 0 0 0 .2201-.0601c.337-.1977.674-.3948 1.0119-.5923h.0002l.0002-.0002c.0518-.031.103-.0306.1764-.0306h8.0845c.0452 0 .0842.0146.1111.0382.027.0235.0432.0552.0432.0981v.3978c0 .17.1533.3002.321.2742h.0002a5.0752 5.0752 0 0 0 2.6729-1.3127.3163.3163 0 0 0 0-.462 5.0725 5.0725 0 0 0-2.673-1.313h-.0001c-.1678-.026-.321.1046-.321.2745v.3637c0 .0433-.0179.0933-.0462.1298-.0284.0366-.0644.0586-.1027.0586-.0794 0-.1576.002-.2352 0h-.0006c-.1224-.002-.187-.072-.2237-.173-.0367-.1009-.0357-.2311-.0102-.323.5962-2.138.7426-3.4376.7356-4.3853-.0074-1.003-.033-2.009-.4867-3.337-.435-1.2713-.8395-2.5304-2.9465-4.4383-.1484-.1335-.3048-.2013-.5048-.2158a7.9719 7.9719 0 0 0-.589-.0218zm1.5278 9.7045c.6249 0 1.1322.5073 1.1322 1.1322 0 .6236-.5073 1.1312-1.1322 1.1312-.6246 0-1.1308-.5076-1.1308-1.1312 0-.6248.5063-1.1322 1.1308-1.1322z" />
    </svg>
  );
});

export default Skoda;
