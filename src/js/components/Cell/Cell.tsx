/**
 * @name Cell
 *
 * @description
 *  A Cell component is a child of the <Grid> component.  For more information on Grid usage see the teamsnap patterns
 *  library. https://teamsnap-ui-patterns.netlify.com/patterns/components/grid.html
 *
 * @example
 *  <Cell mods='u-size1of2'>
 *    Grid Cell Child Data
 *  </Cell>
 *
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { getClassName } from '../../utils/helpers';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object,
  otherProps: PropTypes.object,
};

type Props = PropTypes.InferProps<typeof propTypes>;

const Cell = ({ children, className, mods, style, otherProps }: Props) => (
  <div className={getClassName(className, mods)} style={style} {...otherProps}>
    {children}
  </div>
);

Cell.defaultProps = {
  children: null,
  className: 'Grid-cell',
  mods: null,
  style: {},
  otherProps: {},
};

export default Cell;
