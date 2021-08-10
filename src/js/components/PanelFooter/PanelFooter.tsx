/**
 * @name PanelFooter
 *
 * @description
 *  A panel footer component is used with the Panel to wrap the footer content.  See the teamsnap patterns
 *  library for more information https://teamsnap-ui-patterns.netlify.com/patterns/components/panel.html
 *
 * @example
 *  <PanelFooter>
 *    PanelFooter Child Data
 *  </PanelFooter>
 *
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { getClassName } from '../../utils/helpers';

class PanelFooter extends React.PureComponent<
  PropTypes.InferProps<typeof PanelFooter.propTypes>,
  any
> {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    mods: PropTypes.string,
    style: PropTypes.object,
    otherProps: PropTypes.object,
  };

  static defaultProps = {
    className: 'Panel-footer',
    mods: null,
    style: {},
    otherProps: {},
  };

  render() {
    const { children, className, mods, style, otherProps } = this.props;

    return (
      <footer className={getClassName(className, mods)} style={style} {...otherProps}>
        {children}
      </footer>
    );
  }
}

export default PanelFooter;
