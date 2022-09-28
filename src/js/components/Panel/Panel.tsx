/**
 * @name Panel
 *
 * @description
 *  A panel component that used to display a panel or table data.  See the teamsnap patterns
 *  library for more information https://teamsnap-ui-patterns.netlify.com/patterns/components/panel.html
 *
 * @example
 *  <Panel isStriped>
 *    Panel Child Data
 *  </Panel>
 *
 */

import * as React from 'react';
import { getClassName } from '../../utils/helpers';

export interface Props {
  children: React.ReactNode;
  isStriped?: boolean;
  maxSize?: string;
  className?: string;
  mods?: string;
  style?: React.CSSProperties;
  testId?: string;
}

const Panel = ({
  children,
  className,
  mods,
  isStriped,
  maxSize,
  style,
  testId,
  ...otherProps
}: Props) => {
  const panelClasses = getClassName(
    className,
    maxSize && `Panel--${maxSize}Max-stacked`,
    isStriped && 'Panel--striped',
    mods
  );

  return (
    <div className={panelClasses} style={style} data-testid={testId} {...otherProps}>
      {children}
    </div>
  );
};

Panel.defaultProps = {
  className: 'Panel',
  isStriped: false,
  maxSize: null,
  mods: null,
  style: {},
  testId: null,
  otherProps: {},
};

export default Panel;
