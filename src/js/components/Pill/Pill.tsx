import React, { FunctionComponent } from 'react';
import { getClassName } from '../../utils/helpers';

type Props = {
  align?: string;
  children: React.ReactNode;
};

const Pill: FunctionComponent<Props> = ({ align, children }: Props) => {
  const classes = getClassName(
    'Pill',
    align ? `Pill__content--${align}` : ''
  )

  return (
    <div  className={ classes }>
      { children ? children : 'Default' }
    </div>
  );
};

export default Pill;
