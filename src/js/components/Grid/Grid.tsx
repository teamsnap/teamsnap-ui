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

class Grid extends React.PureComponent<
  PropTypes.InferProps<typeof Grid.propTypes>,
  any
> {
  static propTypes = {
    children: PropTypes.node.isRequired,
    isFit: PropTypes.bool,
    isEqualHeight: PropTypes.bool,
    isAlignCenter: PropTypes.bool,
    isAlignMiddle: PropTypes.bool,
    isWithGutter: PropTypes.bool,
    className: PropTypes.string,
    mods: PropTypes.string,
    style: PropTypes.object,
    otherProps: PropTypes.object,
  };

  static defaultProps = {
    isFit: false,
    isEqualHeight: false,
    isAlignCenter: false,
    isAlignMiddle: false,
    isWithGutter: false,
    className: 'Grid',
    mods: null,
    style: {},
    otherProps: {},
  };

  render() {
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
      otherProps,
    } = this.props;

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
      <div className={gridClasses} style={style} {...otherProps}>
        {children}
      </div>
    );
  }
}

export default Grid;
