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
import * as PropTypes from 'prop-types';
import { getClassName } from '../../utils/helpers';

class PanelBody extends React.PureComponent<PropTypes.InferProps<typeof PanelBody.propTypes>, any> {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    mods: PropTypes.string,
    role: PropTypes.string,
    style: PropTypes.shape({}),
    otherProps: PropTypes.shape({}),
  };

  static defaultProps = {
    className: 'Panel-body',
    mods: null,
    style: {},
    otherProps: {},
  };

  render() {
    const { children, className, mods, role, style, otherProps } = this.props;

    return (
      <div className={getClassName(className, mods)} role={role} style={style} {...otherProps}>
        {children}
      </div>
    );
  }
}

export default PanelBody;
