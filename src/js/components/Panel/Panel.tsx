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
import * as PropTypes from 'prop-types';
import { getClassName } from '../../utils/helpers';

class Panel extends React.PureComponent<PropTypes.InferProps<typeof Panel.propTypes>, any> {
  static propTypes = {
    children: PropTypes.node.isRequired,
    isStriped: PropTypes.bool,
    maxSize: PropTypes.string,
    className: PropTypes.string,
    mods: PropTypes.string,
    style: PropTypes.object,
    otherProps: PropTypes.object,
  };

  static defaultProps = {
    className: 'Panel',
    isStriped: false,
    maxSize: null,
    mods: null,
    style: {},
    otherProps: {},
  };

  render() {
    const { children, className, mods, isStriped, maxSize, style, otherProps } = this.props;

    const panelClasses = getClassName(
      className,
      maxSize && `Panel--${maxSize}Max-stacked`,
      isStriped && 'Panel--striped',
      mods
    );

    return (
      <div className={panelClasses} style={style} {...otherProps}>
        {children}
      </div>
    );
  }
}

export default Panel;
