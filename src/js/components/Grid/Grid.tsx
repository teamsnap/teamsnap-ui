/**
 * @name Grid
 *
 * @description
 *  A Grid component is used for creating Flexbased grid system, they are used in conjunction with <Cell />.
 *  For more information on Grid usage see the teamsnap patterns library. https://teamsnap-ui-patterns.netlify.com/patterns/components/grid.html
 *
 * @example
 *  <Grid isWithGutter>
 *    Grid Child Data
 *  </Grid>
 *
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { getClassName } from '../../utils/helpers';

const propTypes = {
  children: PropTypes.node.isRequired,
  isFit: PropTypes.bool,
  isEqualHeight: PropTypes.bool,
  isAlignCenter: PropTypes.bool,
  isAlignMiddle: PropTypes.bool,
  isWithGutter: PropTypes.bool,
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object,
  testId: PropTypes.string,
  otherProps: PropTypes.object,
};

const Grid = (props: PropTypes.InferProps<typeof propTypes>) => {
  const {
    children,
    isFit,
    isEqualHeight,
    isAlignCenter,
    isAlignMiddle,
    isWithGutter,
    className,
    mods,
    style,
    testId,
    otherProps,
  } = props;

  const gridClasses = getClassName(
    className,
    isFit && 'Grid--fit',
    isEqualHeight && 'Grid--equalHeight',
    isAlignCenter && 'Grid--alignCenter',
    isAlignMiddle && 'Grid--alignMiddle',
    isWithGutter && 'Grid--withGutter',
    mods
  );

  return (
    <div className={gridClasses} style={style} data-testid={testId} {...otherProps}>
      {children}
    </div>
  );
};

Grid.defaultProps = {
  isFit: false,
  isEqualHeight: false,
  isAlignCenter: false,
  isAlignMiddle: false,
  isWithGutter: false,
  className: 'Grid',
  mods: null,
  style: {},
  testId: null,
  otherProps: {},
};

export default Grid;
