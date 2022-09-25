import * as React from 'react';

export type VimeolivestreamProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Vimeolivestream = React.forwardRef<SVGSVGElement, VimeolivestreamProps>(function Vimeolivestream({color = 'currentColor', size = 24, title = "vimeolivestream", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M2.672 10.63c-.11 0-.21.04-.3.116-.09.077-.137.157-.14.24-.007.16.078.24.252.24a.4.4 0 0 0 .293-.125.345.345 0 0 0 .115-.23.233.233 0 0 0-.06-.16.199.199 0 0 0-.16-.08zm9.127.636v1.737c0 .327.22.365.344.365a.494.494 0 0 0 .074-.006v-.181s-.023.003-.05.003c-.077 0-.166-.03-.166-.226v-1.692zm.63 0v.253h.21v-.253zm4.693.182v.431h-.199v.17h.196v.764c0 .5.347.555.519.555a.515.515 0 0 0 .085-.006v-.181s-.026.006-.068.006c-.112 0-.335-.045-.335-.395v-.744h.374v-.17h-.373v-.43zM1.745 11.5c-.283-.01-.475.158-.575.503a.367.367 0 0 1 .15-.035c.105 0 .15.062.138.184-.006.074-.052.182-.137.324-.086.142-.15.213-.193.213-.055 0-.105-.11-.151-.328a8.209 8.209 0 0 1-.083-.492c-.036-.245-.134-.359-.293-.343-.067.007-.168.071-.303.193L0 12l.096.13a.622.622 0 0 1 .16-.101c.07 0 .136.115.197.346l.165.636c.082.23.183.346.302.346.192 0 .427-.19.705-.569.195-.264.321-.487.38-.67.077-.059.124-.09.142-.09.055 0 .082.042.082.126 0 .016-.03.135-.09.356-.059.222-.09.386-.093.492a.374.374 0 0 0 .07.25.26.26 0 0 0 .218.096c.205 0 .41-.093.615-.279l.053-.051a.395.395 0 0 0 .085.177c.088.1.237.146.447.14-.028-.071-.04-.196-.033-.376.01-.2.06-.395.147-.574.088-.183.171-.274.248-.274.089 0 .13.059.124.178-.003.08-.018.172-.045.275a1.36 1.36 0 0 0-.045.308c-.006.164.029.281.105.352.085.08.235.117.448.11a.747.747 0 0 1-.039-.317 1.38 1.38 0 0 1 .19-.608c.11-.199.205-.298.285-.298.073 0 .109.06.105.183a1.83 1.83 0 0 1-.057.337 1.848 1.848 0 0 0-.057.37c-.006.232.09.347.289.347.205 0 .41-.093.614-.279l.01-.01a.568.568 0 0 0 .022.038c.107.174.285.26.533.26.333 0 .662-.097.986-.293l.104-.065a.7.7 0 0 0 .072.122c.125.164.309.246.55.246a.95.95 0 0 0 .73-.323c.195-.215.3-.47.311-.765.01-.218-.038-.396-.142-.534-.11-.151-.272-.226-.486-.226-.333 0-.61.128-.83.384-.205.232-.3.485-.284.76 0 .021.002.04.004.06l-.034.016c-.26.118-.5.177-.72.177-.11 0-.193-.04-.248-.12a1.37 1.37 0 0 0 .739-.361c.183-.173.269-.341.257-.505-.019-.256-.178-.385-.477-.385-.325 0-.606.13-.844.386-.217.235-.328.482-.33.742a.65.65 0 0 0 .006.126c-.052.036-.09.054-.117.054-.058 0-.095-.013-.11-.039-.015-.025-.021-.072-.018-.14 0-.025.019-.123.057-.294a2.25 2.25 0 0 0 .062-.392c.006-.13-.018-.232-.073-.302-.064-.087-.17-.123-.317-.11a.663.663 0 0 0-.353.144c-.067.052-.136.12-.206.207l-.069.063a.488.488 0 0 0-.073-.304c-.065-.086-.172-.123-.321-.11a.797.797 0 0 0-.473.216.875.875 0 0 0-.16.193.472.472 0 0 0-.064-.354c-.05-.075-.114-.11-.193-.103-.046.003-.133.067-.262.192-.177.174-.273.267-.289.28l.11.13c.086-.065.138-.098.156-.098.034 0 .048.029.042.087-.003.083-.017.2-.043.348a3.95 3.95 0 0 0-.033.24l-.005.003c-.11.095-.186.143-.229.143-.098 0-.145-.069-.142-.207.046-.3.089-.549.128-.744a.42.42 0 0 0-.052-.28c-.048-.073-.122-.104-.223-.095-.064.007-.162.071-.293.193l-.137.13c-.01-.227-.108-.344-.297-.35zm13.221.301c-.403 0-.735.294-.735.785 0 .461.335.782.78.782.334 0 .551-.208.551-.208l-.092-.155s-.18.182-.453.182c-.309 0-.57-.208-.578-.592h1.144s.006-.068.006-.104c0-.372-.21-.69-.623-.69zm1.334 0c-.27 0-.51.146-.51.413 0 .488.804.408.804.735 0 .157-.14.238-.3.238a.637.637 0 0 1-.444-.182l-.11.146s.19.217.552.217c.299 0 .51-.175.51-.42 0-.493-.804-.403-.804-.734 0-.166.145-.232.297-.232.246 0 .373.137.373.137l.092-.154s-.146-.164-.46-.164zm3.2 0c-.403 0-.735.294-.735.785 0 .461.335.782.78.782.334 0 .55-.208.55-.208l-.091-.155s-.181.182-.454.182c-.308 0-.569-.208-.578-.592h1.144s.006-.068.006-.104c0-.372-.21-.69-.622-.69zm1.414 0c-.335 0-.53.17-.53.17l.094.154s.175-.143.421-.143c.214 0 .37.099.37.387v.039h-.082c-.258 0-.913.012-.913.517 0 .297.258.443.507.443.373 0 .498-.324.498-.324h.006s-.006.05-.006.125v.164h.192v-.958c0-.375-.198-.574-.557-.574zm1.575.023a.61.61 0 0 0-.54.378h-.006s.006-.053.006-.119v-.223h-.199v1.495h.202v-.707c0-.067.006-.134.02-.2.063-.228.247-.44.49-.44.281 0 .314.22.314.447v.9h.201v-.707c0-.08.006-.152.027-.217.057-.22.243-.422.471-.422.273 0 .323.202.323.446v.9H24v-.95c0-.37-.133-.58-.495-.58a.606.606 0 0 0-.548.374h-.006c-.045-.247-.187-.375-.462-.375zm-3.876.021c-.234 0-.4.172-.471.398h-.006s.006-.053.006-.118v-.265h-.199v1.495h.202v-.63a.99.99 0 0 1 .041-.291c.066-.22.223-.387.433-.387.039 0 .074.006.074.006v-.199s-.038-.009-.08-.009zm-6.179.015v1.495h.202V11.86zm.371 0l.572 1.495h.22l.569-1.495h-.211l-.412 1.097c-.03.077-.053.179-.053.179h-.006s-.024-.104-.05-.179l-.416-1.097zm-4.338.052c.048 0 .086.036.112.108a.638.638 0 0 1 .034.24.947.947 0 0 1-.133.444c-.098.17-.215.256-.353.256-.061 0-.109-.036-.142-.106a.432.432 0 0 1-.041-.213.967.967 0 0 1 .137-.464c.101-.177.23-.265.386-.265zm-1.722.056c.07 0 .103.043.1.13-.003.064-.049.147-.137.249-.108.117-.24.207-.39.264a.693.693 0 0 1 .146-.444c.096-.133.189-.199.28-.199zm8.215.003c.223 0 .412.145.424.457h-.936c.047-.3.263-.457.512-.457zm4.534 0c.222 0 .412.145.424.457h-.937c.048-.3.264-.457.513-.457zm-9.031.26c-.149 0-.223.111-.223.223 0 .111.074.222.223.222.148 0 .222-.111.222-.222 0-.112-.074-.223-.222-.223zm10.72.343h.087v.066c0 .258-.172.555-.457.555-.222 0-.332-.142-.332-.282 0-.33.469-.339.703-.339z" />
    </svg>
  );
});

export default Vimeolivestream;
