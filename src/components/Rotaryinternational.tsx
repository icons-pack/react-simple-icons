import * as React from 'react';

import { IconProps } from '../types';

const Rotaryinternational = React.forwardRef<SVGSVGElement, IconProps>(function Rotaryinternational({color = 'currentColor', size = 24, title = "rotaryinternational", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M18.301 9.504c.09.03.125.129.152.227.467 1.572.467 2.916 0 4.5-.038.136-.093.211-.165.24-.105.032-.218-.043-.314-.113l-3.061-2.077c-.118-.078-.187-.186-.187-.3 0-.112.067-.219.187-.3l3.06-2.075c.14-.1.247-.131.328-.102zm-1.122 6.928c-1.134 1.195-2.296 1.867-3.893 2.25-.136.034-.23.023-.287-.025-.084-.07-.073-.21-.065-.331l.265-3.689c.017-.144.073-.252.175-.313.097-.053.223-.048.347.012l3.33 1.611c.154.076.237.152.253.236.017.092-.05.173-.125.25zm-5.177-2.327a2.163 2.163 0 0 1-2.162-2.16c0-.728.363-1.403.972-1.805a.436.436 0 0 1 .48.728A1.29 1.29 0 0 0 12 13.233a1.29 1.29 0 0 0 .709-2.366.437.437 0 0 1 .482-.728A2.162 2.162 0 0 1 12 14.105zm-.95 4.606c-.073.06-.174.04-.275.016-1.59-.38-2.757-1.052-3.895-2.25-.082-.087-.122-.163-.122-.23 0-.013 0-.02.002-.034.015-.104.144-.166.25-.218l3.33-1.615c.13-.06.255-.064.353-.006.096.057.157.166.167.305l.27 3.696c.01.175-.015.282-.08.336zm-5.018-4.33c-.145.1-.25.135-.333.106-.09-.032-.12-.13-.15-.23-.47-1.569-.47-2.915-.005-4.5.04-.135.097-.21.17-.237.105-.037.217.04.317.11l3.059 2.08c.115.076.183.182.183.298 0 .112-.068.218-.18.3zm.79-6.832h.001c1.138-1.196 2.304-1.87 3.894-2.25.099-.023.203-.042.273.02.067.053.092.162.079.339l-.27 3.685c-.008.142-.066.254-.166.309-.097.058-.224.055-.35-.007L6.959 8.033c-.108-.054-.235-.11-.257-.22-.01-.075.026-.164.122-.264Zm6.177-2.26c.077-.061.177-.042.277-.021 1.59.385 2.756 1.057 3.895 2.253.081.085.125.165.125.236l-.002.028c-.025.109-.146.166-.255.219l-3.328 1.61c-.131.063-.254.069-.35.01-.097-.057-.158-.166-.17-.31l-.267-3.685c-.012-.176.013-.285.076-.34zm-.996-1.272c-4.36 0-7.908 3.55-7.908 7.911 0 4.362 3.548 7.91 7.908 7.91 4.362 0 7.912-3.548 7.912-7.91 0-4.361-3.55-7.91-7.912-7.91m0 16.903c-4.955 0-8.99-4.034-8.99-8.994 0-4.958 4.035-8.99 8.99-8.99 4.96 0 8.993 4.032 8.993 8.99 0 4.96-4.033 8.994-8.993 8.994zm11.973-9.295-.002-.033-.026-.015c-.508-.308-1.176-.483-1.83-.497a57.713 57.713 0 0 1-.103-.785c.623-.176 1.222-.515 1.64-.95l.023-.02-.006-.032a3.568 3.568 0 0 0-.2-.753l-.013-.03-.032-.008c-.574-.164-1.261-.16-1.893 0a64.48 64.48 0 0 0-.296-.723c.555-.34 1.043-.82 1.336-1.34l.016-.025-.012-.033a3.88 3.88 0 0 0-.39-.674l-.016-.024h-.035c-.59-.013-1.25.167-1.833.48-.052-.07-.43-.563-.482-.631.454-.468.8-1.062.948-1.64l.008-.034-.022-.024a3.604 3.604 0 0 0-.546-.556l-.025-.019-.032.006c-.582.147-1.17.495-1.64.945l-.634-.497c.313-.553.497-1.192.497-1.78l-.004-.08-.025-.02a3.246 3.246 0 0 0-.675-.39l-.03-.01-.025.012c-.522.29-1 .775-1.335 1.33a67.567 67.567 0 0 1-.76-.317c.078-.313.127-.635.127-.958a3.19 3.19 0 0 0-.128-.932l-.007-.03-.033-.013a3.43 3.43 0 0 0-.745-.205l-.034-.003-.021.022c-.43.418-.769 1.014-.948 1.638a41.443 41.443 0 0 0-.8-.102c-.008-.647-.183-1.31-.491-1.825l-.016-.03h-.032a3.61 3.61 0 0 0-.78 0h-.034l-.015.03c-.306.51-.478 1.173-.49 1.824-.09.012-.717.088-.808.103-.18-.628-.52-1.226-.948-1.642L9.297.311l-.035.006c-.23.034-.55.12-.75.2l-.03.013-.01.03a3.6 3.6 0 0 0-.124.944c0 .316.05.64.124.95-.078.034-.683.293-.764.326-.337-.555-.817-1.044-1.337-1.337l-.028-.017-.032.011c-.2.088-.49.255-.672.393l-.028.017v.086c0 .583.18 1.224.49 1.781-.067.056-.52.41-.589.465-.467-.45-1.058-.799-1.642-.949l-.029-.007-.022.022c-.18.134-.42.37-.557.547l-.02.026.007.032c.146.58.494 1.17.944 1.644-.05.069-.444.583-.5.654-.564-.315-1.223-.503-1.825-.494l-.03.002-.02.027a3.693 3.693 0 0 0-.391.675l-.013.028.017.029c.288.518.778 1.003 1.335 1.342-.03.08-.259.637-.294.718-.642-.16-1.325-.16-1.896.006l-.031.008-.011.027c-.084.2-.171.516-.205.754l-.004.032.022.025c.417.429 1.015.768 1.64.94l-.105.791c-.649.013-1.318.184-1.828.491l-.028.015-.004.034a3.534 3.534 0 0 0 0 .78l.004.031.028.015c.51.306 1.173.48 1.827.49.012.09.1.724.11.811-.625.184-1.22.526-1.636.954l-.023.027.004.03c.036.234.122.556.203.75l.013.03.029.01c.579.164 1.263.157 1.898 0 .032.08.278.641.312.722-.555.333-1.043.815-1.337 1.335l-.014.03.01.03c.086.205.256.494.392.673l.021.027.028.002c.598.008 1.258-.17 1.83-.486.053.068.44.57.49.64-.448.46-.798 1.05-.946 1.637l-.008.03.02.027c.137.175.373.41.55.553l.025.022.03-.01c.58-.145 1.17-.49 1.641-.943l.647.496c-.308.566-.489 1.21-.489 1.798v.066l.03.02c.174.134.46.297.671.39l.03.012.03-.015c.523-.29 1.004-.78 1.342-1.342l.71.287a3.8 3.8 0 0 0-.123.945c0 .33.043.653.126.943l.008.03.032.014c.198.084.515.17.75.208l.034.005.022-.026c.432-.42.77-1.018.939-1.637.09.015.724.104.812.114.013.652.188 1.317.494 1.823l.013.028.035.005c.225.028.56.028.78 0l.03-.005.018-.028c.303-.506.478-1.172.494-1.827.088-.013.68-.095.77-.11.174.63.514 1.22.946 1.642l.023.02.03-.001c.235-.038.555-.121.754-.202l.028-.014.011-.03c.083-.292.122-.613.122-.943 0-.318-.045-.644-.122-.957.081-.03.655-.28.736-.315.34.557.82 1.046 1.338 1.34l.026.012.03-.01c.207-.086.5-.254.678-.394l.026-.016v-.087c0-.576-.18-1.217-.483-1.78l.61-.476c.474.45 1.064.795 1.643.945l.032.009.023-.021c.177-.14.417-.378.555-.55l.022-.03-.012-.026c-.143-.578-.488-1.17-.94-1.642.053-.07.435-.572.487-.643.574.315 1.235.495 1.828.484h.032l.02-.025a3.11 3.11 0 0 0 .39-.68l.014-.026-.016-.028c-.283-.51-.768-.996-1.324-1.346l.293-.713c.63.162 1.314.167 1.89 0l.027-.01.013-.028c.085-.203.17-.517.206-.75l.004-.033-.024-.025c-.417-.432-1.012-.767-1.631-.945.014-.087.097-.68.106-.77.656-.01 1.324-.185 1.833-.49l.026-.018.002-.035c.015-.108.02-.25.02-.389 0-.14-.005-.278-.02-.387" />
    </svg>
  );
});

export default Rotaryinternational;
