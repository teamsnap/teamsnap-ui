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

import * as React from "react";
import * as PropTypes from "prop-types";
import { getClassName } from "../../utils/helpers";

class PanelCell extends React.PureComponent<PropTypes.InferProps<typeof PanelCell.propTypes>, any> {
  static propTypes = {
    children: PropTypes.node,
    isTitle: PropTypes.bool,
    isHeader: PropTypes.bool,
    className: PropTypes.string,
    mods: PropTypes.string,
    style: PropTypes.object,
    otherProps: PropTypes.object,
  };

  static defaultProps = {
    children: null,
    isTitle: false,
    isHeader: false,
    className: "Panel-cell",
    mods: null,
    style: {},
    otherProps: {}
  };
  renderTitle = () => <h4 className="Panel-title">{this.props.children}</h4>;

  render() {
    const {
      children,
      isHeader,
      isTitle,
      className,
      mods,
      style,
      otherProps
    } = this.props;

    const cellClasses = getClassName(
      className,
      isHeader && "Panel-cell--header",
      mods
    );

    return (
      <div className={cellClasses} style={style} {...otherProps}>
        {isTitle ? this.renderTitle() : children}
      </div>
    );
  }
}

export default PanelCell;
