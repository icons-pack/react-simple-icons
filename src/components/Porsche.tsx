import * as React from 'react';

import { IconProps } from '../types';

const Porsche = React.forwardRef<SVGSVGElement, IconProps>(function Porsche({color = 'currentColor', size = 24, title = "porsche", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M11.972 0A25.68 25.68 0 0 0 9.93.091a27.858 27.858 0 0 0-4.248.685 23.565 23.565 0 0 0-2.975.966l-.06.022s.118 7.243.21 10.831a9.934 9.934 0 0 0 .569 3.098 14.899 14.899 0 0 0 1.622 3.214A12.884 12.884 0 0 0 7.56 21.66a11.234 11.234 0 0 0 1.192.873 15.214 15.214 0 0 0 2.038 1.031c.233.098.436.192.62.255A4.58 4.58 0 0 0 12 24a4.58 4.58 0 0 0 .59-.182c.182-.063.387-.156.62-.255a15.22 15.22 0 0 0 2.037-1.031 11.25 11.25 0 0 0 1.194-.873 12.88 12.88 0 0 0 2.511-2.752 14.889 14.889 0 0 0 1.622-3.214 9.934 9.934 0 0 0 .57-3.098c.091-3.588.21-10.827.21-10.827a.635.635 0 0 0-.057-.026 23.564 23.564 0 0 0-2.976-.966 27.856 27.856 0 0 0-4.248-.684A26.068 26.068 0 0 0 12.031 0zm0 .361h.057c.679.008 1.288.03 1.963.09a26.585 26.585 0 0 1 4.084.663 22.53 22.53 0 0 1 2.861.937.619.619 0 0 1 .057.025l-.038 2.274a.113.113 0 0 0-.019-.01 22.55 22.55 0 0 0-2.86-.937 26.61 26.61 0 0 0-4.085-.662c-.675-.06-1.281-.1-1.96-.108h-.058c-.679.009-1.29.048-1.965.108a26.608 26.608 0 0 0-4.084.665 22.547 22.547 0 0 0-2.861.938.116.116 0 0 0-.02.01l-.038-2.281.058-.022a22.527 22.527 0 0 1 2.86-.937A26.581 26.581 0 0 1 10.01.45c.675-.06 1.284-.08 1.963-.089zm.288.216a16.633 16.633 0 0 0-.902.008c-.121.005-.288.109-.29.23l-.007.648c-.002.132.172.236.305.239.462.01.87.002 1.318.03.033.003.062.023.062.056l-.003.13a.042.042 0 0 1-.045.046c-.521 0-1.066-.025-1.593.017-.028.002-.027-.005-.028.023l-.024.384-.002.03a16.318 16.318 0 0 1 1.882 0 .32.32 0 0 0 .305-.262l.006-.627c0-.129-.158-.224-.261-.23-.442-.028-.945-.013-1.394-.025a.046.046 0 0 1-.044-.05l.009-.145c0-.028.019-.036.047-.037.444-.016 1.107.005 1.562.019a.072.072 0 0 0 .06-.07V.674c0-.017-.032-.067-.063-.068V.605a33.113 33.113 0 0 0-.9-.028zm-1.88.064c-.423.008-1.341.125-1.862.19L8.515 2.64v.023l.47-.06a.014.014 0 0 0 .01-.006.014.014 0 0 0 .003-.01v-.523l.947-.102c.083-.015.18.046.256.169a.88.88 0 0 1 .114.339l.467-.035c.01 0 .03 0 .028-.01a.988.988 0 0 0-.307-.663.316.316 0 0 0 .197-.31 4.34 4.34 0 0 0-.022-.564.32.32 0 0 0-.3-.247zm3.59.019a.404.404 0 0 0-.413.332l-.01 1.195a.312.312 0 0 0 .24.289c.61.057 1.21.112 1.89.215.011 0 .032-.007.032-.017v-.416c0-.009-.02-.028-.027-.03-.454-.057-1.053-.137-1.589-.193a.076.076 0 0 1-.058-.07v-.812c0-.034.05-.052.084-.05.529.044 1.056.14 1.584.197.014.002.036-.007.037-.021l.01-.382a.037.037 0 0 0-.029-.033 36.382 36.382 0 0 0-1.75-.204zm1.98.237c-.012 0-.022.014-.022.025-.006.274-.045 1.457-.053 1.772v.027c.155.027.326.048.453.074.014.002.035-.008.035-.022-.002-.207 0-.448-.004-.636 0-.013.006-.014.02-.012a31.392 31.392 0 0 1 1.102.22c.008 0 .052.007.052.03-.003.217-.007.4-.013.617a.041.041 0 0 0 .027.04c.145.033.283.067.42.1.037.008.043.001.044-.012.022-.451.03-1.174.036-1.784 0-.008-.003-.02-.01-.022-.153-.035-.297-.072-.453-.105-.014-.003-.022.02-.023.035-.015.223-.009.43-.026.652 0 .008 0 .012-.009.01-.37-.076-.765-.158-1.132-.227-.01-.002-.006-.02-.005-.031l.003-.653a.033.033 0 0 0-.026-.03 23.196 23.196 0 0 0-.417-.068zM7.934.92a.303.303 0 0 0-.037 0c-.543.086-1.089.201-1.64.32a.5.5 0 0 0-.23.143.322.322 0 0 0-.102.205l.004 1.118a.434.434 0 0 0 .106.266.24.24 0 0 0 .204.11 38.518 38.518 0 0 1 1.633-.323.497.497 0 0 0 .268-.166.362.362 0 0 0 .098-.23L8.236 1.2a.28.28 0 0 0-.11-.198.303.303 0 0 0-.191-.08zm2.157.197a.076.076 0 0 1 .08.069l.003.189a.172.172 0 0 1-.14.166l-1.062.104-.009-.008V1.23l.009-.004 1.111-.108a.076.076 0 0 1 .008 0zm-2.52.29a.167.167 0 0 1 .078.022.117.117 0 0 1 .054.106l-.009.704a.125.125 0 0 1-.049.105.291.291 0 0 1-.12.047 61.16 61.16 0 0 1-.997.19.106.106 0 0 1-.088-.017.133.133 0 0 1-.03-.1v-.726a.143.143 0 0 1 .04-.097.243.243 0 0 1 .12-.06c.29-.054.67-.129.968-.172a.167.167 0 0 1 .033-.002zm10.81 0l-.001.001c-.008 0-.008.012-.008.019-.014.606-.03 1.167-.035 1.773 0 .013.006.03.018.033a22.245 22.245 0 0 1 2.158.7c.032.011.031-.013.031-.022.003-.138.01-.278.003-.416a.041.041 0 0 0-.025-.033 16.602 16.602 0 0 0-1.66-.541.028.028 0 0 1-.019-.026l.008-.18c0-.008.014-.01.022-.008a21.848 21.848 0 0 1 1.67.542c.01.003.01-.01.01-.019a5.121 5.121 0 0 0 0-.468.029.029 0 0 0-.02-.026 21.457 21.457 0 0 0-1.638-.523c-.008-.002-.018-.01-.018-.018v-.192c0-.008.013-.013.021-.01.564.144 1.184.36 1.615.519.038.014.06.008.06-.027 0-.157.006-.168-.002-.324-.002-.02-.004-.04-.022-.047a21.383 21.383 0 0 0-2.169-.707zm-12.97.064a.365.365 0 0 0-.084.009c-.65.166-1.303.414-1.956.652a.063.063 0 0 0-.03.052V3.65l.003.33s.471-.177.573-.21c.013-.004.013-.017.013-.031l-.01-.52c0-.015.002-.037.016-.04l1.625-.502a.306.306 0 0 0 .138-.101.237.237 0 0 0 .052-.156l-.017-.683a.272.272 0 0 0-.119-.197.365.365 0 0 0-.204-.068zm-.286.496c.036-.01.07.031.072.063a1.86 1.86 0 0 1 .012.25c-.001.045-.066.097-.11.11l-1.184.386c-.011.004-.031 0-.031-.012l.002-.358c0-.017.02-.031.036-.036a10.796 10.796 0 0 1 1.203-.403zm6.967.981c.653.01 1.246.03 1.9.088a26.591 26.591 0 0 1 4.083.663 22.501 22.501 0 0 1 2.861.937.107.107 0 0 1 .014.007 89.441 89.441 0 0 0-.007.448h-8.851zm-.317.002l-.001 4.618H8.827c-.043-.004-.015-.023.015-.052a1.71 1.71 0 0 1 .715-.312c.022-.002.028-.014-.003-.054a.898.898 0 0 0-.93-.212.985.985 0 0 0-.624.603.04.04 0 0 1-.04.031 6.734 6.734 0 0 1-.47.013c-.025 0-.037-.032-.035-.056a.737.737 0 0 1 .343-.484 1.1 1.1 0 0 1 .519-.178.04.04 0 0 0 .02-.063.515.515 0 0 0-.105-.093.758.758 0 0 0-.504-.077 1.053 1.053 0 0 0-.948.964c-.01.06.006.074-.053.094-.112.038-.322.064-.434.088-.02.003-.05-.043-.045-.063a1.309 1.309 0 0 1 .244-.522 1.006 1.006 0 0 1 .342-.291c.026-.013.05-.044.026-.064-.253-.22-.771.012-.98.241a1.37 1.37 0 0 0-.275.91c0 .016.014.041 0 .047a4.942 4.942 0 0 1-.4.15c-.012.003-.014-.028-.016-.04a.93.93 0 0 1 .147-.677.661.661 0 0 1 .244-.241c.01-.006.008-.018 0-.028-.115-.149-.569-.042-.708.094-.32.312-.297.615-.312 1.097-.001.023-.03.111-.056.123a.57.57 0 0 1-.184.07c-.021.006-.023.014-.028-.007a.39.39 0 0 0-.57-.222.356.356 0 0 0-.077.532c.015.017.02.034-.003.041a.42.42 0 0 0-.275.534.336.336 0 0 0 .296.21.628.628 0 0 0 .37-.108.043.043 0 0 1 .06.01.386.386 0 0 0 .531.124c.162-.107.234-.273.114-.559-.007-.016.02-.046.034-.054a6.615 6.615 0 0 1 3.144-.88 1.78 1.78 0 0 1 .456.101.094.094 0 0 1 .023.008l.002.941a.19.19 0 0 1-.034.025 1.005 1.005 0 0 0-.432.55c-.004.017-.006.021-.035.024-.193.019-.399.047-.591.062-.011.002-.032-.019-.028-.03a1.87 1.87 0 0 1 .725-.908.057.057 0 0 0 .01-.067.375.375 0 0 0-.168-.093 1.087 1.087 0 0 0-.895.362 1.418 1.418 0 0 0-.312.875c-.001.022.003.058-.019.065-.124.039-.261.074-.39.11-.015.004-.035-.011-.038-.027a1.006 1.006 0 0 1 .486-1.03c.051-.04-.038-.102-.102-.102a.963.963 0 0 0-.913.53 1.301 1.301 0 0 0-.03.793c.003.023.019.063-.006.069-.079.019-.265.09-.323.108-.021.007-.035-.003-.047-.03a1.041 1.041 0 0 1-.021-.488 1.102 1.102 0 0 1 .268-.493c.008-.01.011-.032 0-.037a.54.54 0 0 0-.378-.025.74.74 0 0 0-.477.38c-.159.297-.118.583.051 1.005.008.02.018.058 0 .07l-.137.08c-.017.013-.032.002-.044-.015-.055-.078-.124-.202-.21-.24a.415.415 0 0 0-.428.035.406.406 0 0 0-.12.431.875.875 0 0 0 .1.152c.01.014-.001.036-.013.047-.059.052-.14.09-.188.14a.395.395 0 0 0-.01.471.365.365 0 0 0 .45.123 1.624 1.624 0 0 0 .232-.122c.027-.018.045-.051.07-.025a.546.546 0 0 0 .224.153.427.427 0 0 0 .354-.062.305.305 0 0 0 .168-.338.875.875 0 0 0-.143-.27c-.033-.035-.035-.033 0-.054a7.435 7.435 0 0 1 1.66-.724 5.024 5.024 0 0 1 1.69-.207h.046l.003 1.949H3.206c-.054-2.133-.116-5.51-.156-7.836a.113.113 0 0 1 .014-.007 22.499 22.499 0 0 1 2.86-.937 26.59 26.59 0 0 1 4.084-.663 23.38 23.38 0 0 1 1.768-.086zm-3.088.816a1.237 1.237 0 0 0-.693.232c-.286.188-.456.773-.49.982a.044.044 0 0 1-.04.036 5.998 5.998 0 0 0-.676.125c-.007.001-.012-.01-.012-.017a.983.983 0 0 1 .258-.59 3.506 3.506 0 0 1 .493-.396c.013-.011.004-.045-.012-.051a1.035 1.035 0 0 0-.797.012 1.129 1.129 0 0 0-.675.867 2.062 2.062 0 0 0-.029.41c.002.017-.03.018-.045.023-.246.077-.504.167-.71.236-.01.004-.039.002-.039-.01a1.168 1.168 0 0 1 .175-.655c.12-.195.343-.305.505-.469.011-.012.028-.044.011-.051-.41-.165-.797.004-1.124.375a1.395 1.395 0 0 0-.2 1.124c.009.036 0 .075-.019.083a1.805 1.805 0 0 1-.23.089.025.025 0 0 1-.033-.02c-.093-.296-.44-.238-.597-.148a.361.361 0 0 0-.139.489.031.031 0 0 1-.01.044.442.442 0 0 0-.205.596.352.352 0 0 0 .428.137 1.208 1.208 0 0 0 .246-.129.027.027 0 0 1 .03.004.393.393 0 0 0 .566.08c.115-.082.16-.096.204-.244a.39.39 0 0 0-.09-.3c-.012-.01-.001-.04.013-.047A9.692 9.692 0 0 1 8.947 5.51a2.35 2.35 0 0 1 1.446.553.072.072 0 0 0 .062.031.098.098 0 0 0 .054-.056.66.66 0 0 0-.204-.678 1.21 1.21 0 0 0-.612-.344c-.012-.003-.02-.029-.01-.037a.968.968 0 0 1 .335-.22 3.587 3.587 0 0 1 .605-.05c.014-.001.035-.015.03-.028a.606.606 0 0 0-.527-.4 1.325 1.325 0 0 0-.693.1 1.118 1.118 0 0 0-.5.553.036.036 0 0 1-.032.02 12.139 12.139 0 0 0-.594-.007c-.014 0-.035 0-.035-.014a.943.943 0 0 1 .255-.517 1.989 1.989 0 0 1 .68-.386c.019-.006.04-.036.029-.051a.549.549 0 0 0-.201-.17 1.237 1.237 0 0 0-.347-.041zm3.405 1.607h8.845c-.012.686-.025 1.433-.04 2.195h-8.805zM8.681 7.801l6.666.003a.016.016 0 0 1 .017.013l-.002 5.138a2.354 2.354 0 0 1-.143.764 3.327 3.327 0 0 1-1.44 1.725 3.468 3.468 0 0 1-1.74.491 3.512 3.512 0 0 1-2.26-.86 3.078 3.078 0 0 1-1.105-2.31L8.667 7.82c0-.013.001-.019.014-.019zm6.994.086h5.217c-.012.645-.025 1.296-.034 1.926h-5.183V8.318zm-6.839.071c-.013 0-.014.005-.014.018l.007 4.753a2.97 2.97 0 0 0 1.054 2.225 3.333 3.333 0 0 0 2.153.827 3.284 3.284 0 0 0 1.66-.473 3.193 3.193 0 0 0 1.374-1.66 2.28 2.28 0 0 0 .136-.734l.002-4.94a.015.015 0 0 0-.016-.014zm4.436.304a.101.101 0 0 1 .001 0 .11.11 0 0 1 .087.071l.242.715a.079.079 0 0 1-.003.07.066.066 0 0 1-.054.024.065.065 0 0 1-.063-.044l-.038-.125h-.33l-.036.128c-.01.04-.04.044-.071.044a.063.063 0 0 1-.044-.028.057.057 0 0 1-.01-.052l.232-.728a.101.101 0 0 1 .087-.075zm-.763.007a.226.226 0 0 1 .023 0 .232.232 0 0 1 .235.157.046.046 0 0 1-.031.059.053.053 0 0 1-.07-.02.166.166 0 0 0-.132-.09.151.151 0 0 0-.133.1.498.498 0 0 0-.055.222.524.524 0 0 0 .046.228.159.159 0 0 0 .154.102.233.233 0 0 0 .166-.243v-.039h-.135a.057.057 0 0 1-.059-.063c0-.023.007-.05.059-.05h.192c.064 0 .073.048.073.09a.792.792 0 0 1-.011.152.399.399 0 0 1-.15.236.301.301 0 0 1-.15.043.257.257 0 0 1-.227-.145.618.618 0 0 1-.073-.31.577.577 0 0 1 .08-.304.226.226 0 0 1 .198-.125zm-2.988.002a.318.318 0 0 1 .004 0c.183.002.243.111.243.15 0 .035-.061.08-.095.039a.2.2 0 0 0-.157-.068.143.143 0 0 0-.15.096.114.114 0 0 0 .094.135.61.61 0 0 1 .267.08h-.001a.202.202 0 0 1 .081.18.247.247 0 0 1-.067.175.327.327 0 0 1-.247.088.297.297 0 0 1-.263-.14c-.004-.01-.01-.063.034-.078a.084.084 0 0 1 .082.026.239.239 0 0 0 .156.063.223.223 0 0 0 .148-.05.105.105 0 0 0 .024-.116.219.219 0 0 0-.193-.098.25.25 0 0 1-.172-.07.25.25 0 0 1-.069-.196.219.219 0 0 1 .1-.163.318.318 0 0 1 .181-.053zm1.649 0a.06.06 0 0 1 .001 0 .06.06 0 0 1 .006 0h.355a.06.06 0 1 1 0 .12l-.114.002v.682a.063.063 0 0 1-.125 0v-.683h-.116a.06.06 0 0 1-.007-.12zm.56 0a.06.06 0 0 1 .001 0 .06.06 0 0 1 .006 0h.354a.06.06 0 1 1 0 .12l-.114.002v.682a.063.063 0 0 1-.125 0v-.683h-.115a.06.06 0 0 1-.007-.12zm2.74 0a.06.06 0 0 1 .002 0 .06.06 0 0 1 .006 0h.353a.06.06 0 1 1 0 .12l-.112.002v.682a.063.063 0 0 1-.125 0v-.683h-.116a.06.06 0 0 1-.007-.12zm-.677.004a.063.063 0 0 1 .012 0h.19a.364.364 0 0 1 .208.058.278.278 0 0 1 .108.206.235.235 0 0 1-.071.198.305.305 0 0 1-.117.075l-.02.007.158.2a.086.086 0 0 1 .023.056c-.002.032-.023.05-.06.05a.066.066 0 0 1-.056-.027l-.187-.258h-.117v.23a.059.059 0 0 1-.063.067.06.06 0 0 1-.062-.067v-.726a.073.073 0 0 1 .016-.05.063.063 0 0 1 .038-.019zm-3.87.002a.06.06 0 0 1 .003 0h.357a.06.06 0 0 1 0 .121h-.116v.684a.063.063 0 0 1-.125 0v-.684h-.116a.06.06 0 0 1-.003-.12zm.583 0a.063.063 0 0 1 .002 0 .063.063 0 0 1 .065.064v.471a.258.258 0 0 0 .037.151.146.146 0 0 0 .127.056.138.138 0 0 0 .125-.056.265.265 0 0 0 .035-.15V8.34h.001a.063.063 0 0 1 .125 0v.432a.474.474 0 0 1-.056.262.25.25 0 0 1-.228.104.26.26 0 0 1-.23-.104.456.456 0 0 1-.061-.262V8.34a.063.063 0 0 1 .058-.063zm3.354.115v.328h.13a.18.18 0 0 0 .2-.174.15.15 0 0 0-.051-.109.178.178 0 0 0-.13-.045zm-.584.015l-.136.469h.278zm-1.14 1.005c.011 0 .021.002.022.011.002.018-.016.029-.042.042a.206.206 0 0 0-.094.08.31.31 0 0 0-.039.163.115.115 0 0 0 .063.079.298.298 0 0 0 .142.028.502.502 0 0 0 .215-.063.581.581 0 0 1 .276-.02.341.341 0 0 1 .194.063c.024.017.02.038.011.04-.014.005-.029-.012-.044-.01a.674.674 0 0 0-.142.03c-.06.027-.087.037-.116.09a.099.099 0 0 0-.007.073c.01.024.035.04.04.057a.446.446 0 0 0 .064.125.205.205 0 0 0 .03.023 2.668 2.668 0 0 1 .282.243.26.26 0 0 1 .04.093c.003.012-.007.03-.018.025a.255.255 0 0 1-.036-.029.178.178 0 0 0-.053-.039.368.368 0 0 0-.176-.025c-.027 0-.081.024-.05.036a.357.357 0 0 1 .132.116.43.43 0 0 1 .107.31c0 .006-.012.01-.015.006a.359.359 0 0 0-.102-.109.324.324 0 0 0-.21-.062c-.015.001-.06 0-.055.014a1.19 1.19 0 0 1 .123.191.562.562 0 0 1 .039.276c-.001.005-.02.01-.023.005a.61.61 0 0 0-.077-.076.349.349 0 0 0-.094-.06.29.29 0 0 0-.204.028.325.325 0 0 0-.13.132.492.492 0 0 0-.062.205.46.46 0 0 0 .042.257.368.368 0 0 0 .19.164.955.955 0 0 0 .334.044c.139.005.278-.016.417-.02a1.943 1.943 0 0 1 .396.003.88.88 0 0 1 .3.12 2.64 2.64 0 0 1 .215.183c.008.006.026-.003.035-.009a.462.462 0 0 0 .131-.233.346.346 0 0 0-.056-.246c-.047-.085-.116-.18-.17-.27a2.962 2.962 0 0 1-.202-.296.305.305 0 0 1-.017-.221.238.238 0 0 1 .107-.128c.011-.007.022.006.017.021a.184.184 0 0 0-.008.112.32.32 0 0 0 .089.14c.013.01.047-.005.055-.021.018-.043.007-.11.023-.154a.619.619 0 0 1 .108-.226 1.47 1.47 0 0 1 .36-.196c.033-.019.054-.105.091-.091.037.013.017.1-.011.142-.04.062-.087.1-.131.156a1.536 1.536 0 0 0-.157.247.222.222 0 0 0-.029.137.14.14 0 0 0 .073.094c.022.01.05-.01.07-.025a.385.385 0 0 0 .097-.103c.023-.038.01-.089.032-.128.006-.009.03-.007.037 0a.139.139 0 0 1 .044.084.393.393 0 0 1-.01.113c-.003.008-.024.027-.031.045a.244.244 0 0 1-.02.04c-.036.063-.078.116-.125.126-.01.001-.017.021-.01.03a.391.391 0 0 0 .113.132.198.198 0 0 0 .152.01c.027-.008.048-.027.079-.037.013-.004.005.004.005.017a.27.27 0 0 1-.015.086.19.19 0 0 1-.075.083.395.395 0 0 1-.166.05c-.027.005-.068.025-.058.051a.256.256 0 0 0 .042.085.122.122 0 0 0 .08.039.205.205 0 0 0 .125-.036c.04-.026.061-.074.096-.108.007-.006.026 0 .026.01a.36.36 0 0 1-.041.158.497.497 0 0 1-.128.138c-.015.013-.033.029-.033.049a.2.2 0 0 0 .044.084.134.134 0 0 0 .083.054.269.269 0 0 0 .1 0c.013 0 .01.023-.001.031a.253.253 0 0 1-.117.068.25.25 0 0 1-.128.008c-.081-.02-.134-.05-.214-.073a.23.23 0 0 0-.135-.009.227.227 0 0 0-.106.083.133.133 0 0 0-.03.064c-.006.063.025.13.005.192a1.415 1.415 0 0 1-.081.234 1.314 1.314 0 0 1-.115.165c-.04.054-.093.074-.12.133a.638.638 0 0 1-.038.063.515.515 0 0 0-.058.229.452.452 0 0 0 .085.209l.153.237a.149.149 0 0 1 .009.083.088.088 0 0 1-.044.07.893.893 0 0 0-.419.527l-.002.013v.004a.106.106 0 0 1-.021.042.334.334 0 0 1-.19.096c-.055.015-.11.029-.165.046a.077.077 0 0 0-.044.031.08.08 0 0 0 .009.097.137.137 0 0 1 .03.071.063.063 0 0 1-.013.042.108.108 0 0 1-.028.022.865.865 0 0 1-.216.087c-.05.011-.086-.002-.07-.059a3.075 3.075 0 0 1 .098-.293.42.42 0 0 1 .133-.14 2.289 2.289 0 0 1 .212-.162.411.411 0 0 0 .119-.126 3.299 3.299 0 0 1 .19-.275.163.163 0 0 0 .029-.129.246.246 0 0 0-.142-.185 1.052 1.052 0 0 0-.085-.034.534.534 0 0 1-.246-.175.09.09 0 0 0-.062-.04c-.063.002-.081.09-.083.138a1.17 1.17 0 0 0 .004.212.18.18 0 0 1 .004.072.055.055 0 0 1-.039.034 2.74 2.74 0 0 0-.565.279.24.24 0 0 0-.063.07l-.017.029a.187.187 0 0 1-.223.08.5.5 0 0 0-.044-.011.094.094 0 0 0-.064.017.162.162 0 0 0-.041.036.06.06 0 0 0-.01.019v.006a.057.057 0 0 0 0 .008.07.07 0 0 0 .004.017l.022.06a.066.066 0 0 1-.038.096.881.881 0 0 1-.203.055c-.04.005-.075-.01-.065-.057a1.1 1.1 0 0 1 .07-.237.094.094 0 0 1 .057-.06.79.79 0 0 0 .179-.14.266.266 0 0 1 .169-.073.512.512 0 0 0 .262-.1 1.73 1.73 0 0 0 .225-.186.37.37 0 0 0-.006-.46l-.02-.035c-.019-.03-.03-.073-.046-.104a.24.24 0 0 1-.039-.104c0-.068.027-.133.031-.201a.024.024 0 0 0-.016-.025.488.488 0 0 0-.137-.03 2.677 2.677 0 0 1-.56.006 1.423 1.423 0 0 1-.39-.18c-.053-.033-.085-.07-.139-.101-.014-.008-.015-.005-.028.006a.672.672 0 0 1-.459.125h-.002a1.766 1.766 0 0 1-.294-.077c-.073-.027-.19-.074-.26-.015-.029.025-.022.06-.022.093a1.244 1.244 0 0 1-.01.305.038.038 0 0 0 .003.032.044.044 0 0 0 .006.006.136.136 0 0 0 .036.02l.01.004c.028.01.033.023.05.058a.196.196 0 0 1 .016.062.159.159 0 0 1-.003.062.544.544 0 0 1-.009.039.207.207 0 0 0 .008.135.115.115 0 0 0 .042.053.073.073 0 0 0 .01.004.063.063 0 0 0 .01.003.068.068 0 0 0 .01 0h.01a.074.074 0 0 0 .02-.008l.004-.002a.05.05 0 0 1 .035-.012.046.046 0 0 1 .01.003.08.08 0 0 1 .063.074.484.484 0 0 1-.046.221.058.058 0 0 1-.077.03l-.018-.007a.445.445 0 0 1-.14-.117.19.19 0 0 1-.049-.112.12.12 0 0 0-.028-.082.09.09 0 0 0-.032-.016.144.144 0 0 1-.07-.046.268.268 0 0 1-.052-.219 1.5 1.5 0 0 0-.046-.64.149.149 0 0 1 .002-.108l.016-.043a.148.148 0 0 1 .007-.016.06.06 0 0 1 .042-.032.167.167 0 0 1 .029-.003 1.516 1.516 0 0 0 .45-.07.152.152 0 0 1 .062-.01.89.89 0 0 0 .073.002c.03 0 .06-.027.024-.05a.847.847 0 0 1-.084-.087.046.046 0 0 0-.052-.022.072.072 0 0 0-.01.005l-.009.005a.098.098 0 0 1-.152-.029.824.824 0 0 1-.087-.202.555.555 0 0 0-.109-.238.235.235 0 0 0-.19-.063.216.216 0 0 0-.13.098l-.063.088a.144.144 0 0 0-.031.067.107.107 0 0 0 0 .016.14.14 0 0 0 .008.032.133.133 0 0 1-.039.154l-.094.075a.087.087 0 0 0-.03.06.527.527 0 0 1-.012.06.13.13 0 0 0-.003.045.088.088 0 0 0 .002.012.081.081 0 0 0 .031.04.156.156 0 0 1 .013.012.074.074 0 0 1 .012.017.06.06 0 0 1-.012.07.219.219 0 0 1-.024.021.753.753 0 0 1-.19.108.098.098 0 0 1-.026.006c-.038.003-.05-.026-.052-.06-.003-.044-.003-.089-.003-.134a.207.207 0 0 1 .057-.137.36.36 0 0 0 .072-.225.197.197 0 0 1 .04-.13.305.305 0 0 0 .057-.09.257.257 0 0 1 .039-.066 3.861 3.861 0 0 0 .281-.384c.054-.086.155-.192.237-.073a.357.357 0 0 0 .078.084 2.395 2.395 0 0 0 .259.164c.094.053.109-.042.125-.121v-.003a.331.331 0 0 1 .038-.092 1.26 1.26 0 0 1 .202-.247c.043-.038.105-.076.15-.113.018-.016.023-.018.03-.04.009-.022.024-.05.034-.078.01-.027.015-.055.024-.076a.344.344 0 0 0 .044-.098v-.003a.023.023 0 0 0 0-.005v-.007l-.003-.007a.05.05 0 0 0-.021-.024.18.18 0 0 0-.102-.026h-.003a.384.384 0 0 0-.148.031.106.106 0 0 0-.054.054.226.226 0 0 1-.042.063.098.098 0 0 1-.13.006c-.024-.016-.014-.043 0-.063a.414.414 0 0 0 .035-.05.042.042 0 0 0 .005-.025v-.004l-.002-.005a.031.031 0 0 0-.005-.006.046.046 0 0 0-.045-.007.98.98 0 0 0-.083.027.064.064 0 0 1-.094-.047.174.174 0 0 1-.003-.055.055.055 0 0 1 .04-.05c.02-.006.05-.017.046-.042a.079.079 0 0 1 0-.023.052.052 0 0 1 .012-.024.14.14 0 0 1 .03-.025 3.869 3.869 0 0 0 .32-.234.05.05 0 0 1 .064-.01l.01.006a.223.223 0 0 0 .151.02.046.046 0 0 0 .041-.03.025.025 0 0 0 0-.005v-.005l-.002-.006-.003-.004a.071.071 0 0 0-.035-.021l-.058-.021a.269.269 0 0 1-.052-.025.053.053 0 0 1-.025-.059c.023-.113.147-.114.241-.105h.004a.505.505 0 0 0 .14-.022c.06-.021.106-.067.163-.094.057-.027.117-.057.176-.08.018-.006.033-.002.049-.009a.091.091 0 0 0 .035-.025.965.965 0 0 1 .142-.163.822.822 0 0 1 .236-.092.107.107 0 0 1 .03-.006zm-.425.557a.219.219 0 0 0-.105.026c-.009.005-.015.016-.008.024.018.021.049.03.07.05a.16.16 0 0 1 .035.046c.009.019.024.04.033.06a1.296 1.296 0 0 1 .045.123 1.227 1.227 0 0 1 .05.209c.01.057.007.117.01.175v.081c-.001.023-.001.047-.003.07a1.143 1.143 0 0 0-.004.098v.08c.002.07.013.12.044.12a.18.18 0 0 0 .084-.019.175.175 0 0 0 .085-.148 2.026 2.026 0 0 0-.003-.576.51.51 0 0 0-.188-.362.219.219 0 0 0-.144-.057zm3.96.161h5.177c-.017.825-.034 1.6-.05 2.263h-5.13l.004-1.862zm-.006 2.544h5.123a9.697 9.697 0 0 1-.545 2.911 14.495 14.495 0 0 1-1.56 3.118 12.45 12.45 0 0 1-2.415 2.669 10.809 10.809 0 0 1-1.147.848 14.592 14.592 0 0 1-1.96.999c-.224.096-.418.186-.596.247-.193.065-.358.125-.474.156v-.115l.003-7.295a3.552 3.552 0 0 0 .316-.023c.005.015.016.057.031.1a.333.333 0 0 0 .219.166.317.317 0 0 0 .306-.107.373.373 0 0 0 .388.067.235.235 0 0 0 .175-.227.43.43 0 0 0-.033-.208l-.036-.066a3.925 3.925 0 0 0 .744-.41l.02-.006c.373-.094 1.872-.631 2.791-.643a3.28 3.28 0 0 1 1.627.39 2.792 2.792 0 0 1 .682.56c.006.009.013.028.037.032a.036.036 0 0 0 .034-.022 1.139 1.139 0 0 0 .079-.516c-.02-.282-.3-.486-.383-.57-.003-.003-.01-.021.02-.041a.674.674 0 0 1 .105-.085.983.983 0 0 1 .562-.212c.03.003.02-.04.012-.076-.058-.25-.415-.412-.79-.354a.963.963 0 0 0-.613.417c-.007.011-.042.027-.056.013a2.926 2.926 0 0 0-.369-.107c-.045-.01-.021-.044-.019-.05a1.003 1.003 0 0 1 .304-.337 1.125 1.125 0 0 1 .494-.224c.022 0 .022-.03.016-.04a.55.55 0 0 0-.375-.302.844.844 0 0 0-.78.14 1.397 1.397 0 0 0-.445.673c-.014.02-.018.036-.036.032-.099-.02-.345-.007-.367-.022-.015-.007-.012-.03-.009-.045a.91.91 0 0 1 .222-.38.882.882 0 0 1 .364-.286.055.055 0 0 0 .01-.094.98.98 0 0 0-1.22.263 2.192 2.192 0 0 0-.304.696c-.002.009-.017.036-.036.036l-.508.112-.083.019-.022.023a3.29 3.29 0 0 0 .497-1.65zm-12.45.085h5.19v.09a3.145 3.145 0 0 0 .837 2.098H3.556a9.74 9.74 0 0 1-.342-2.188zm.415 2.443h5.863a2.566 2.566 0 0 0 .112.1 3.897 3.897 0 0 0 2.17.898v1.21h-7.22a13.789 13.789 0 0 1-.8-1.827 10.401 10.401 0 0 1-.125-.38zm10.584.29l-.01.012h-.002l-.002-.002a3.29 3.29 0 0 0 .015-.01zm1.738.185a.911.911 0 0 0-.507.155.934.934 0 0 0-.392.41 2.65 2.65 0 0 0-.172.775.063.063 0 0 1-.038.035 2.897 2.897 0 0 0-.335.087.026.026 0 0 1-.023-.02 1.105 1.105 0 0 1 .15-.727.886.886 0 0 1 .218-.263.037.037 0 0 0-.017-.068.98.98 0 0 0-.648.114.888.888 0 0 0-.452.667 1.589 1.589 0 0 0 .042.594c0 .006.006.027-.016.031-.076.037-.282.145-.355.18-.005.002-.019.005-.022-.006a.58.58 0 0 0-.268-.358.526.526 0 0 0-.446.022.548.548 0 0 0-.216.224.375.375 0 0 0 .127.455c.006.006.017.02 0 .025-.09.049-.092.06-.16.161a.428.428 0 0 0 .052.45.465.465 0 0 0 .7.082c.004-.003.018.005.025.02a.548.548 0 0 0 .143.151.463.463 0 0 0 .455 0 .413.413 0 0 0 .21-.415.378.378 0 0 0-.111-.262c-.013-.016 0-.024.034-.046a5.404 5.404 0 0 1 1.96-.666 3.121 3.121 0 0 1 1.076.022 1.504 1.504 0 0 1 .629.312 2.841 2.841 0 0 1 .406.402.164.164 0 0 0 .117-.025.66.66 0 0 0 .014-.517 1.604 1.604 0 0 0-.384-.59c-.003-.002-.003-.013-.003-.02-.004-.03.015-.045.052-.079a1.211 1.211 0 0 1 .562-.297c.027-.002.038-.022.02-.053a.656.656 0 0 0-.808-.298h-.001a.916.916 0 0 0-.454.416c-.006.011-.022.05-.037.038-.09-.008-.242-.032-.331-.04-.041-.002-.025-.039-.024-.045a.744.744 0 0 1 .194-.316 1.176 1.176 0 0 1 .444-.318.021.021 0 0 0 .016-.031.627.627 0 0 0-.465-.229.81.81 0 0 0-.617.238 1.255 1.255 0 0 0-.337.74c-.009.023-.02.035-.037.035a2 2 0 0 1-.278.025c-.015-.004-.014-.02-.014-.036a.91.91 0 0 1 .101-.406 1.491 1.491 0 0 1 .55-.582c.036-.025.038-.076.026-.082a.911.911 0 0 0-.355-.071zM4.707 17.692h7.069v2.19H6.213a11.237 11.237 0 0 1-.898-1.181 16.446 16.446 0 0 1-.609-1.01zm10.076 1.176a.497.497 0 0 0-.273.069.982.982 0 0 0-.475.56 1.09 1.09 0 0 0 .012.571c.003.007.012.024-.002.03-.078.03-.136.065-.213.096-.004 0-.024.005-.028-.005a.631.631 0 0 1 .088-.736c.017-.015.027-.035-.008-.047a.588.588 0 0 0-.531.193.677.677 0 0 0-.117.659.922.922 0 0 0 .099.261c.003.005.03.021.014.028l-.15.115c-.003.003-.014.008-.019 0a.486.486 0 0 0-.29-.238.341.341 0 0 0-.317.088.361.361 0 0 0 .147.602c.007.003.017.012.005.02a.587.587 0 0 0-.19.212.377.377 0 0 0 .085.406.37.37 0 0 0 .29.089.605.605 0 0 0 .357-.313c.002-.003.021-.017.031-.006a.531.531 0 0 0 .264.2.324.324 0 0 0 .323-.065.35.35 0 0 0 .111-.4.61.61 0 0 0-.201-.216c-.013-.01-.003-.035.023-.055a2.972 2.972 0 0 1 1.402-.62 1.801 1.801 0 0 1 1.025.166 1.547 1.547 0 0 1 .337.267c.013.007.05.02.063.008a.397.397 0 0 0 .035-.548.654.654 0 0 0-.206-.165.043.043 0 0 1-.007-.015.906.906 0 0 1 .301-.393 1.382 1.382 0 0 1 .295-.143c.022-.006.018-.02.007-.047-.128-.293-.635-.304-.874-.15a1.088 1.088 0 0 0-.346.396c-.005.01-.012.04-.025.031l-.213-.064c-.004 0-.004-.024-.002-.028a1.115 1.115 0 0 1 .696-.565c.015-.006.01-.02.007-.028-.11-.268-.661-.245-.93-.074a1.167 1.167 0 0 0-.493.714c-.003.02.006.037-.007.04a1.239 1.239 0 0 1-.23.055.024.024 0 0 1-.022-.023.642.642 0 0 1 .067-.392 2 2 0 0 1 .324-.408.043.043 0 0 0-.003-.063.497.497 0 0 0-.236-.07zm-3.006 1.296v3.417c-.098-.032-.214-.074-.342-.117-.178-.06-.373-.151-.597-.247a14.587 14.587 0 0 1-1.96-1 10.816 10.816 0 0 1-1.147-.847 12.861 12.861 0 0 1-1.266-1.206h5.31z" />
    </svg>
  );
});

export default Porsche;
