/**
 * @name PanelRowExpandable
 *
 * @description
 *  An expandable panel row is used to show/hide nested table data.  See the teamsnap patterns
 *  library for more information https://teamsnap-ui-patterns.netlify.com/patterns/components/panel.html
 *
 *  This component accepts an array of objects as `parentColumns` and `childColumns`.  These columns will spread the
 *  object out on the <PanelCell /> by default, unless a `renderColumn` function is passed.
 *
 * @example
 *  <PanelRowExpandable
 *    parentColumns={[{ children: 'Homer Simpson', mods: 'u-size1of2' }, { children: 'Marge Simpson', mods: 'u-size1of2' }]}
 *    childColumns={[{ children: 'Bart Simpson', mods: u-size1of2' }, { children: 'Lisa Simpson', mods: 'u-size1of2' }]}
 *    renderColumn={ column => <div style={{ outline: '1px dashed red' }} { ...column }></div> } />
 *
 */

import * as React from "react";
import * as PropTypes from "prop-types";
import PanelRow from "../PanelRow";
import PanelCell from "../PanelCell";
import Icon from "../Icon";
import { getClassName } from "../../utils/helpers";

class PanelRowExpandable extends React.PureComponent<any, any> {
  static propTypes = {
    parentColumns: PropTypes.arrayOf(PropTypes.object).isRequired,
    childColumns: PropTypes.arrayOf(PropTypes.object),
    renderColumn: PropTypes.func,
    className: PropTypes.string,
    mods: PropTypes.string,
    style: PropTypes.object,
    otherProps: PropTypes.object
  };

  static defaultProps = {
    childColumns: null,
    renderColumn: null,
    className: "Panel-expandableRow",
    mods: null,
    style: {},
    otherProps: {}
  };

  state = {
    isExpanded: false
  };

  handleRowClick = e => {
    e.preventDefault();

    this.setState({
      isExpanded: !this.state.isExpanded
    });
  };

  renderChildLink = children => {
    const { isExpanded } = this.state;

    const linkClasses = getClassName(
      "Panel-expandableControl",
      isExpanded && "is-expanded"
    );

    return (
      <a onClick={this.handleRowClick} className={linkClasses}>
        <span className="Panel-expandableControlIcon">
          <Icon name="right" />
        </span>
        {children}
      </a>
    );
  };

  renderColumns = (columns, includeLink = false) => {
    const { renderColumn } = this.props;

    return columns.map((column, index) => {
      const { children: columnChildren, ...props } = column;
      const children =
        includeLink && index === 0
          ? this.renderChildLink(columnChildren)
          : columnChildren;

      return renderColumn ? (
        renderColumn({ key: index, children, ...props })
      ) : (
        <PanelCell key={index} {...props}>
          {children}
        </PanelCell>
      );
    });
  };

  renderChildColumns = childColumns => {
    const { isExpanded } = this.state;

    return (
      <div
        className={getClassName("Panel-childRows", isExpanded && "is-expanded")}
      >
        <PanelRow isWithCells>{this.renderColumns(childColumns)}</PanelRow>
      </div>
    );
  };

  render() {
    const {
      parentColumns,
      childColumns,
      className,
      mods,
      style,
      otherProps
    } = this.props;
    const hasChildren = childColumns && childColumns.length > 0;

    return (
      <div
        className={getClassName(className, mods)}
        style={style}
        {...otherProps}
      >
        <PanelRow isWithCells isParent>
          {this.renderColumns(parentColumns, hasChildren)}
        </PanelRow>

        {hasChildren && this.renderChildColumns(childColumns)}
      </div>
    );
  }
}

export default PanelRowExpandable;
