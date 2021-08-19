import * as React from 'react';
import { getClassName } from '../../utils/helpers';

export interface Props {
  align?: string;
  active?: boolean;
  style?: React.CSSProperties;
  mods?: string;
  children: React.ReactNode;
}

const Pill: React.FunctionComponent<Props> = ({
  align,
  active,
  style,
  mods,
  children,
  ...props
}: Props) => {
  const classes = getClassName(
    'Pill',
    align ? `Pill__content--${align}` : '',
    active ? 'Pill--active' : '',
    mods
  );

  return (
    <div className={classes} style={style} {...props}>
      {children || 'Default'}
    </div>
  );
};

export default Pill;
