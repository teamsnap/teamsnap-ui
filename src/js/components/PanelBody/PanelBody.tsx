/**
 * @name PanelBody
 *
 * @description
 *  A panel body component is used with the Panel to wrap the body content.  See the teamsnap patterns
 *  library for more information https://teamsnap-ui-patterns.netlify.com/patterns/components/panel.html
 *
 * @example
 *  <PanelBody>
 *    PanelBody Child Data
 *  </PanelBody>
 *
 */

import * as React from 'react';
import { getClassName } from '../../utils/helpers';

export interface Props {
  children: React.ReactNode;
  className?: string;
  mods?: string;
  role?: string;
  style?: React.CSSProperties;
  otherProps?: object;
}

const PanelBody = ({ children, className, mods, role, style, otherProps }: Props) => (
  <div className={getClassName(className, mods)} role={role} style={style} {...otherProps}>
    {children}
  </div>
);

PanelBody.defaultProps = {
  className: 'Panel-body',
  mods: null,
  style: {},
  otherProps: {},
};

export default PanelBody;
