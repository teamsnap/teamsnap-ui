/**
 * @name Nav
 *
 * @description
 *  A component for rendering a vertical, usually left-aligned, navigation.
 *  This component offers a collapsable width.
 *  Additionally,
 *
 * Please see the Storybook example for how we recommend using the Nav component.
 *
 */

import * as React from "react";
import * as PropTypes from "prop-types";
import { Icon } from "../Icon";
import { getClassName } from "../../utils/helpers";

const navPropTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object,
  otherProps: PropTypes.object,
};

const itemPropTypes = {
  icon: PropTypes.string,
  iconModifiers: PropTypes.string,
  isActive: PropTypes.bool,
}

type NavType = React.FunctionComponent<PropTypes.InferProps<typeof navPropTypes>>;
type ItemType = React.FunctionComponent<PropTypes.InferProps<typeof itemPropTypes>>;

const Item: ItemType = ({
  children,
  icon,
  iconModifiers,
  isActive,
}) => {
  const maybeIcon = icon ? <Icon name={icon} mods={iconModifiers} /> : null
  return (
    <li className={`${isActive ? `is-active ` : ``}nav-item`}>
      {maybeIcon} <span className="nav-item-title">{children}</span>
    </li>
  )
};

const Nav: NavType & { Item: ItemType } = ({
  className,
  mods,
  children,
  style,
  otherProps,
}) => {
  const [isCollapsed, setCollapsed] = React.useState(false);
  const cname = getClassName(
    "Nav",
    isCollapsed && "is-collapsed",
    className,
    mods
  );

  return (
    <nav
      className={cname}
      style={style}
      {...otherProps}
    >
      <div className="nav-header u-textSemiBold u-flex">
        <div className={`${!isCollapsed ? "u-size1of8" : ""} nav-header-icon u-flex u-flexAlignItemsCenter u-flexJustifyCenter`}>
          <Icon name="home" />
        </div>
        <div className="u-sizeFill nav-item-title u-spaceLeftSm">
          <span className="nav-item-title u-textEllipsis">Boulder Sports</span>
        </div>
        <div className="u-size1of8 u-flex u-flexAlignItemsCenter u-flexJustifyCenter nav-item-title">
          <Icon style={{fontSize: "14px"}} name="down" />
        </div>
      </div>
      <div className="u-sizeFill">
        {children}
      </div>
      <div className="nav-collapse" onClick={() => setCollapsed(!isCollapsed)}>
        <Icon name="left"/> <span className="nav-item-title">Collapse Menu</span>
      </div>
    </nav>
  );
};

Nav.Item = Item;

Nav.propTypes = navPropTypes;

Nav.defaultProps = {
  children: null,
  mods: null,
  style: {},
  otherProps: {},
};

export default Nav;
