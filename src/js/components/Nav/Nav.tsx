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
    image: PropTypes.string,
    useBadge: PropTypes.bool,
  }),
  // a list of items to be displayed in the header component
  flyoutSections: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string.isRequired,
      tree: PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string,
        // If an image is not provided and useBadge is, we will try to generate a badge based off the title
        useBadge: PropTypes.bool,
        // a function for wrapping each item. Commonly used with links or react router.
        wrapItem: PropTypes.func,
        tree: PropTypes.shape({
          title: PropTypes.string.isRequired,
          image: PropTypes.string,
          // If an image is not provided and useBadge is, we will try to generate a badge based off the title
          useBadge: PropTypes.bool,
          // a function for wrapping each item. Commonly used with links or react router.
          wrapItem: PropTypes.func,
          tree: PropTypes.shape({
            title: PropTypes.string.isRequired,
            image: PropTypes.string,
            // If an image is not provided and useBadge is, we will try to generate a badge based off the title
            useBadge: PropTypes.bool,
            // a function for wrapping each item. Commonly used with links or react router.
            wrapItem: PropTypes.func,
          })
        })
      })
    }),
  ),
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

const Item: ItemType = ({ children, icon, iconModifiers, isActive, onClick, wrapItem }) => {
  const maybeIcon = icon ? <Icon name={ icon } mods={ `${iconModifiers}` } /> : null;
  const Wrapper = wrapItem ? wrapItem : ({ children }) => <>{ children }</>
  return (
    <Wrapper>
      <li className={ `${isActive ? `is-active ` : ``}Nav-item` } onClick={ onClick || (() => {}) }>
        { maybeIcon } <span className="Nav-itemTitle">{ children }</span>
      </li>
    </Wrapper>
  );
};

Item.propTypes = itemPropTypes;

const FlyOutNode = ({item}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const Wrapper = item.wrapItem ? item.wrapItem : ({ children }) => <>{ children }</>
  return <div className="u-padSm">
    <Wrapper>
      <div className="u-flex">
      { item.tree && <div className="u-size1of8 Nav-itemTitle u-textRight" onClick={ () => setIsExpanded(!isExpanded) }>
          <Icon mods="u-fontSizeMd" name="down" />
      </div> }
      <div className="u-fill">
        { !item.image && item.useBadge && <Skittles text={item.title} mods="u-spaceRightXs" /> }
        { item.title }
        </div>
      </div>
    </Wrapper>
    { isExpanded && item.tree ? <div>{ item.tree.reduce(reducer, []) }</div> : null }
  </div>
}

/**
 * This function is pulled out and named so that it can be used by both FlyOutNode and generateFlyoutContents
 * @param acc an array
 * @param cur a flyout item
 */
const reducer = (acc: [], cur) => {
  return [...acc, <FlyOutNode key={cur.title} item={cur} />]
};

const generateFlyoutContents = (flyoutSections: any) => {
  return flyoutSections.map((section, idx) => {
    return <section className="u-padSm u-borderTop" key={ idx }>
      <div className="Nav-sectionHeading u-colorNeutral7 u-textUppercase u-fontSizeSm">{ section.heading }</div>
      <div>{ section.tree.reduce(reducer, []) }</div>
    </section>
  });
}

const Nav: NavType & { Item: ItemType } = ({
  className,
  mods,
  children,
  style,
  otherProps,
  headerItem,
  flyoutSections
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

  const navHeaderIconClass = getClassName(
    "Nav-headerIcon",
  );

  return (
    <nav className={ cname } style={ style } { ...otherProps }>
      { headerItem ? (
        <div className="Nav-header u-textSemiBold">
          <div
            className={ navHeaderIconClass }
          >
            <Avatar
              src={ headerItem.image }
              size="fill"
            />
          </div>
          <div className="u-sizeFill Nav-itemTitle u-spaceLeftSm">
            <span className="Nav-itemTitle">
              { headerItem.title }
            </span>
          </div>
          { flyoutSections && <div className="u-size1of8 Nav-itemTitle u-textRight" onClick={ () => setIsFlyoutActive(!isFlyoutActive) }>
            <Icon mods="u-fontSizeMd" name="down" />
          </div> }
        </div>
      ) : null }
      <div className="Nav-body">{ isFlyoutActive ? generateFlyoutContents(flyoutSections) : children }</div>
      <div className="Nav-footer" onClick={ () => setCollapsed(!isCollapsed) }>
        <Icon name="left" />{ " " }
        <span className="Nav-itemTitle">Collapse Menu</span>
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
