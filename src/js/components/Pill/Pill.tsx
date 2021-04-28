import * as React from 'react';
import { getClassName } from '../../utils/helpers';

type Props = {
  align?: string;
  active?: boolean;
  children: React.ReactNode;
};

const Pill: React.FunctionComponent<Props> = ({ align, active, children }: Props) => {
  const classes = getClassName(
    'Pill',
    align ? `Pill__content--${align}` : '',
    active ? 'Pill--active' : ''
  )

  return (
    <div  className={ classes }>
      { children ? children : 'Default' }
    </div>
  );
};

export default Pill;
