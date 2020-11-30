/**
 * @name Button
 *
 * @description
 *  A common button component that will render the appropriate styles for a button or link.  See the teamsnap patterns
 *  library for more information https://teamsnap-ui-patterns.netlify.com/patterns/components/button.html
 *
 * @example
 *  <Button
 *    handleClick={ () => console.warn('Clicky Clicky') }
 *    color='primary'
 *    size='small'
 *    isDisabled
 *    mods='u-spaceTopMd'>
 *    Click Me
 *  </Button>
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
    <li className={isActive ? `is-active` : ``}>
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
      <div>
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
