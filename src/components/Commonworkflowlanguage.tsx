import * as React from 'react';

export type CommonworkflowlanguageProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Commonworkflowlanguage = React.forwardRef<SVGSVGElement, CommonworkflowlanguageProps>(
  function Commonworkflowlanguage(
    { color = 'currentColor', size = 24, title = 'commonworkflowlanguage', ...others },
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
        <path d='M13.905 0L8.571 5.4l.037.037.096.096 3.586 3.395-2.24 2.252h-.01l-1.576 1.586 3.737 3.766-3.735 3.803.126.139v.012L12.052 24l1.608-1.64-1.98-2.034 3.737-3.79-1.608-1.642-.01.012-2.13-2.129 3.867-3.866-.017-.015.016-.016-3.641-3.524 3.64-3.694z' />
      </svg>
    );
  },
);

export default Commonworkflowlanguage;
