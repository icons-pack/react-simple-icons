import React from 'react';
import PropTypes from 'prop-types';

const Tencentweibo = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M4.252 23.936a.97.97 0 0 1-.474-.466c-.08-.167-.086-.222-.086-.653 0-.93.15-2.428.362-3.587.698-3.827 2.373-7.127 4.915-9.671l.574-.58-.074-.293c-.14-.561-.079-1.306.149-1.826.25-.564.784-1.142 1.3-1.416.134-.071.25-.127.253-.123.008 0 .066-.021.137-.049.07-.03.153-.061.189-.068.034-.006.095-.023.14-.034a2.93 2.93 0 0 1 1.341 0c.038.007.11.031.165.052.05.02.091.027.091.02 0-.01.172.072.375.177.61.315 1.03.75 1.317 1.362.222.465.273.704.271 1.248-.004.398-.017.506-.095.764-.182.605-.45 1.004-.965 1.456-.117.1-.25.202-.295.23a7.209 7.209 0 0 1-.54.268c-.011.005-.04.019-.068.03-.027.013-.091.026-.144.036a.562.562 0 0 0-.127.035c-.014.01-.119.026-.23.038-.111.01-.255.023-.32.033-.148.021-.609-.031-.872-.096a3.027 3.027 0 0 1-.623-.262l-.26-.137-.11.08c-.146.114-.835.85-1.186 1.27-2.335 2.805-3.652 6.45-3.827 10.62-.027.628-.052.913-.088 1.023-.072.193-.28.419-.472.512a.993.993 0 0 1-.723.007zm7.853-7.88a1.684 1.684 0 0 0-.307-.038 5.104 5.104 0 0 1-.839-.105c-.038-.007-.126-.021-.2-.035a.753.753 0 0 1-.166-.037.566.566 0 0 0-.122-.034 1.821 1.821 0 0 1-.23-.069.535.535 0 0 0-.147-.048 2.58 2.58 0 0 1-.28-.086 1.747 1.747 0 0 0-.28-.082c-.025.017-.34-.208-.418-.3-.212-.253-.29-.643-.182-.903.148-.343.504-.6.849-.609.116-.003.23.01.256.034.028.02.05.031.05.017 0-.013.036.004.083.035s.086.044.086.031c0-.014.022-.012.045.007.044.037.335.136.462.163.04.007.089.022.106.031s.08.029.143.037c.065.006.246.042.407.073.315.058 1.33.089 1.54.044.064-.014.197-.035.289-.044.096-.007.195-.024.223-.035.029-.01.1-.024.154-.034.14-.024.287-.057.393-.095.027-.011.12-.038.203-.063.084-.02.191-.057.238-.077.049-.019.11-.038.139-.045.023-.005.23-.1.46-.213a6.243 6.243 0 0 0 2.29-1.92c.275-.394.699-1.232.843-1.677.721-2.254.147-4.733-1.478-6.372a6.522 6.522 0 0 0-2.328-1.457 4.057 4.057 0 0 0-.412-.123 3.08 3.08 0 0 1-.246-.057 3.39 3.39 0 0 0-.188-.048 3.985 3.985 0 0 0-.479-.066 2.042 2.042 0 0 1-.273-.037c-.055-.02-.855-.013-1.06.007-.243.02-.396.044-.564.077a3.96 3.96 0 0 1-.257.052l-.171.038-.137.034a.608.608 0 0 0-.1.032.096.096 0 0 0-.057.027c-.015.016-.059.027-.099.027a.191.191 0 0 0-.114.041c-.023.024-.04.028-.04.013 0-.017-.024-.01-.05.015-.03.023-.052.03-.052.02 0-.014-.036-.005-.076.02-.045.02-.093.045-.113.048-.071.014-.729.348-.93.48-.462.29-.627.423-1.054.85-.533.53-.818.924-1.145 1.575a6.276 6.276 0 0 0-.581 3.931c.06.359.143.65.304 1.088.061.163.068.23.044.367-.098.55-.707.957-1.152.772-.065-.026-.12-.045-.12-.033 0 .037-.287-.2-.376-.312a1.87 1.87 0 0 1-.205-.42c-.469-1.301-.55-2.946-.216-4.368a8.318 8.318 0 0 1 1.587-3.222c.315-.39.991-1.053 1.358-1.337.274-.21.899-.622.944-.622.007 0 .13-.069.273-.155a2.15 2.15 0 0 1 .26-.136c0 .01.065-.018.147-.058.079-.042.16-.08.178-.082.02-.004.096-.035.171-.065.075-.036.136-.055.14-.048 0 .005.027-.007.058-.035.034-.024.06-.034.06-.02 0 .015.023.008.05-.017.027-.024.05-.03.05-.018 0 .014.025.007.052-.017s.051-.03.051-.016.025.006.052-.018c.027-.023.05-.033.05-.02 0 .01.043.003.096-.018.052-.02.12-.043.156-.05.054-.015.163-.04.246-.061a.887.887 0 0 0 .101-.032c.038-.01.124-.03.189-.04.065-.01.263-.042.437-.068.237-.038.537-.05 1.215-.043.492.007.945.021.998.031.058.012.172.031.254.041.086.015.214.038.29.059.079.016.192.04.257.052a.629.629 0 0 1 .154.037.23.23 0 0 0 .082.034c.1.024.16.04.17.045.006.007.017.01.035.012l.264.09c.134.044.246.084.255.084s.05.022.086.043c.037.02.08.037.096.04.014 0 .072.028.127.056.057.03.102.046.102.037 0-.024.742.379.949.516.105.072.22.148.252.164.347.212.861.643 1.283 1.077a8.174 8.174 0 0 1 2.154 4.07c.082.414.096.555.108 1.334.015.998-.024 1.392-.215 2.14-.402 1.574-1.23 2.908-2.541 4.098a10 10 0 0 1-1.22.882c-.18.108-1.044.537-1.044.52 0-.01-.033.004-.074.028-.045.024-.086.045-.096.045-.011 0-.125.04-.258.084-.128.045-.246.086-.255.086l-.069.028a.569.569 0 0 1-.137.037c-.167.035-.24.052-.269.069a.554.554 0 0 1-.145.037 3.77 3.77 0 0 0-.273.049 5.506 5.506 0 0 1-.715.089c-.575.045-.875.057-.889.04z" />
    </svg>
  );
};

Tencentweibo.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Tencentweibo.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Tencentweibo;
