import { FC, SVGAttributes } from 'react';

interface Props extends SVGAttributes<SVGElement> {
  icon: {
    path: string;
  };
}

type Icon = FC<Props>;

export default Icon;
