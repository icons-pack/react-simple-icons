import * as React from 'react';

export type OnlyofficeProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Onlyoffice = React.forwardRef<SVGSVGElement, OnlyofficeProps>(function Onlyoffice(
  { color = 'currentColor', size = 24, title = 'onlyoffice', ...others },
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
      <path d='M10.501 11.724.631 7.16c-.841-.399-.841-1.014 0-1.376l9.87-4.563c.841-.399 2.194-.399 2.998 0l9.87 4.563c.841.398.841 1.014 0 1.376l-9.87 4.563c-.841.362-2.194.362-2.998 0zm0 5.468-9.87-4.563c-.841-.399-.841-1.014 0-1.376l3.363-1.558 6.507 3.006c.841.398 2.194.398 2.998 0l6.507-3.006 3.363 1.558c.841.398.841 1.014 0 1.376l-9.87 4.563c-.841.398-2.194.398-2.998 0zm0 0.0001-9.87-4.563c-.841-.399-.841-1.014 0-1.376l3.363-1.558 6.507 3.006c.841.398 2.194.398 2.998 0l6.507-3.006 3.363 1.558c.841.398.841 1.014 0 1.376l-9.87 4.563c-.841.398-2.194.398-2.998 0zm0 5.613-9.87-4.563c-.841-.398-.841-1.014 0-1.376l3.436-1.593 6.398 2.97c.84.398 2.193.398 2.997 0l6.398-2.97 3.436 1.593c.841.399.841 1.014 0 1.376l-9.87 4.563c-.768.362-2.12.362-2.925 0z' />
    </svg>
  );
});

export default Onlyoffice;
