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

import * as React from "react";
import * as PropTypes from "prop-types";
import { getClassName } from "../../utils/helpers";

class PanelRow extends React.PureComponent<PropTypes.InferProps<typeof PanelRow.propTypes>, any> {
  static propTypes = {
    children: PropTypes.node.isRequired,
    isWithCells: PropTypes.bool,
    isParent: PropTypes.bool,
    className: PropTypes.string,
    mods: PropTypes.string,
    style: PropTypes.object,
    otherProps: PropTypes.object
  };

  static defaultProps = {
    className: "Panel-row",
    isWithCells: null,
    isParent: null,
    mods: null,
    style: {},
    otherProps: {}
  };

  render() {
    const {
      children,
      isWithCells,
      isParent,
      className,
      mods,
      style,
      otherProps
    } = this.props;

    const panelClasses = getClassName(
      className,
      isWithCells && "Panel-row--withCells",
      isParent && "Panel-row--parent",
      mods
    );

    return (
      <div className={panelClasses} style={style} {...otherProps}>
        {children}
      </div>
    );
  }
}

export default PanelRow;
