import * as React from 'react';

export type MercurialProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Mercurial = React.forwardRef<SVGSVGElement, MercurialProps>(function Mercurial({color = 'currentColor', size = 24, title = "mercurial", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M13.8216.4314a10.2734 10.2734 0 0 0-1.422.0774c-7.083.8757-7.1976 8.3303-.9554 10.1015 7.0706 1.0703 2.8125 6.4047 2.2086 9.0945-.5415 2.4111 5.714 2.8074 8.6079-6.7688C23.9967 7.9324 20.6996.5375 13.8216.4314zm6.165 2.0953c-.0213.015.0002.066.1032.1748 1.01 1.0662 1.488 1.6912 2.4688 3.871 2.1907 4.8693-2.1648 12.5904-4.9951 14.1949-1.133.6421-2.568.7072-3.2275.6494-.4143-.036-.8177.4385-.5541.866.993 1.6114 3.5415.7206 5.72-.8322 2.1737-1.5493 3.6586-5.1331 4.0895-6.7171.6186-2.277.704-5.9062-.9593-8.9594-.9845-1.8072-1.9445-2.917-2.4906-3.2037-.0698-.0368-.1337-.0587-.155-.0437zm-13.7838.9554c-1.9467 3.1875-.2826 7.6562 4.7727 9.0905 6.6367 1.8846 1.3715 6.0926 1.5253 8.8959.1545 2.8028 5.7706 3.82 10.1988-3.5413.0536-.0891.1003-.1817.151-.2721-4.4262 7.3375-10.0304 6.3212-10.185 3.5214-.1539-2.8035 5.1114-7.0132-1.5253-8.8979-4.9023-1.3909-6.6137-5.634-4.9375-8.7965zm-.2304 2.9057c-.0678.0542-.0356.251.002.4866.1057.66.5196 1.8234 1.3347 2.8898 1.1057 1.4462 3.0177 2.0604 4.5005 2.5005 1.899.5634 2.3417 1.6578 2.5602 1.5234.2166-.1337.1632-1.3185-.4807-1.867-.6262-.5335-2.4769-.987-3.3704-1.1936C9.514 10.495 8.307 9.855 7.444 8.7612c-.863-1.0936-1.4403-2.3986-1.4717-2.3734zM2.8363 8.5904c-.5909-.0306-1.2788.1537-1.7617.5938-.549.5002-.7018 1.3363-.4866 2.014.0884.2783.3155.685.7925.7527.6369.0904.7673.3777 1.5194.2284.752-.1493 1.321-.7641 1.5491-1.4459.2612-.9433-.1284-1.4321-.717-1.867-.2206-.163-.5412-.2577-.8957-.276zm1.7895.7388c-.0482-.0289-.06.0299.0179.2443.3929 1.083-.3704 2.097-1.0288 2.5661-.6583.469-1.4924.247-1.8332.143-.341-.104-.5218.0143-.5065.1946.0087.101.092.221.2423.3178-.718-.3548-1.2561-1.088-1.3406-1.9603-.0444-.458.032-.885.2145-1.273-.2936.452-.4354.9885-.3794 1.567.1317 1.359 1.337 2.354 2.6952 2.2224.7147-.07 1.3579-.4514 1.7538-1.003.7892-.8576.7857-2.326.3733-2.7388-.0751-.1344-.1603-.2512-.2085-.28zm-1.1202.6276c.2173.0172.4146.1174.5462.3258.3794.6012-.3834 1.388-.9613 1.5392-.6124.1604-.8983.0048-.854-.8202.0276-.5155.5464-.9574 1.0467-1.0348a.9639.9639 0 0 1 .2224-.01zm18.6915.0298c.183.084.193 1.6217-.1092 2.737-.522 1.924-2.3254 4.9016-3.5334 6.28-.9264 1.0576-1.9623 1.499-3.2115 1.6843-2.5991.5065.158-3.82 2.0735-3.583 1.9155.237 3.9722-3.7315 4.437-6.155.1416-.738.2604-1.0015.3436-.9633zm-17.3667.6217c.014.0026.0246.0907.0357.2105-.0694 1.2463-1.2154 1.933-1.871 2.0239-.1768.0245-.4884.0113-.3395-.1231.0979-.0882.593-.0533 1.0407-.294.4474-.2407.9796-.7677 1.0745-1.5174.028-.2201.0456-.3025.0596-.2999zm3.9345.1112c.4061.1481.7337.3238 1.0566.423.5893.1805 1.2778.3457 1.7002.429.6572.1298 1.3422.4507 1.7497.586.6025.1997.8736.5768.852 1.0149-.0206.4376-.2303-.0553-.56-.276-.3111-.208-1.054-.6418-2.58-1.1421-1.2634-.4143-1.9051-.769-2.2185-1.0348zm14.908 2.1172c.1264.5153-.6948 4.0971-3.015 7.1243-.7777 1.0147-1.8407 1.7682-2.8899 2.294-.7741.388-1.3433.4632-2.0159.564-.5247.0787-.9144.0117-.8858-.3277.0375-.4468.567-.1635 1.3327-.3495 2.7515-.668 3.9457-2.0453 5.591-4.6317 1.281-2.0136 1.8405-4.2479 1.8828-4.6734zm-16.471 2.5304c-1.0004-.034-2.0805.3943-2.7469 1.2334-1.4419 1.8739-.3481 3.9568.0953 3.9643.4435.0074.7109.0702 1.16.3853.8876.3689 2.5196.136 3.273-.856.7536-.992.7777-2.36.4907-3.1858-.3512-1.0106-1.2719-1.5073-2.2722-1.5412zm2.4945 1.1638c-.0169.0077-.0174.0443.006.1152.622 1.8982.0475 3.3992-1.0249 4.1729-1.0515.7588-2.4974.8859-3.6545.286-.3397-.1761-.4804.0796-.3217.2264 2.9364 2.721 7.3564-1.0167 5.4102-4.3178-.164-.278-.3644-.5057-.4151-.4827zm-6.1153.3456a3.7751 3.7751 0 0 0-.4489 2.9534c.5275 2.0173 2.5906 3.225 4.6079 2.6972a3.7751 3.7751 0 0 0 2.419-1.9603A3.7751 3.7751 0 0 1 7.905 22.233c-2.0166.528-4.0794-.6786-4.6078-2.6952a3.7751 3.7751 0 0 1 .284-2.6614zm5.438.6098c.0599-.0072.1022.0754.1291.284.2837 2.1959-1.227 2.8104-1.72 2.9395-1.6646.4357-1.855-.621-.1529-1.1858.9128-.3029 1.4845-2.0066 1.7438-2.0377zm1.1937 1.581c.0214-.004.0165.0991-.006.2502-.2294 1.5421-1.6872 2.6788-2.9275 2.721-.2517.0259-.5818-.0826-.2741-.147.3738-.0786 2.5478-.6426 3.0586-2.431.0796-.2788.1276-.3893.149-.3933Z" />
    </svg>
  );
});

export default Mercurial;
