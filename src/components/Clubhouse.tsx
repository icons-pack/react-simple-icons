import * as React from 'react';

export type ClubhouseProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Clubhouse = React.forwardRef<SVGSVGElement, ClubhouseProps>(function Clubhouse({color = 'currentColor', size = 24, title = "clubhouse", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M23.184 2.654l-10.967 3.5V2.696L.39 6.47v10.025l10.2-3.258v3.441l13.41-4.275-3.634-3.55zM10.592 4.929v6.592l-8.567 2.733V7.662zm9.683.367l-1.85 3.9 2.542 2.467-8.75 2.791V7.871zM1.741 17.863c-.958 0-1.741.783-1.741 1.741 0 .959.783 1.742 1.741 1.742a1.74 1.74 0 100-3.483z" />
    </svg>
  );
});

export default Clubhouse;
