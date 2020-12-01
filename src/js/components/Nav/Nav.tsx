/**
 * @name Nav
 *
 * @description
 *  A component for rendering a vertical, usually left-aligned, navigation.
 *  This component offers a collapsable width.
 *
 * Please see the Storybook example for a more robust way of how we recommend using the Nav component.
 *
 * <Nav>
 *  <Nav.Item onClick={() => alert("Home clicked!")}>Home</Nav.Item>
 *  <Nav.Item link="https://www.teamsnap.com" linkProps={{target: "_blank"}}>External Link</Nav.Item>
 * </Nav>
 */

import * as React from "react";
import * as PropTypes from "prop-types";
import { Icon } from "../Icon";
import { getClassName } from "../../utils/helpers";
import { Avatar } from "../Avatar";

const navPropTypes = {
  // React component children
  children: PropTypes.node,
  // Custom classnames to add
  className: PropTypes.string,
  // TeamSnap UI modifiers to add to class name
  mods: PropTypes.string,
  // Custom React Styles to add to the nav
  style: PropTypes.object,
  // Any extraneous props
  otherProps: PropTypes.object,
  // a list of items to be displayed in the header component
  headerItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.string,
    })
  ),
};

const itemPropTypes = {
  // String that matches a teamsnap-ui icon name
  icon: PropTypes.string,
  // Teamsnap UI modifiers passed to the icon component
  iconModifiers: PropTypes.string,
  // bool wether this item should be marked as active or not, multiple can be marked.
  isActive: PropTypes.bool,
  // function to handle an item being clicked.
  onClick: PropTypes.func,
  // *external* link, creates an anchor tag under the hood. Use onClick and router state for SPA transitions
  link: PropTypes.string,
  // any props to pass to the generated anchor tag (target, for example)
  linkProps: PropTypes.any
};

type NavType = React.FunctionComponent<
  PropTypes.InferProps<typeof navPropTypes>
>;
type ItemType = React.FunctionComponent<
  PropTypes.InferProps<typeof itemPropTypes>
>;

const Item: ItemType = ({ children, icon, iconModifiers, isActive, onClick, link, linkProps }) => {
  const maybeIcon = icon ? <Icon name={icon} mods={`u-spaceRightXs ${iconModifiers}`} /> : null;
  const Wrapper = link ? ({children}) => <a href={link} {...linkProps}>{children}</a> : ({children}) => <>{children}</>
  return (
    <Wrapper>
      <li className={`${isActive ? `is-active ` : ``}nav-item`} onClick={onClick || (() => {})}>
        {maybeIcon} <span className="nav-item-title">{children}</span>
      </li>
    </Wrapper>
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
