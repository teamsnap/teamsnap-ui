/**
 * @name PanelCell
 *
 * @description
 *  A panel cell component is used for building tables with <Panel /> and <PanelRow /> components.  See the teamsnap
 *  patterns library for more information https://teamsnap-ui-patterns.netlify.com/patterns/components/panel.html
 *
 * @example
 *  <PanelCell isTitle>
 *    PanelCell Child Data
 *  </PanelCell>
 *
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';

import { getClassName } from '../../utils/helpers';

const propTypes = {
  children: PropTypes.node,
  isHeader: PropTypes.bool,
  isTitle: PropTypes.bool,
  className: PropTypes.string,
  mods: PropTypes.string,
  role: PropTypes.string,
  style: PropTypes.object,
  otherProps: PropTypes.object,
};

type Props = PropTypes.InferProps<typeof propTypes>;

const PanelCell = ({
  children,
  isHeader,
  isTitle,
  className,
  mods,
  role,
  style,
  otherProps,
}: Props) => {
  const renderTitle = () => <h4 className="Panel-title">{children}</h4>;

  const cellClasses = getClassName(className, isHeader && 'Panel-cell--header', mods);

  return (
    <div className={cellClasses} role={role} style={style} {...otherProps}>
      {isTitle ? renderTitle() : children}
    </div>
  );
};

PanelCell.defaultProps = {
  children: null,
  isTitle: false,
  isHeader: false,
  className: 'Panel-cell',
  mods: null,
  role: 'cell',
  style: {},
  otherProps: {},
};

export default PanelCell;
