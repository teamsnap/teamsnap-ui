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
import { Skittles } from "../Skittles";

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
  headerItem: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    image: PropTypes.string,
    useBadge: PropTypes.bool,
  }),
  // a list of items to be displayed in the header component
  flyoutSections: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string.isRequired,
      tree: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string,
        // If an image is not provided and useBadge is, we will try to generate a badge based off the title
        useBadge: PropTypes.bool,
        // a function for wrapping each item. Commonly used with links or react router.
        wrapItem: PropTypes.func,
        tree: PropTypes.arrayOf(PropTypes.shape({
          title: PropTypes.string.isRequired,
          image: PropTypes.string,
          // If an image is not provided and useBadge is, we will try to generate a badge based off the title
          useBadge: PropTypes.bool,
          // a function for wrapping each item. Commonly used with links or react router.
          wrapItem: PropTypes.func,
          tree: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string.isRequired,
            image: PropTypes.string,
            // If an image is not provided and useBadge is, we will try to generate a badge based off the title
            useBadge: PropTypes.bool,
            // a function for wrapping each item. Commonly used with links or react router.
            wrapItem: PropTypes.func,
          })),
        })),
      })),
    })
  ),
  includeOverlay: PropTypes.bool,
  openItems: PropTypes.bool,
};

const itemPropTypes = {
  // Any additional classes to include
  mods: PropTypes.string,
  // String that matches a teamsnap-ui icon name
  icon: PropTypes.string,
  // Teamsnap UI modifiers passed to the icon component
  iconModifiers: PropTypes.string,
  // bool wether this item should be marked as active or not, multiple can be marked.
  isActive: PropTypes.bool,
  // function to handle an item being clicked.
  onClick: PropTypes.func,
  // a function for wrapping each item. Commonly used with links or react router.
  wrapItem: PropTypes.func,
};

type NavType = React.FunctionComponent<
  PropTypes.InferProps<typeof navPropTypes>
>;
type ItemType = React.FunctionComponent<
  PropTypes.InferProps<typeof itemPropTypes>
>;

const Item: ItemType = ({
  children,
  icon,
  iconModifiers,
  isActive,
  onClick,
  wrapItem,
}) => {
  const maybeIcon = icon ? (
    <Icon name={icon} mods={`${iconModifiers}`} />
  ) : null;
  const Wrapper = wrapItem ? wrapItem : ({ children }) => <>{children}</>;
  return (
    <Wrapper>
      <li
        className={`${isActive ? `is-active ` : ``}Nav-item`}
        onClick={onClick || (() => { })}
      >
        {maybeIcon} <span className="Nav-itemTitle">{children}</span>
      </li>
    </Wrapper>
  );
};

Item.propTypes = itemPropTypes;

const FlyOutNode = ({ item, openItems }) => {
  const [isExpanded, setIsExpanded] = React.useState(openItems);
  const Wrapper = item.wrapItem
    ? item.wrapItem
    : ({ children }) => <>{children}</>;
  return (
    <div className={`Nav-node${item.tree && item.tree.length > 0 ? ' Nav-hasChildren' : ''}`}>
      <div className="Nav-topLevelHeading u-flex" onClick={() => setIsExpanded(!isExpanded)}>
        {item.tree && (
          <div
            className={`Nav-caret ${isExpanded ? "Node-expanded" : ""
              }`}
          >
            <Icon mods="u-fontSizeLg u-spaceRightXs" name="caret-down" />
          </div>
        )}
        {/* This is weird, but a solution to help manage the required spacing to make things align */}
        {/* We can probably come up with a better solution here. */}
        <Wrapper>
          <div className={`${!item.tree ? 'Nav-noChildren' : ''} u-fill u-flex`}>
            {!item.image && item.useBadge && (
              <Skittles text={item.title} mods="u-spaceRightXs" />
            )}
            {item.title}
          </div>
        </Wrapper>
      </div>
      {isExpanded && item.tree && item.tree.length > 0 ? (
        <div className="Nav-submenu u-spaceBottomSm">{reducer(item.tree, openItems)}</div>
      ) : null}
    </div>
  );
};

/**
 * This function is pulled out and named so that it can be used by both FlyOutNode and generateFlyoutContents
 * @param acc an array
 * @param cur a flyout item
 */
const reducer = (tree: [], openItems: boolean) => {
  return tree.reduce((acc: [], cur: any) => [...acc, <FlyOutNode key={cur.title} item={cur} openItems={openItems} />], []);
}

const generateFlyoutContents = (flyoutSections: any, openItems: boolean) => {
  return flyoutSections.map((section, idx) => {
    return (
      <section className="u-borderTop u-spaceBottomSm" key={idx}>
        <div className="Nav-sectionHeading u-colorNeutral7 u-textUppercase u-textBold u-fontSizeXs">
          {section.heading}
        </div>
        <div className="Nav-sectionItems">{reducer(section.tree, openItems)}</div>
      </section>
    );
  });
};

const Nav: NavType & { Item: ItemType } = ({
  className,
  mods,
  children,
  style,
  otherProps,
  headerItem,
  flyoutSections,
  includeOverlay,
  openItems
}) => {
  const [isCollapsed, setCollapsed] = React.useState(false);
  const [isFlyoutActive, setIsFlyoutActive] = React.useState(false);
  const cname = getClassName(
    "Nav",
    isFlyoutActive && "is-flyout",
    isCollapsed && "is-collapsed",
    className,
    mods
  );

  const navHeaderIconClass = getClassName("Nav-headerIcon");

  return (
    <div className={`Nav-container ${isFlyoutActive ? 'is-flyout' : ''}`}>
      {(isFlyoutActive && includeOverlay) &&
        <div className="Nav-overlay" onClick={() => setIsFlyoutActive(!isFlyoutActive)} />
      }
      <nav className={cname} style={style} {...otherProps}>
        {headerItem ? (
          <div
            className="Nav-header u-textSemiBold"
            onClick={() => !isCollapsed && setIsFlyoutActive(!isFlyoutActive)}
          >
            <div className={navHeaderIconClass}>
              <Avatar src={headerItem.image} size="fill" />
            </div>
            <div className="u-sizeFill Nav-itemTitle u-spaceLeftSm">
              <span className="Nav-itemTitle" title={headerItem.title}>{headerItem.title}</span>
              {headerItem?.subtitle &&
                <span className="Nav-itemSubtitle" title={headerItem.subtitle}>{headerItem.subtitle}</span>
              }
            </div>
            {flyoutSections && (
              <div className="Nav-caret">
                <Icon mods="u-fontSizeMd u-spaceNone" name="down" />
              </div>
            )}
          </div>
        ) : null}
        <div className="Nav-body">
          {isFlyoutActive ? generateFlyoutContents(flyoutSections, openItems) : children}
        </div>
        {!isFlyoutActive && (
          <div className="Nav-footer" onClick={() => setCollapsed(!isCollapsed)}>
            <Icon name="left" />{" "}
            <span className="Nav-itemTitle">Collapse Menu</span>
          </div>
        )}

      </nav>
    </div>
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
