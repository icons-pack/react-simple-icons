import * as React from 'react';

export type AppianProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Appian = React.forwardRef<SVGSVGElement, AppianProps>(function Appian({color = 'currentColor', size = 24, title = "appian", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M19.646 6.117C19.538 1.763 17.883 0 13.636 0H7.34v4.066h4.57c1.799 0 2.807 0 2.807 1.655v2.375c-.828 0-2.88-.036-4.426-.036-4.246 0-5.83 1.727-5.937 6.117v3.742c.108 4.102 1.51 5.865 5.253 6.081l3.85-4.066c-.397.036-.864.036-1.44.036-1.798 0-2.806 0-2.806-1.655v-4.57c0-1.655 1.007-1.655 2.806-1.655 1.908 0 2.807 0 2.807 1.655v10.22h4.821z" />
    </svg>
  );
});

export default Appian;
