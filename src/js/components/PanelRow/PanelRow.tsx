/**
 * @name PanelRow
 *
 * @description
 *  A panel row component is used with the Panel to wrap the rows for a Panel or table.  See the teamsnap
 *  patterns library for more information https://teamsnap-ui-patterns.netlify.com/patterns/components/panel.html
 *
 * @example
 *  <PanelRow isWithCells>
 *    PanelRow Child Data
 *  </PanelRow>
 *
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { getClassName } from '../../utils/helpers';

const propTypes = {
  children: PropTypes.node.isRequired,
  isWithCells: PropTypes.bool,
  isParent: PropTypes.bool,
  className: PropTypes.string,
  mods: PropTypes.string,
  role: PropTypes.string,
  style: PropTypes.object,
  testId: PropTypes.string,
  otherProps: PropTypes.object,
};

type Props = PropTypes.InferProps<typeof propTypes>;

const PanelRow = ({
  children,
  isWithCells,
  isParent,
  className,
  mods,
  role,
  style,
  testId,
  otherProps,
}: Props) => {
  const panelClasses = getClassName(
    className,
    isWithCells && 'Panel-row--withCells',
    isParent && 'Panel-row--parent',
    mods
  );

  return (
    <div className={panelClasses} role={role} style={style} data-testid={testId} {...otherProps}>
      {children}
    </div>
  );
};

PanelRow.defaultProps = {
  className: 'Panel-row',
  isWithCells: null,
  isParent: null,
  mods: null,
  role: 'row',
  style: {},
  testId: null,
  otherProps: {},
};

export default PanelRow;
