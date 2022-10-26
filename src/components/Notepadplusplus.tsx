import * as React from 'react';

import { IconProps } from '../types';

const Notepadplusplus = React.forwardRef<SVGSVGElement, IconProps>(function Notepadplusplus({color = 'currentColor', size = 24, title = "notepadplusplus", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M14.443 2.285c-.305.005-.6.06-.853.248-.256.168-.546.32-.723.578a6.273 6.273 0 00-.71 2.463c-1.009-.413-2.08-.716-3.177-.676a8.602 8.602 0 00-1.93.604c-1.26.657-2.058 1.943-2.53 3.246a6.84 6.84 0 00-.604 1.805c-.107.568-.322 1.115-.357 1.695-.002.394.029.788.023 1.182-.422.263-.926.245-1.398.328-.34-.008-.67-.18-1.014-.07-.36.172-.75.269-1.111.437-.087.51-.166 1.225.457 1.424 1.064-.002 2.132.002 3.195.021.192.98.38 1.99.898 2.86.613.987 1.213 2.025 2.147 2.75.888.593 2.02.617 3.039.441.387-.043.656-.35 1.004-.492.212-.126.527-.156.607-.428.698-1.13.163-2.531-.47-3.56-.403-.707-1.275-.853-2.018-.82-.436.065-.712.44-1.063.667-.388.235-.761.735-.468 1.186.251.473.561 1.107 1.193 1.074.399-.046.932-.136 1.106-.553.077-.505-.519-.748-.92-.838.019.247.045.494.07.743-.207-.143-.415-.28-.625-.418.128-.667.87-.65 1.38-.854.52.81 1.068 1.852.645 2.815-.489.612-1.37.535-2.054.375-.894-.137-1.487-.933-1.881-1.682-.594-1.035-1.323-2.145-1.196-3.387.417-.021.834-.02 1.25.004.398.094.752.438 1.182.27.922-.252 1.881-.1 2.822-.11.74-.052 1.484-.062 2.225-.031.268.073.411.4.72.38.358.12.558-.246.827-.4a17.954 17.954 0 011.79.002c.283.494.706 1.022 1.31 1.092.734.027 1.356-.493 1.753-1.064.52.117 1.082.282 1.586.021 1.095-.464 2.3-.464 3.43-.785v-.322c-.907-.61-2.027-.441-3.043-.695-.775-.133-1.562-.012-2.34-.022-.345-.236-.683-.509-1.119-.537-.134.059-.27.113-.404.168.356.04.728.12.994.38-.336-.02-.684-.004-1.002-.126-.428.157-.835.4-.902.894-.182-.255.083-.493.189-.72-.24-.507-.826-.768-.994-1.315a.289.289 0 01.48-.008c.234.345.426.715.573 1.104.217.013.435.027.654.045v-.25c-.109.045-.216.09-.322.142-.189-.412-.351-.837-.485-1.271.258.062.506.155.766.207 1.176-.184 2.439-.412 3.36-1.232.194-.2.542-.37.484-.698-.057-.474-.402-.841-.573-1.277.267-.101.535-.2.793-.32.918-.899 1.377-2.185 1.477-3.448-.092-.673-.282-1.413-.803-1.886-.95-.48-2.07-.324-3.035.025-.437.174-.76.527-1.123.813-.296-.066-.477-.41-.672-.633-.375-.64-.89-1.235-1.596-1.51-.293-.011-.608-.055-.914-.05zm.395.516c.59.02 1.109.506 1.443.972.222.37.524.682.885.916a5.218 5.218 0 01-.277 3.791c-.167.375-.519.605-.864.795-.91.267-1.874-.133-2.521-.783l.012-.094c-.458-.214-.537-.767-.616-1.21-.39-.893-.293-1.916-.006-2.823.212-.71.756-1.39 1.526-1.498a1.12 1.12 0 01.418-.066zm5.592 1.025c.616.002 1.29.28 1.44.926.48 1.112-.052 2.344-.688 3.273-.368.345-.792.627-1.137 1-.425-.844-1.359-1.219-2.223-1.437.16-.808.04-1.628.022-2.44.468-.835 1.44-1.154 2.326-1.304.084-.011.172-.018.26-.018zm.775 1.62a7.73 7.73 0 01-.523.138c-.125.181-.252.363-.381.545.141.372.636.718.984.38a1.297 1.297 0 00-.08-1.064c-.178-.318 0 0 0 0zm-11.988.046c.9-.011 1.793.272 2.601.653.38.153.353.6.438.933.065.26.14.516.217.774.126.383.292.78.62 1.037.546.418 1.108.867 1.794 1.025a2.425 2.425 0 001.787-.303c.45-.404.668-1.007 1.137-1.396.44.215.927.318 1.351.568.44.278.653.777.912 1.207.09.194.164.392.242.588-.786.782-1.936.988-2.974 1.23-.43.128-.829-.096-1.186-.304-.184.101-.367.209-.552.309a3.718 3.718 0 01-2.145.45 32.773 32.773 0 01-.55-.072c.084-.376.182-.749.259-1.127-.092.008-.277.02-.37.026-.31.476-.325 1.052-.263 1.597.015.207.028.413.037.62a1.573 1.573 0 01-.408-.932c.016-.391.065-.778.1-1.168-.41-.177-.571.292-.647.596 0 .168.012.335.024.502-.714.163-1.48.246-2.188.011-.514-.168-1.075-.182-1.557-.445-.016-.2-.033-.398-.054-.596-.141-.026-.282-.051-.422-.08-.189.507-.452 1.021-.424 1.575.095.365.401.634.629.925-.335.098-.791.022-1.016.334-.135.601.413.948.772 1.319-.516-.19-1.089-.463-1.266-1.03.26-.302.554-.57.881-.797-.471-.698-.676-1.743-.066-2.421-.118-.143-.257-.39-.477-.268-.172.162-.318.35-.484.52-.7.533-.976 1.386-1.399 2.12-.205-.007-.41-.013-.615-.013l-.01-.254a4.621 4.621 0 01-.023-1.014c.153-.596.418-1.158.568-1.755l.051-.194.086-.293c.452-1.231 1.008-2.494 2.012-3.379.642-.636 1.563-.81 2.396-1.07.06-.003.122-.007.182-.008zm5.12.496c-.38-.012-.738.145-.675.596-.055.394.323.572.592.76.602-.003.872-.686.707-1.178a1.264 1.264 0 00-.623-.178zm-8.064 5.79a1.865 1.865 0 00.225 1.622c-.391.203-.826.213-1.256.211-.09-.648.318-1.202.621-1.736.137-.03.275-.062.41-.098zm1.213.544c.353.101.773.09 1.051.358-.042.174-.083.348-.113.525a5.16 5.16 0 00-.654.465 1.747 1.747 0 01-.284-1.348zm7.168.324c.211.023.262.279.4.407.236.306.573.512.852.775-.67.018-1.475.102-1.88-.562-.271.074-.543.183-.684.445l-.4-.217c-.005-.25.004-.502.025-.752h.457c.412.003.824-.028 1.23-.096zm-5.306.147c.02.336.18.73-.07 1.02-.246-.021-.492-.041-.733-.084.326-.195.567-.505.674-.87zm2.51.117c.315.24.445.634.591.986-.938.036-1.878.023-2.814-.039.064-.31.17-.61.252-.916.655-.02 1.313 0 1.97-.03zm.826.535c.152.184.318.355.498.512.24-.277.775-.727.998-.193-.363.174-.813.305-.934.742l-.012.053c.076.381.178.756.307 1.123-.773-.505-.391-1.548-.857-2.237zm-10.815.293c-.02.295-.422.42-.373.727.091.29.21.57.354.838-.491-.023-.989.003-1.475-.088-.046-.256-.161-.635.11-.805.259-.16.47-.389.615-.658.255.04.516.036.77-.014zm.66.153c-.208.362-.461.81-.138 1.191l-.176.078a2.664 2.664 0 01-.361-.676c.102-.184.195-.374.28-.566.132-.006.263-.015.395-.027zm.518.086l.033.08.11-.047c-.04.227-.205.391-.346.562.233.014.296.764-.041.557a10.992 10.992 0 01-.127-.225c.024-.227-.012-.48.181-.648l.055-.067.086-.095.049-.117zm3.943.074c.347.082.895-.121 1.11.166.31.05.603.197.92.205 1.122-.329 2.316-.154 3.47-.154.006.1.02.298.028.398-.869.033-1.737.036-2.604.014-.452-.003-.881-.307-1.338-.17-.2.018-.424.229-.6.043-.28-.003-.562-.012-.843-.018-.045-.17-.1-.34-.143-.484zm-2.428.017c.375.05.849-.096 1.131.225l-.12.27c-.74-.036-1.48-.043-2.221-.065.151-.495.8-.404 1.21-.43zm15.87.016c.502-.022.98.166 1.478.215.003.207.065.428-.035.623-.608.116-1.185.383-1.81.398.011-.168.02-.336.023-.506l.287-.187.057-.543zm-1.61.014c.102 0 .205.004.307.01.229.044.396.227.588.347-.552.275-1.181.207-1.772.127-.456-.062-.93.022-1.377-.115l.125-.225c.708-.06 1.416-.151 2.13-.144zm-3.761.097c.217.002.434.006.652.006.022.22-.071.326-.28.319-.517.014-1.034.012-1.55-.018-.05-.306.34-.249.525-.295.217-.013.435-.014.653-.012zm-.516.647c.542 0 1.083.051 1.615.152.744-.097 1.494-.005 2.235-.135.306.024.95-.115.876.371-.349.042-.674-.177-1.027-.14-.694.043-1.393.107-2.08-.045-.787.165-1.591.088-2.387.137a17.27 17.27 0 00-.021-.305c.268-.03.546-.024.789-.035zm-10.418.012c.6 0 1.203.111 1.803.132l.125.143c-.808-.002-1.622.062-2.426-.022a13.543 13.543 0 01-.104-.209c.2-.032.402-.044.602-.044zm3.426.119c.34.003.683.008 1.025.002 1.337.016 2.672.035 4.006.125a6.16 6.16 0 00-.098.168c-1.304.043-2.606.02-3.91.015l-.822-.029c-.067-.094-.134-.19-.201-.281zm8.642.39c.43.192.857.393 1.305.543.259-.104.615-.671.826-.26-.328.305-.791.614-1.26.51-.36-.17-.59-.52-.87-.793zm-11.984.07l.33.05c.363.841.38 1.81.873 2.599.284.467.518.96.793 1.432.287.492.762.824 1.207 1.162.955.702 2.52.596 3.197-.438.427-.922-.104-1.898-.474-2.74-.634-.996-2.29-.238-2.242.848.364.218.767.663 1.222.384a10.497 10.497 0 01-.013-.533c.108.12.19.261.296.383-.255.329-.67.314-1.045.262-.151-.168-.307-.331-.46-.496-.188-1.083 1.193-1.994 2.11-1.446.655.42.838 1.228 1.099 1.91.301.821-.144 1.793-.924 2.159-.601.388-1.346.234-2.018.234-.917-.044-1.515-.793-2.117-1.387-.58-.712-.958-1.557-1.41-2.351a7.712 7.712 0 01-.424-2.031z" />
    </svg>
  );
});

export default Notepadplusplus;
