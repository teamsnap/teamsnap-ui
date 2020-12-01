/**
 * @name Nav
 *
 * @description
 *  A component for rendering a vertical, usually left-aligned, navigation.
 *  This component offers a collapsable width.
 *
 * Please see the Storybook example for how we recommend using the Nav component.
 *
 */

import * as React from "react";
import * as PropTypes from "prop-types";
import { Icon } from "../Icon";
import { getClassName } from "../../utils/helpers";
import { Avatar } from "../Avatar";

const navPropTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object,
  otherProps: PropTypes.object,
  headerItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.string,
    })
  ),
};

const itemPropTypes = {
  icon: PropTypes.string,
  iconModifiers: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};

type NavType = React.FunctionComponent<
  PropTypes.InferProps<typeof navPropTypes>
>;
type ItemType = React.FunctionComponent<
  PropTypes.InferProps<typeof itemPropTypes>
>;

const Item: ItemType = ({ children, icon, iconModifiers, isActive, onClick }) => {
  const maybeIcon = icon ? <Icon name={icon} mods={`u-spaceRightXs ${iconModifiers}`} /> : null;
  return (
    <li className={`${isActive ? `is-active ` : ``}nav-item`} onClick={onClick || (() => {})}>
      {maybeIcon} <span className="nav-item-title">{children}</span>
    </li>
  );
};

const Nav: NavType & { Item: ItemType } = ({
  className,
  mods,
  children,
  style,
  otherProps,
  headerItems,
}) => {
  const [isCollapsed, setCollapsed] = React.useState(false);
  const cname = getClassName(
    "Nav",
    isCollapsed && "is-collapsed",
    className,
    mods
  );

  return (
    <nav className={cname} style={style} {...otherProps}>
      {headerItems && headerItems.length ? (
        <div className="nav-header u-textSemiBold u-flex">
          <div
            className={`${
              !isCollapsed ? "u-size1of8" : ""
            } nav-header-icon u-flex u-flexAlignItemsCenter u-flexJustifyCenter`}
          >
            <Avatar
              src={headerItems[0].image}
              size="fill"
            />
          </div>
          <div className="u-sizeFill nav-item-title u-flex u-flexAlignItemsCenter u-spaceLeftSm">
            <span className="nav-item-title u-textEllipsis">
              {headerItems[0].title}
            </span>
          </div>
          <div className="u-size1of8 u-flex u-flexAlignItemsCenter u-flexJustifyCenter nav-item-title">
            <Icon style={{ fontSize: "14px" }} name="down" />
          </div>
        </div>
      ) : null}
      <div className="u-sizeFill">{children}</div>
      <div className="nav-collapse" onClick={() => setCollapsed(!isCollapsed)}>
        <Icon name="left" />{" "}
        <span className="nav-item-title">Collapse Menu</span>
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
