import * as React from 'react';

import { getClassName } from '../../utils/helpers';

export interface Props {
  align?: string;
  status?: PillStatus.ACTIVE | PillStatus.ERROR;
  style?: React.CSSProperties;
  mods?: string;
  children: any;
  onClick?: (e) => void;
  testId?: string;
}

export enum PillStatus {
  ACTIVE = 'active',
  ERROR = 'error',
}

const Pill = ({ align, status, style, mods, children, onClick, testId }: Props) => {
  const clickable = () => children.props?.type === 'checkbox' || children.props?.type === 'radio';

  const classes = getClassName(
    'Pill',
    align && `Pill-content--${align}`,
    status === PillStatus.ACTIVE && 'Pill--active',
    status === PillStatus.ERROR && 'Pill--error',
    mods
  );

  return (
    <div
      data-testid={testId || 'pill'}
      className={classes}
      style={{
        ...style,
        cursor: clickable() ? 'pointer' : 'default',
      }}
      onKeyDown={onClick}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      {children}
    </div>
  );
};

export default Pill;
