import * as React from 'react';

export type TerraformProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Terraform = React.forwardRef<SVGSVGElement, TerraformProps>(function Terraform({color = 'currentColor', size = 24, title = "terraform", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M1.44 0v7.575l6.561 3.79V3.787zm21.12 4.227l-6.561 3.791v7.574l6.56-3.787zM8.72 4.23v7.575l6.561 3.787V8.018zm0 8.405v7.575L15.28 24v-7.578z" />
    </svg>
  );
});

export default Terraform;
