import * as React from 'react';

export type NewjapanprowrestlingProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Newjapanprowrestling = React.forwardRef<SVGSVGElement, NewjapanprowrestlingProps>(function Newjapanprowrestling(
  { color = 'currentColor', size = 24, title = 'newjapanprowrestling', ...others },
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
      <path d='M11.9512.086c-1.077-.0042-2.138.1536-3.2598.4765-3.1728.9132-6.0065 3.2281-7.4238 6.0645C.7026 7.7576.2748 9.104.084 10.3555c-.122.7997-.1093 2.422.0254 3.2988.204 1.3276.5618 2.4989 1.08 3.5371.613 1.2278 1.3377 2.2339 2.295 3.1875 2.0144 2.0068 4.5781 3.207 7.502 3.5098.516.0534 1.8752.0179 2.4784-.0645 4.4084-.602 8.0407-3.3656 9.6973-7.377 1.0647-2.578 1.1187-5.86.1406-8.5058-.214-.5792-.735-1.6407-1.0586-2.1562-1.1513-1.8339-2.7493-3.3111-4.6503-4.2989-1.1383-.5914-2.307-.9802-3.67-1.2187-.6734-.1179-1.3264-.1791-1.9726-.1817zM12 .293C18.4656.2929 23.7071 5.5344 23.707 12c.0001 6.4656-5.2414 11.7071-11.707 11.707C5.5344 23.7071.2929 18.4656.293 12 .2929 5.5344 5.5344.2929 12 .293zm-.0977.211c-.4362 0-.8606.0175-1.162.0526-3.219.3759-6.207 2.0933-8.1465 4.6836-.7784 1.0395-1.519 2.592-1.8594 3.9004-.2537.975-.316 1.5127-.3184 2.7285-.0026 1.1802.0278 1.5167.2324 2.5235.6782 3.336 2.987 6.3118 6.0957 7.8574 1.4303.7111 2.5641 1.0363 4.334 1.2441.4089.048 2.0231-.0161 2.5918-.1035 3.3062-.5077 6.2026-2.323 7.998-5.0097.4164-.623 1.0278-1.804 1.2676-2.4493.2159-.5805.4483-1.4988.5567-2.205.1189-.7733.1205-2.6195.0039-3.3711-.386-2.4888-1.4827-4.6625-3.2422-6.4258C18.4323 2.1042 16.1143.9698 13.418.584c-.3318-.0475-.8277-.0743-1.328-.08-.0626-.0006-.1252-.0001-.1876 0zm-.0214.1132c1.978-.005 3.6378.39 5.4082 1.2871 1.9472.9868 3.5574 2.4926 4.6386 4.3398 1.0733 1.8337 1.5503 3.5975 1.5528 5.7403.0022 1.9101-.3173 3.314-1.1192 4.9277-.9565 1.9248-2.1858 3.3401-3.9023 4.4922-2.1542 1.4459-5.0237 2.185-7.4942 1.9297-2.242-.2318-4.3124-1.0662-6.125-2.4668-.533-.412-1.4222-1.3038-1.8867-1.8945-.6793-.864-1.3476-2.0494-1.709-3.0274-.856-2.3164-.9417-5.0791-.2265-7.2637.166-.5073.5672-1.4967.7715-1.9023C3.2286 3.9208 6.1649 1.6685 9.4727.8867c.8634-.204 1.426-.267 2.4082-.2695zm.0742.211a10.468 10.468 0 0 0-1.5176.1054c-1.6792.241-3.2519.8494-4.7598 1.8457-1.314.8682-2.5774 2.1722-3.3593 3.4668-.4993.8265-1.0375 2.1287-1.2852 3.1094-.436 1.7261-.4038 3.7046.0879 5.5683.7758 2.9405 2.9217 5.577 5.6914 6.9903 1.4378.7336 2.6668 1.0765 4.496 1.2558.3503.0343.967.0269 1.4903-.0176 1.5456-.1313 2.83-.4865 4.2207-1.166 2.1851-1.0676 3.886-2.723 5.0176-4.8867.8483-1.6218 1.2116-3.1291 1.2149-5.0469.0036-1.8951-.3145-3.2833-1.127-4.9199-.934-1.8813-2.1112-3.227-3.8125-4.3633C16.4371 1.5171 14.1689.8347 11.9551.8281zm.668.4628c.0771.0005.1582.0076.2421.0215.3698.0613.4664.151.4961.461l.0235.2324h-.2325c-.2056 0-.233-.0101-.246-.1016-.0126-.088-.048-.1052-.2344-.1172-.1695-.0108-.2234.0016-.2461.0606-.0382.0995.0352.1418.3203.1796.4688.0622.627.211.627.5938 0 .3001-.0778.4681-.252.5508-.1808.0858-.6601.0936-.8945.0136-.1742-.0594-.3212-.2846-.3203-.4902.001-.1972.0589-.2439.2656-.209.1437.0243.1883.0545.1992.1309.0255.1777.543.2038.543.0273 0-.111-.105-.1606-.4121-.1953-.2952-.0333-.4671-.1434-.5235-.3398-.0551-.1923.0064-.5494.1113-.6543.1083-.1083.3017-.1657.5332-.164zm1.4921.1934c.0376-.0016.1994.0262.3926.0683.8259.1802.9297.2495.9297.6211 0 .3053-.152.7182-.2988.8145-.138.0903-.294.0911-.6192.0039a11.1334 11.1334 0 0 0-.2617-.0684c-.0053-.0002-.0352.124-.0664.2754-.061.295-.0752.3038-.3496.2246-.082-.0236-.1484-.0587-.1484-.0781s.0935-.4421.207-.9375c.1135-.4953.205-.91.205-.9219 0-.0016.004-.0017.0098-.002zm-3.1308.2597l.0312.1602c.0356.1899-.0029.2211-.3125.2637-.153.021-.2207.053-.2207.1015 0 .0569.041.0642.2188.039.1198-.0168.2527-.0417.2968-.0546.0671-.0196.0801.0063.0801.1602v.1836l-.2676.0527-.2675.0547.0332.1894c.0395.216.0059.257-.213.2578l-.1425.002-.0996-.6035c-.0551-.3315-.0934-.6098-.084-.6192.0094-.0093.2267-.0566.4824-.1035zm3.5605.3672c-.0357.0005-.0624.0055-.0742.0176-.0202.0207-.0426.0998-.0508.1738-.012.1102.0057.1391.0996.166.2444.0701.3667.0473.4239-.078.0462-.1015.0411-.1277-.0274-.1778-.0788-.0576-.2636-.1032-.371-.1016zm-5.1094.0332c.1902-.0004.2305.017.3282.1485.2447.3296.2873.7501.0957.9277-.1982.1837-.6005.2891-.8496.2227-.1057-.0283-.3126-.4266-.3457-.668-.0171-.1244-.006-.2444.0273-.3066.0784-.1464.4845-.3237.7441-.3243zm6.8028.0743c.1818-.0077.6077.1349.7851.2695.2143.1625.2729.3427.207.6367-.0637.2848-.4073.8958-.582 1.0332-.1536.1209-.3776.1207-.6914 0-.145-.0558-.3044-.1644-.4082-.2793-.1584-.1753-.1675-.2007-.1406-.3984.0647-.4746.5279-1.2056.7969-1.2578a.2675.2675 0 0 1 .0332-.004zm-9.1133.2578a.4542.4542 0 0 1 .0293 0c.1549.0048.2816.0887.3984.2539l.1192.1699-.1934.121c-.1915.1188-.1972.12-.2715.0333-.0732-.0852-.0797-.0855-.2148-.0059-.2115.1246-.2863.2246-.2559.3457.037.1472.3888.6309.459.6309.1087 0 .4434-.2506.4434-.332 0-.1066-.0715-.103-.2325.0117l-.1289.0937-.1191-.1738c-.0645-.0949-.1172-.187-.1172-.205 0-.036.6259-.4494.6797-.4493.0341.0001.2826.3589.3711.5352.0277.055.0508.1834.0508.2851 0 .2384-.1724.4412-.543.6387-.2828.1507-.3733.1686-.545.0996C6.7892 4.4225 6.17 3.5256 6.17 3.248c0-.1842.1325-.3588.414-.5468.2168-.1447.3925-.2197.5411-.2246zm2.2754.0898v.002a.0385.0385 0 0 0-.0098 0c-.0254.0035-.0788.0181-.1386.039-.1568.0547-.1744.1099-.0918.291.0524.1151.1446.1445.287.0899.1032-.0396.081-.2667-.041-.42-.0008-.001-.0033-.0018-.0058-.0019zm6.961.1895c-.056.0016-.106.0176-.1426.0507-.1368.1238-.3423.6268-.291.711.0469.077.3224.2323.412.2324.0296 0 .1259-.1174.2149-.2598.2247-.3592.254-.5113.1152-.6172-.104-.0793-.2155-.1196-.3086-.1171zm1.6933.3984c.0649 0 .8704.6498.92.7422.038.0709.0359.1423-.004.2754-.0644.215-.3438.541-.4648.541-.0602 0-.088.0321-.088.1074 0 .0595-.068.1997-.1523.3106-.0843.1108-.1788.2479-.209.3046-.0718.1355-.109.131-.3027-.039l-.1621-.1426.17-.2305c.1848-.2518.1783-.298-.0509-.4687l-.125-.0938-.125.1387c-.0683.0764-.1576.1886-.1992.248l-.0762.1075-.1835-.1465-.1836-.1445.6015-.7559c.331-.4154.6173-.7539.6348-.7539zm-12.5664.3203c.0175 0 .3142.3215.6601.7149l.629.7148-.1973.2031c-.1093.1113-.2294.2012-.2656.2012-.0363 0-.2852-.1165-.5528-.2598-.5222-.2795-.5226-.278-.0644.2422l.287.3242-.1503.1446c-.0825.08-.1693.1449-.1934.1445-.024-.0005-.3271-.3247-.6738-.7207l-.6309-.7188.1407-.1445c.2801-.2888.2994-.289.8418-.0058.2672.1395.4843.2421.4843.2285 0-.0136-.1487-.2007-.33-.416l-.3282-.3926.1563-.129c.0857-.0715.17-.1308.1875-.1308zm6.375.1856c.6706-.0037 1.4059.044 1.8476.1328 2.8455.5713 5.2931 2.6925 6.2364 5.4023.8627 2.4785.431 5.5672-1.0586 7.5625-.3526.4723-1.1346 1.2917-1.5703 1.6465-1.037.8444-2.2867 1.4302-3.6407 1.705-.4463.0907-.7341.1163-1.4511.131-.492.01-1.051-.0002-1.2403-.0235-.6397-.079-1.3257-.2293-1.7949-.3926-2.0118-.7002-3.853-2.3503-4.8105-4.3086-.3855-.7882-.6284-1.6879-.7325-2.7226-.3118-3.0993 1.067-6.0203 3.6641-7.7657 1.0734-.7213 2.087-1.099 3.4902-1.3027.278-.0403.6582-.062 1.0606-.0644zm.162.1386c-.6451.0038-1.3467.0508-1.744.1309-1.6264.3279-3.0926 1.1566-4.3028 2.4297-.5824.6127-.9884 1.1919-1.3672 1.955-.4796.9663-.7137 1.7695-.83 2.8438-.0704.6499-.0246 1.7769.0957 2.3828.4794 2.416 2.1868 4.6351 4.4257 5.75.7186.3578 1.7392.6595 2.668.7871.4517.062 1.9826.0245 2.4238-.0586 1.8616-.3504 3.3904-1.1617 4.623-2.457.6426-.6751.9852-1.1597 1.3673-1.9297.9571-1.9288 1.1321-4.3693.453-6.3144-.211-.605-.6904-1.5427-1.041-2.0352-.3464-.4869-1.1029-1.2924-1.5644-1.668-1.228-.9994-2.6176-1.5887-4.1836-1.7734-.2697-.0318-.6363-.0454-1.0234-.043zm6.0704.0528c-.0258.0032-.0508.0296-.0918.084-.0837.111-.0825.1121.0625.2363.172.1473.2864.161.3496.043.0462-.0863.0086-.1374-.2422-.3282-.0282-.0214-.0481-.0327-.0664-.0351a.0499.0499 0 0 0-.0117 0zm1.4668.4863l.3945.414c.217.2282.4383.4691.4903.5352l.0937.1211-.1758.1797-.1757.1797-.166-.1602c-.0906-.0883-.1788-.1601-.1973-.1601-.0185 0-.267.2148-.5528.4785l-.5195.4805-.1504-.1543c-.0823-.0849-.142-.176-.1328-.2012.0091-.0253.2331-.2488.498-.4961.265-.2474.4868-.4712.4942-.498.0071-.027-.0485-.1084-.125-.1817s-.1372-.1548-.1348-.1816c.0023-.0269.0837-.117.1817-.2012zm-8.7363.2012c.1829.0034.384.0516.5761.1562.2709.1474.4227.3257.5235.6113.0838.2375.0942.8316.0156.9102-.0801.0801-.3166.067-.4531-.0254-.065-.044-.2087-.1547-.3203-.246-.1116-.0915-.2966-.2063-.4102-.256-.2447-.1069-.5294-.406-.5723-.6015-.0751-.3424.2383-.5562.6407-.5488zm2.4316.0976a1.0885 1.0885 0 0 1 .0488 0c.1125.0025.2148.0245.295.0684.3064.1679.3463.5699.0879.8984-.0532.0676-.2958.2233-.5391.3457-.2433.1224-.4935.2762-.5547.3418-.1398.1502-.1682.1502-.248-.0058-.1804-.3525-.1204-1.0523.1132-1.3184.172-.196.5082-.3227.797-.33zm-3.918.2031c.0476 0 .0971.0015.1504.004.333.0167.8226.8903.6153 1.0976-.0726.0726-.2901.0657-.5176-.0176-.1008-.0369-.3721-.0873-.6035-.1113-.4962-.0514-.65-.1103-.6895-.2676-.0244-.0971.0076-.1482.1934-.3164.3102-.2809.5184-.3801.8515-.3867zm5.2598.0567c.1605 0 .3072.0403.504.1387.3169.1583.668.5066.625.6191-.041.1065-.3495.2486-.6974.3223-.3467.0735-.4294.0765-.6406.0156-.203-.0586-.3298-.2746-.33-.5606-.0002-.192.0216-.2443.1562-.3789.1353-.1353.1862-.1562.3828-.1562zm-10.7773.1523a.134.134 0 0 1 .0215 0c.1106.0093.2927.1683.7597.5606.4072.342.7402.6372.7402.6562 0 .0191-.0664.1004-.1484.1797l-.1484.1445-.748-.6191-.7462-.6191.0899-.129c.0725-.1018.1145-.1672.1797-.1738zm-.588.7207c.0141 0 .132.2156.2637.4805l.2403.4824h.5742c.3155 0 .5742.01.5742.0215 0 .0116-.0577.114-.127.2285l-.125.209h-.4824l-.4824.002.3184.205c.1746.1132.3256.2144.336.2246.0221.0223-.1856.3931-.2188.3907-.0126-.001-.3814-.2171-.8203-.4805-.439-.2634-.8076-.4872-.8184-.498-.0317-.0318.1897-.3954.2402-.3946.0253.0005.1574.0725.295.1602.1376.0876.2686.1601.291.1601.0223 0-.0455-.1588-.1524-.3535l-.1953-.3535.1309-.2441c.0717-.1326.1436-.239.1582-.2403zm13.0196.047a.9193.9193 0 0 1 .041 0 2.719 2.719 0 0 1 .1465.0077c.8078.0578.9529.5762.4453 1.584-.2305.4577-.4145.5753-.5586.3555-.1124-.1716-.0507-.3194.2754-.6602.3298-.3446.3926-.448.3926-.6387 0-.217-.1312-.3382-.3926-.3613-.3467-.0306-.6003.1184-.7812.459-.1759.3311-.264.4137-.5137.4844-.2402.0679-.2826.1566-.1524.3183.2105.2615.2163.3101.0547.4942-.1102.1251-.1409.1933-.1172.2656.0176.0535.0426.1732.0547.2656.0293.2215-.0784.2917-.578.379-.257.0448-.5346.1394-.8673.2949-.2696.126-.5304.2359-.5781.244-.1712.0294-.2764.2444-.2715.5548.0022.1574.0073.5961.0098.9746l.0058.6875-.1386.125c-.1616.147-.5918.2827-.797.252-.0795-.012-.209-.0489-.289-.082-.12-.0498-.1589-.0498-.2187 0-.1239.1027-.0887.3192.0722.455.3728.3144.4532.4112.4532.545 0 .1415.1337.2421.3242.2421.0827 0 .0878-.0213.0605-.2266-.03-.2261-.0293-.227.2012-.4394.1269-.1169.2448-.2682.2617-.336.0499-.1998.1543-.2775.5371-.3984.6272-.1981 1.1624-.1237 1.5254.211.2418.2228.3222.4685.291.9023-.0243.3384-.1522.641-.3457.8203-.1653.1532-.1953.1368-.1953-.0996 0-.1733-.0173-.2141-.1035-.2461-.181-.0672-.7138-.0893-.789-.0332-.0384.0286-.0914.166-.1172.3047-.0292.1565-.1094.3423-.211.4902-.1724.251-.4605.5047-.5136.4512-.0173-.0174-.0313-.2399-.0313-.4922 0-.4245-.0089-.4651-.1074-.545-.15-.1214-.3818-.1536-.711-.0995-.2188.0359-.3175.032-.4336-.0157-.1798-.0739-.2781-.0451-.3125.0918-.0224.0897.0716.7485.1465 1.0254.035.1292-.0431.1334-.2363.0157-.0773-.0472-.2797-.2392-.4492-.4278l-.3086-.3437-.3691-.0528c-.6671-.0943-1.1044-.4101-1.4102-1.0195-.0922-.1837-.209-.36-.2598-.3926-.1409-.0905-.3079.0128-.3808.2364-.0474.1452-.108.2108-.2969.3203-.1305.0757-.2986.2247-.375.33-.0764.1054-.1684.2038-.2031.2188-.0915.0394-.1902-.0615-.295-.2969-.1172-.2634-.1688-1.2899-.0761-1.5136.037-.0896.1974-.2433.4433-.422.2623-.1905.416-.3384.4786-.4609.0506-.0992.0846-.1887.0742-.1992-.0105-.0105-.1007.0457-.1992.125-.0985.0794-.329.215-.5118.3028-.3808.1825-.5028.1771-.7011-.0352l-.125-.1348-.0489.125c-.0265.069-.0608.1988-.078.2871-.0517.2643-.144.395-.4278.6133-.1484.1142-.4352.3842-.6367.5996-.2016.2155-.3977.3926-.4356.3926-.0797 0-.1074-.1912-.1543-1.0351-.045-.8107.0669-1.3145.3809-1.7051.2303-.2866.6233-.4554.9375-.4024.2347.0397.3144.1283.3144.3438 0 .4369.0938.4182.3242-.0645.19-.398.2678-.4788.5528-.5722.1803-.0591.352-.2146.2969-.2696-.0188-.0187-.1811-.0332-.3614-.0332-.2923 0-.329-.01-.3418-.0918-.0504-.3236-.0426-.321-.2597-.0976-.1337.1375-.2677.224-.4004.2597-.216.0582-.5875.2345-.7813.3711-.067.0473-.1575.086-.2012.086-.1308 0-.0554-.329.1348-.5938.0898-.125.2346-.3709.3223-.5449.2719-.54.4997-.7422.832-.7422.1517 0 .1726.0165.2383.1836.0396.101.0997.1836.1328.1836.12 0 .1546-.1636.1094-.5117-.113-.8709-.0217-1.3302.2949-1.4805.2857-.1355.4506-.0852 1.0313.3125.3505.2401.3932.2578.6445.2578.1479 0 .451-.045.6738-.0996.3111-.0763.5535-.1002 1.0469-.1035.612-.0037.6558.0023.918.125.5138.2406.6435.4459.5703.9004-.0253.1556-.0328.3015-.0176.3262.0786.1272-.054.36-.4219.7363-.257.263-.3774.418-.3594.4648.0216.0563.139.0731.586.0899.6013.0226.7231-.0035.8164-.1778.0521-.0974.0465-.1374-.039-.3046-.1195-.2334-.1812-1.0679-.1016-1.3633.0986-.3662.4848-.6467 1.1093-.8067.2165-.0554.3734-.065.6328-.039.817.0817.885.0714 1.504-.2246.4139-.198.5293-.251.6894-.2559zm4.4023.1347c.3 0 .648.4588.6504.8554.001.1616-.022.213-.162.336-.0908.0796-.1896.1363-.2188.127-.0292-.0094-.0941-.094-.1445-.1876-.077-.1427-.0817-.175-.0274-.209.0537-.0335.0553-.0649.0078-.1796-.0778-.1879-.1957-.2888-.2773-.2383-.0534.033-.0384.096.082.3574.2368.5138.1856.683-.2773.9297-.2775.1479-.3894.1216-.6524-.1504-.2259-.2336-.3457-.4835-.3457-.7227 0-.1132.3404-.4744.4219-.4472.026.0087.0915.0902.1445.1816.0906.1562.092.172.0196.252-.0725.08-.0706.0964.0253.2675.0562.1002.1362.189.1797.1973.1453.028.145-.1334-.0039-.4355-.0795-.1614-.1466-.3274-.1465-.3711.0005-.2471.4065-.5625.7247-.5625zm-13.5156.3672c-.1115-.0036-.2043.028-.2558.1015-.1045.1492-.0945.6178.0214.9278.081.2163.2639.44.3594.4394.0155 0 .157-.1154.3145-.2558.4129-.3684.4582-.6258.164-.92-.182-.182-.4176-.2872-.6035-.293zm10.4219.5664c.063.0045.142.0749.2637.2129.2875.326.2756.348-.2227.4355-.0694.0122-.161.0005-.205-.0254-.101-.0595-.1024-.234-.004-.4414.0593-.1248.105-.1866.168-.1816zm.3555 1a.078.078 0 0 1 .0136 0c.0366.0023.0895.0214.1817.0566.2648.1012.647.4413.7754.6895.105.203.1389.6304.0566.7128-.1076.1078-.3205.0963-.6055-.0332-.4965-.2256-.6093-.3979-.6093-.9218 0-.2413.021-.3417.086-.4219.0425-.0526.0642-.0787.1015-.082zm-.9492.037c.072.0025.1563.0472.248.1329.142.1327.289.5265.3008.8066.0063.1507-.0785.1895-.2696.125-.0504-.017-.177-.0763-.2832-.1328-.215-.1146-.2757-.2755-.2304-.6133.0285-.2128.1142-.3224.2343-.3183zM2.4863 8.625a.736.736 0 0 1 .504.1855c.2914.256.362.5862.1972.9239-.171.3502-.6218.521-.9648.3672-.5232-.2347-.6589-.8075-.2891-1.2168.1523-.1686.3514-.2557.5527-.2598zm18.9473.002c.2126.0028.427.0904.582.2714.089.104.1687.2576.1856.3575.0944.5588-.4486 1.0372-.9903.873-.4594-.1394-.6788-.6648-.457-1.0996.1363-.2672.4064-.4056.6797-.4023zm-12.789.1699c-.1498 0-.2735.009-.2735.0195 0 .0106.043.266.0937.5684.1894 1.1284.3796 1.3672 1.2696 1.5859.7732.19.8647.262.8281.666-.0177.1955-.0071.2984.041.3672.0568.0818.1543.1319.1543.08 0-.0088-.023-.082-.0508-.162-.038-.11-.0366-.1617.0059-.213.04-.048.0462-.1671.0234-.41-.0287-.3071-.0214-.3532.0684-.4747.0928-.1256.0957-.1536.045-.3984-.0344-.1654-.0435-.3972-.0235-.623.0305-.3445.0283-.3644-.084-.4766-.0976-.0977-.16-.1172-.373-.1172-.1933 0-.3225-.0342-.5294-.1387-.3208-.162-.8116-.2734-1.1953-.2734zm-6.1973.0625c-.3467.0262-.5894.4492-.4375.7578.1581.3328.6813.4101.9062.1113.19-.2348.1377-.6352-.1387-.7793-.0838-.0572-.1857-.0874-.287-.0898a.7507.7507 0 0 0-.043 0zm18.9375.002c-.3742.0128-.623.5-.4102.8085.1685.2647.5805.3482.8106.125.2322-.1958.254-.5957.0117-.789-.117-.0941-.2602-.152-.4121-.1446zm-6.0118.1874c.0063 0 .0101.0003.0118.002.0444.042-.2926 1.0344-.418 1.2304-.2426.3795-.6496.5088-1.2266.3887-.1135-.024-.2941-.0327-.4004-.0195l-.1933.0254.0273-.3086c.0285-.3192.0949-.5027.2188-.6055.0632-.0524.0722-.0368.0722.127 0 .2729.0642.4038.2715.541.3099.205.696.119.9453-.209.1168-.1534.1225-.56.0098-.7793-.0444-.0867-.0653-.173-.045-.1934.0395-.0394.6319-.1993.7266-.1992zm-6.6054.0235c.016 0 .1083.0224.2031.0507l.1719.0528-.0938.1562c-.0745.1264-.087.2039-.0644.3946.0648.5476.5584.8194 1.0683.5879.1818-.0826.4297-.3453.4297-.4551 0-.0292.0196-.0528.043-.0528.0928 0 .1768.1421.207.3516.0175.121.0421.2635.0547.3164.0214.0901-.0019.0989-.3594.127a75.8431 75.8431 0 0 0-.6113.0507c-.1261.0114-.2976.004-.3828-.0175-.323-.0815-.521-.3073-.625-.713-.0693-.2702-.0973-.8495-.041-.8495zm8.1758.0488c.122-.0007.2776.0998.4062.2851.1269.183.129.1896.129.918 0 .5025-.0176.7401-.0528.752-.0284.0095-.1641-.0862-.3028-.213-.3675-.3359-.4682-.595-.4316-1.1112.0155-.2189.0523-.4505.082-.5157.0355-.0779.0967-.1148.17-.1152zm-7.4141.1836c.0312 0 .068.0029.1133.0078.5132.0579.7403.5338.3652.7656-.2277.1407-.4132.1231-.6015-.0547-.1013-.0956-.1687-.2097-.1875-.3183-.0252-.1442-.0128-.1885.0917-.293.0802-.0802.1253-.1074.2188-.1074zm4.7187.0957a.1927.1927 0 0 1 .0215 0c.0492.002.0872.0247.1485.0703.0925.0688.1285.1386.1386.2734.0258.3416-.129.5428-.457.5957-.1242.02-.1742.0017-.2617-.0918-.0682-.0727-.1183-.193-.1328-.3222-.0198-.1757-.006-.2225.0918-.3203.063-.063.1998-.1405.3047-.172.0644-.0192.1099-.0306.1464-.0331zm-4.5722.1367c-.1218.0049-.2031.0804-.2031.1973 0 .2309.328.3019.4238.0918.0692-.152.0032-.267-.166-.2871a.3479.3479 0 0 0-.0547-.002zm8.3515.004c.052-.0007.1237.0182.2207.0526.4495.1595.9294.5877 1.125 1.004.2448.5205.2464 1.447.004 1.6894-.1503.1503-.2767.105-.6915-.246-.216-.183-.47-.3904-.5644-.463-.1919-.1476-.3421-.437-.3438-.6582-.0004-.0804.0312-.284.0704-.4531.0392-.1692.066-.4273.0586-.5742-.0125-.2507.0067-.35.121-.3516zm-3.9218.1269c-.1546 0-.2285.0784-.2285.2402 0 .092.0304.1408.1035.17.1152.0457.269.0173.3203-.0606.0517-.0786.0417-.2336-.0196-.295-.0302-.0302-.1102-.0546-.1757-.0546zm2.6582 1.2851c.1257 0 .4066.335.4472.5352.0528.2601.0383.7378-.0293 1.0234-.0712.3012-.228.6875-.2793.6875-.0201 0-.1187-.094-.2187-.211-.2766-.3235-.3157-.4936-.1973-.8359.0532-.1536.107-.399.1211-.5449.0593-.614.069-.6543.1563-.6543zm-15.6856.088l.2871.0253c.3525.0308 1.6593.1152 1.7832.1152.0816 0 .0905.0274.0782.2832l-.0137.2832-.5723.2247c-.3147.1231-.5833.2336-.5957.246-.0124.0125.2529.008.588-.0097l.6073-.0313-.0136.1993-.0137.2011-.873.0782c-.4794.043-.9592.0882-1.0665.0996l-.1953.0195.002-.3496v-.3496l.6933-.2285c.8011-.2648.7928-.2876-.1093-.295l-.586-.0039v-.2539zm21.002.3066c.0255 0 .051.0014.0761.002.2016.0045.3906.0285.4708.0722.2212.1207.2628.2347.2636.7226.0014.5377-.0844.7247-.3691.8106-.2347.0711-.6487.068-1.0527-.0059-.5222-.0956-.65-.1682-.713-.4004-.0588-.2172-.0323-.7133.047-.8613.0611-.1143.281-.2305.4355-.2305.1075 0 .1172.0163.1172.2012 0 .162-.0183.2054-.0918.2246-.1332.0348-.1986.2402-.1367.4277.0409.124.0813.1585.2187.1875.2444.0516.7341.032.8125-.0332.091-.0754.0929-.5184.002-.5937-.1308-.1085-.2309-.0374-.2461.1738l-.0157.1973-.2148-.0156-.2148-.0137v-.7715l.1386-.041c.1163-.034.2947-.0503.4727-.0508zm-15.8965.4296c.0365 0 .0892.0576.1172.127.1016.2526.2375.9145.2656 1.2969.0339.4608-.001.5518-.3574.9453-.1273.1405-.2921.3931-.3672.5605-.2057.4584-.3168.5502-.4629.3848-.1892-.2142-.4922-1.2249-.4922-1.6387 0-.2436.1795-.7056.3594-.9238.162-.1966.8537-.752.9375-.752zm11.6797.0957c.036-.0007.0773.015.127.043.1769.1.7345.852.8495 1.1465.1433.3673.1418.9035-.0039 1.2285-.1083.2418-.281.4219-.4023.4219-.0352 0-.2606-.1904-.502-.4238-.6047-.585-.6982-.7864-.539-1.1641.0412-.0977.131-.4035.1992-.6797.1036-.4192.1636-.5698.2715-.5723zm-14.67.8829c.0166 0 .0258.0003.0274.002.0263.0263.2487 1.0967.2305 1.1093-.0054.0037-.0977.0283-.2051.0547-.2198.054-.1855.1029-.3008-.42-.0617-.28-.1015-.3297-.209-.2617-.0517.0327-.0495.0985.0117.3946.0404.1952.0743.3617.0743.3691 0 .0249-.464.124-.4844.1035-.011-.011-.0563-.1883-.0996-.3945-.0754-.3585-.0834-.375-.2031-.375-.0689 0-.1368.019-.1504.041-.0138.0222.0155.2216.0644.4453.049.2238.0745.4199.0567.4356-.0442.039-.47.1797-.545.1797-.0333 0-.0605-.0125-.0605-.0274 0-.0148-.0749-.348-.164-.7402-.0892-.3922-.156-.7189-.1485-.7246.0324-.026 1.8587-.1898 2.1055-.1914zm4.8965.168c.0963 0 .1027.0111.2657.4824.0781.226.1684.3813.3086.5273.248.2583.3496.4098.3496.5195 0 .1172-.5891.9942-.668.9942-.035 0-.1306-.0917-.2129-.2051-.0822-.1134-.2527-.3768-.3789-.584-.2178-.3579-.2305-.3923-.2305-.6992 0-.5211.2808-1.0352.5664-1.0352zm12.6543.1855c.4139.0051 2.0053.093 2.0293.1172.0187.0186-.0773.712-.1015.7343-.006.0055-.3472.048-.7598.0938-.4125.0458-.7235.0916-.6894.1035.034.012.3518.0858.705.164.621.1376.6412.1468.6309.256-.0295.3103-.0645.4111-.1406.4062-.043-.0027-.5094-.143-1.0371-.3106-.5278-.1676-.9591-.3135-.959-.3261.0001-.0127.014-.13.0312-.2598l.0313-.2363.5605-.1036c.3086-.057.5391-.1117.5117-.121-.0273-.0093-.2537-.0426-.5039-.0743l-.455-.0566.0156-.1816c.0082-.0999.0224-.1905.0332-.2012.003-.003.0386-.0044.0976-.004zm-4.4902.0468c.0818-.0064.1913.0564.2715.1758.088.1309.1035.2164.1035.5332 0 .454-.0575.6327-.3965 1.2266-.1985.3479-.2768.4473-.3535.4473-.0542 0-.1195-.0271-.1445-.0606-.0251-.0334-.155-.2243-.289-.4238-.2149-.3197-.2414-.3806-.215-.5215.0476-.2536.1447-.4023.5274-.8086.1972-.2093.3736-.4248.3906-.4785.018-.0565.0564-.0866.1055-.0899zm-12.8105.7774c.0404 0 .1152.335.082.3672-.0217.021-.2044.1117-.4063.2012-.2018.0894-.3532.1635-.3359.164.0173.0007.2043-.0395.414-.0898.2098-.0503.3959-.0917.4141-.0918.0365-.0005.1447.1976.1914.3496.026.0844-.0245.124-.4043.3203-.2384.1232-.4273.229-.4199.2363.0077.0077.2157-.0503.461-.1289.2452-.0785.4533-.1345.4628-.125.0095.0095.0496.0937.088.1856l.0683.166-.7441.2344c-.4098.129-.8676.275-1.0176.3242-.15.049-.2877.0898-.3047.0898-.017 0-.0751-.1068-.129-.2363-.0537-.1295-.0976-.2605-.0976-.291 0-.0306.2283-.1632.5059-.295.2775-.1317.5039-.2456.5039-.2539 0-.008-.221.0444-.4922.1172s-.5277.1328-.5684.1328c-.0475 0-.108-.0931-.1718-.2597-.0546-.1424-.0922-.2652-.084-.2735.0163-.0163 1.9623-.8437 1.9844-.8437zm3.4199.2305c.1764-.0005.3497.1875.5293.5761.0878.19.262.5023.3867.6934.1434.2196.2266.398.2266.4844 0 .0751-.102.4588-.2266.8535-.1247.3947-.2406.796-.2559.8906-.0158.0986-.053.1719-.0879.1719-.0335 0-.214-.1816-.4023-.4024-.434-.5088-.7478-.934-.9023-1.2265-.1054-.1994-.12-.2837-.1192-.6426.0007-.3513.0192-.4518.125-.6797.2048-.4409.4845-.7182.7266-.7187zm10.4277.0859h.002c.0978.0051.2085.0822.3496.2285.4288.445.647 1.477.3379 1.5957-.1178.0452-.2852-.0597-.4102-.2578-.0832-.1318-.147-.1855-.2246-.1855-.1624 0-.1756.1073-.0527.4336.174.4622.19.6728.0722.916-.1205.2489-.3775.4863-.5273.4863-.0944 0-.123-.0434-.211-.3105-.056-.1704-.1819-.456-.2792-.6348-.2487-.4564-.2396-.5303.1386-1.1387.1737-.2794.3797-.6345.457-.789.119-.2375.222-.3504.3477-.3438zm3.0938.2813c.0428.0008 2.0343.59 2.0468.6054.0194.024-.2179.6325-.246.6309-.0155-.0007-.4624-.1786-.9922-.3965-.5299-.2179-.968-.4002-.9747-.4043-.0232-.0157.1371-.436.166-.4355zm-11.0957.2285c.0426 0 .138.088.2129.1953.2951.4223.4291.8924.4296 1.5137.0005.4326-.0022.4472-.1015.4472-.067 0-.209-.111-.4082-.3183-.3933-.4092-.5661-.7577-.5293-1.0684.0325-.2744.2879-.7695.3965-.7695zm1.873.0468c.0373 0 .3751.688.375.7637 0 .0743-.2225.2442-.3203.2442-.044 0-.1065-.0317-.1387-.0704-.0986-.1187-.1107-.5038-.0234-.7324.0432-.113.0906-.205.1074-.205zm2.0234.0235l.0645.1601c.1017.249.131.557.0645.6875-.0702.1377-.1964.1604-.3672.0664-.1704-.0937-.1583-.2075.0586-.5937zm1.7833.209c.0665.0006.123.0335.164.0996.089.143.1813.7855.1465 1.0175-.0388.2587-.2297.4769-.6172.707-.3592.2135-.3283.2028-.414.1485-.05-.0317-.0556-.1047-.0294-.332.0186-.1602.0395-.4259.047-.5899.0163-.3677.1514-.6712.3964-.8925.1175-.1062.221-.1587.3066-.1582zm-2.922.6386c.072 0 .311.0737.5294.1641.4088.1692.5633.182 1.0156.086.3233-.0688.3386.209.0273.4824-.2003.1756-.3233.1769-.828.002-.553-.1917-.791-.1852-1.4766.0448-.3009.101-.5625.1836-.5801.1836-.0177 0-.1013-.07-.1856-.1543-.2418-.2419-.273-.5356-.0566-.5332.0575.0005.1947.042.3047.0918.3197.145.456.1216.8086-.1386.2018-.149.3564-.2286.4414-.2286zm9.541.0098l.2911.1152.291.1153-.2773.5898c-.1527.325-.29.5907-.3047.5899-.0147-.001-.419-.217-.8984-.4805-.4794-.2636-.889-.4868-.9102-.4942-.0465-.0165.1081-.3535.1621-.3535.021 0 .3242.1433.6738.3184l.6348.3183.17-.3593zm-1.9413.543c.057-.0005.3789.1408.3789.1699 0 .0116-.0466.1014-.1016.1992-.055.0978-.0908.1862-.08.1953.0107.0091.3305.1985.709.4219.3784.2234.6937.41.7011.414.02.012-.2392.4294-.2656.4278-.0126-.0007-.3325-.2067-.711-.457l-.6894-.4551-.1309.162-.1308.1603-.168-.1231a19.1808 19.1808 0 0 0-.1797-.1328c-.011-.0077.6026-.919.6602-.9805.0008-.002.0045-.0019.0078-.002zm-16.416.1347l.1172.172c.064.094.1154.191.1152.2167-.0001.0257-.072.0963-.1602.1563-.088.06-.1601.1353-.1601.168 0 .075.2225.3417.2851.3417.0406 0 .6712-.42 1.0586-.705l.127-.0938.1113.1348c.0612.0748.1125.1521.1133.1718.0041.0893-.9609.8683-1.254 1.0118-.2616.1281-.3565.143-.5116.08-.1448-.0587-.3527-.2957-.498-.5644-.107-.1979-.1267-.2768-.1016-.4102.0373-.1992.2438-.4155.543-.5683zm12.5468.047c.112 0 .2921.263.3438.5038.069.3217.0625.5825-.0215.8652-.1128.38-.2991.5435-1.0996.963-.3925.2056-.7203.373-.7285.373-.008 0-.0266-.1905-.043-.4238-.0163-.2334-.0654-.5213-.1074-.6387-.1109-.31-.0406-.4453.3223-.6367.3412-.18.549-.3376.959-.7188.1707-.1588.3398-.287.375-.287zm-7.3027.0175c.0248 0 .052.0051.086.0117.2415.046.3856.1336.7187.4434.1698.158.3945.354.5.4355.3089.239.3425.4558.2012 1.3379-.0753.4698-.1084.5719-.1875.586-.0374.0066-.2731-.104-.5254-.2462-.6973-.3927-.9468-.573-1.0996-.791-.1243-.1772-.1416-.241-.1563-.5937-.022-.5256.0517-.837.2442-1.041.0995-.1055.1445-.1425.2187-.1426zm-3.207.9863l.1523.1485c.0842.0816.1543.1662.1543.1875 0 .0212-.1203.2196-.2676.4394-.4152.6197-.8428 1.3-.8261 1.3164.0083.008.3246-.282.703-.6445.3786-.3626.6993-.6613.713-.6621.0512-.0037.5573.4504.666.5976.1994.2703.1363.4734-.2637.8516-.1362.1288-.2928.2501-.3476.2676-.1315.0417-.3686-.0753-.5625-.2754-.0847-.0874-.1766-.1577-.2032-.1582-.0265-.0007-.1517.1136-.2793.2558L4.6738 20l-.3281-.379-.3281-.3769.1367-.1972c.0748-.1087.1336-.2156.1328-.2364-.0009-.0206-.0696-.1178-.1543-.2168l-.1543-.1796-.2226.0976-.2227.0977-.1719-.1934c-.0938-.1065-.1713-.2056-.1718-.2207-.0007-.015.4672-.1956 1.039-.4023zm13.6992.004c.1122 0 .258.0685.3809.1757.077.0672.0758.0772-.041.1992-.0926.0969-.1517.1203-.2344.0996-.0818-.0205-.1442.0058-.2442.1016-.1507.1444-.1701.2262-.0625.2676.04.0153.0805.0273.088.0273.0077 0 .1137-.0822.2362-.1836.2879-.238.4788-.2928.6993-.2011.4486.1865.7306.5279.6738.8164-.0354.1796-.24.4537-.4688.627-.1902.144-.4256.1739-.5937.076-.0527-.0306-.1752-.123-.2734-.205l-.1797-.1484.1699-.17.17-.1699c.0738.0673.1457.1367.2187.2051l.168-.1855c.1966-.2177.2084-.306.0527-.377-.1033-.047-.1348-.0317-.3399.1602-.3335.312-.542.3364-.8281.0957-.1743-.1467-.2773-.3372-.2773-.5118 0-.2565.4342-.6992.6855-.6992zm-8.2969.4687c.0397-.0022.083.0086.129.0332.2128.114.9687 1.2783.9687 1.4922 0 .162-.4541.2179-.791.0976-.4328-.1544-.5824-.3957-.584-.9355-.0013-.4244.1055-.6776.2773-.6875zm-5.7207.0918c-.026.003-.1191.0368-.2246.082-.2138.0916-.2166.0953-.1367.1836.0807.0892.0833.0894.2305-.08.082-.0945.1452-.179.1386-.1856-.0008-.0008-.0045-.0005-.0078 0zm8.5195.1289c.0134-.0006.0267.0011.0391.002.1661.012.2544.1718.252.4726-.0044.5001-.2665.846-.7305.9668-.3436.0895-.378.0883-.5742-.0098-.11-.055-.1646-.1163-.1738-.1953-.0245-.2094.4658-.8428.8476-1.0957.1333-.0883.2466-.1357.3399-.1406zm4.5625.1582c.0395.0025.0929.0466.1758.1426l.1524.1777-.2793.2226c-.3751.2985-.3628.2795-.2637.3692.084.076.1.0694.3867-.1738l.2989-.254.164.2032.166.2011-.2988.2364c-.164.1304-.2988.2631-.2988.2949 0 .0318.036.0912.08.1309.0742.0665.1076.0515.42-.1993.186-.1492.353-.2714.373-.2714.0419 0 .4143.4108.4102.453-.0023.0242-.7122.6061-1.0293.8438l-.1094.082-.2031-.289c-.6296-.8924-.9961-1.4301-.9961-1.461 0-.0276.4985-.4542.8164-.6992a.0506.0506 0 0 1 .0352-.0097zm-12.1757.5293c-.0197 0-.0908.0585-.1602.1308l-.127.1309.1954.164.1972.1622.127-.0899c.0704-.05.1289-.1188.1289-.1523 0-.0622-.2966-.3457-.3613-.3457zm1.2304.3945c.0892-.0058.4141.1806.4141.2441 0 .0173-.1205.4533-.2695.9688-.149.5155-.2672.9438-.2598.9512.007.0073.2154-.3369.461-.7657.5939-1.037.5051-.9454.7968-.8242.2317.0963.242.1077.2188.2422-.0386.2235-.0883.9902-.0645.9902.0119 0 .1096-.212.2188-.4707.1091-.2586.204-.475.209-.4824.0052-.0074.0956.0203.2011.0625.1446.0579.1845.0945.1621.1504-.0163.0409-.185.4984-.375 1.0156-.1899.5173-.359.953-.375.9688-.016.0159-.163-.0315-.3261-.1055-.1632-.074-.2987-.1376-.3028-.1426-.0042-.005.0376-.3296.0938-.7207.0561-.391.0972-.7195.0898-.7285-.0071-.009-.152.2607-.3203.5977-.1684.337-.312.6198-.3203.6289-.0154.0168-.7784-.3841-.877-.461-.0406-.0317-.0327-.103.0313-.289l.084-.248-.2246-.1446-.2246-.1445-.1915.164c-.2086.1786-.2278.1761-.4902-.0488l-.1504-.1289.8574-.6191c.4717-.3406.8848-.6366.918-.6563.0037-.0016.0099-.0016.0156-.002zm9.8008.0176c.2263.0007.5684.3795.5684.6289 0 .1005.023.1504.0664.1504.082 0 .2865.2048.5527.5508l.207.2675-.2265.1387-.2246.1387-.2324-.3184c-.1278-.1751-.2613-.3183-.297-.3183-.0356 0-.1496.0473-.2519.1054l-.1855.1075.2031.3574c.1122.1968.194.3755.1797.3984-.0258.0417-.3597.2246-.4102.2246-.0146 0-.234-.4285-.4863-.9511l-.457-.9493.1035-.078c.1842-.139.8013-.4534.8906-.4532zm-.0137.5078c-.0466-.0009-.1094.021-.1894.0645-.2535.1373-.2539.1404-.168.2714.0435.0663.0875.1192.0977.1192s.1007-.052.2012-.1153c.1872-.1182.2024-.1441.1543-.2695-.0174-.0452-.049-.0695-.0958-.0703zm-1.0293.0039l.3418 1.0254.3418 1.0234-.252.0957c-.1381.0529-.2744.0977-.3046.0977-.0302 0-.1681-.2272-.3047-.504-.1365-.2767-.2524-.4976-.2598-.4901-.007.007.0588.2456.1465.5312.0877.2856.1602.533.1602.5488 0 .0274-.4969.2344-.5625.2344-.0173 0-.0617-.0573-.0977-.127-.0992-.1919-.8554-1.8008-.8554-1.8203 0-.0228.2755-.1171.3418-.1171.0289 0 .1448.1856.2558.412.111.2265.2063.405.213.3985.0067-.0068-.0376-.1961-.0997-.4219-.0621-.2257-.1133-.4312-.1133-.457 0-.0437.4522-.232.4785-.1992.0066.0082.1104.1977.2305.4199.12.2222.2252.396.2344.3867.0092-.0092-.053-.2133-.1387-.4531l-.1562-.4356.2011-.0742zm-8.9492.1191c-.029-.0013-.0957.0488-.2148.1504-.1069.0913-.108.0963-.0235.1602.1234.0933.1624.0671.2266-.1504.0312-.1058.0407-.1585.0117-.1602zm2.8008.4747c.1232-.004.9073.1873 1 .248.0586.0384.1205.1227.1367.1875.052.207-.0105.7358-.1054.8984-.1236.2117-.2685.2514-.6387.1778-.3506-.0697-.3603-.0627-.4082.2695-.066.4576-.0456.438-.3809.3574-.1899-.0456-.1955-.0524-.166-.1894.0405-.1878.529-1.926.5469-1.9453.002-.0017.0074-.0037.0156-.004zm3.4863.2265c.2073-.0002.263.0188.373.129.1714.1713.3203.6603.3536 1.1581.0314.4705-.0394.6737-.2773.7871-.2156.1028-.6166.1367-.8047.0684-.086-.0312-.1937-.1088-.2403-.1719-.1216-.1646-.2218-.6898-.2226-1.1777-.0007-.3854.0095-.4326.1172-.5606.1355-.161.3536-.232.7011-.2324zm-1.6738.045c.5148 0 .5741.0092.6524.0956.1235.1365.1526.6833.0449.8477-.073.1114-.0745.1248 0 .207.0448.0495.0871.181.0957.3047.0084.1201.0216.3292.0312.463l.0176.242-.2344-.0136-.2343-.0136-.0332-.3438c-.0189-.1892-.0447-.3708-.0567-.4023-.0134-.0354-.1095-.0567-.252-.0567h-.2304v.8261h-.252c-.21 0-.2524-.0132-.252-.08.0006-.0442.0314-.5042.0684-1.0215.0372-.5172.068-.9665.0684-.998.0005-.0428.1443-.0567.5664-.0567zm-1.5254.2636c-.0138.0008-.0229.0018-.0254.0059-.0097.0156-.0315.1048-.0488.1972l-.0312.168.1992.045c.1096.0243.2143.0463.2324.0488.018.0027.054-.0352.08-.084.0262-.0488.047-.1379.047-.1992 0-.0974-.0293-.1185-.2305-.1583a1.3453 1.3453 0 0 0-.1836-.0234.3317.3317 0 0 0-.039 0zm3.125.1484c-.0974 0-.2158.0296-.2637.0645-.0811.0593-.0824.0933-.037.5117.0622.5746.1424.6538.5058.502l.164-.0684-.0253-.336c-.014-.1842-.0569-.4108-.0957-.5038-.0642-.1535-.0874-.17-.248-.17zm-1.5957.047c-.1519 0-.1582.0052-.1582.1835 0 .1786.0059.1836.1582.1836.0863 0 .1887-.014.2285-.0293.0422-.0162.0723-.08.0723-.1543 0-.1428-.0657-.1836-.3008-.1836zm2.8887.0566c.0033 0 .0073-.0005.0078 0 .0256.028.1572.3704.1465.3808-.0067.0064-.1322.0423-.2774.0801l-.2636.0703-.0254-.123a22.9115 22.9115 0 0 1-.041-.2012c-.012-.061.0389-.0956.2168-.1484.112-.0332.2098-.057.2363-.0586Z' />
    </svg>
  );
});

export default Newjapanprowrestling;
