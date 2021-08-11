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
  otherProps?: Object;
}

const Panel = ({ children, className, mods, isStriped, maxSize, style, otherProps }: Props) => {
  const panelClasses = getClassName(
    className,
    maxSize && `Panel--${maxSize}Max-stacked`,
    isStriped && 'Panel--striped',
    mods
  );

  console.log('style', style);

  return (
    <div className={panelClasses} style={style} {...otherProps}>
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
  otherProps: {},
};

export default Panel;
