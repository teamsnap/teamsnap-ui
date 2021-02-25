/**
 * @name Tooltip
 *
 * @description
 * An element to display an icon and help text on hover.  See the teamsnap patterns library for more information.
 * https://teamsnap-ui-patterns.netlify.com/patterns/components/tooltip.html
 *
 * @example
 *  <Tooltip type='icon' text="I'm some help text.">
 *   Icon or Text to Render as Child
 *  </Tooltip>
 *
 */

import * as React from "react";
import * as PropTypes from "prop-types";
import { Icon } from "../Icon";
import { Field } from "../Field";

enum Menu {
  None, Account, Admin, Help
}

const propTypes = {
  showSearch: PropTypes.bool,
  showHelp: PropTypes.bool,
  showAccount: PropTypes.bool,
  showAdmin: PropTypes.bool,
  helpBody: PropTypes.node,
  accountBody: PropTypes.node,
  adminBody: PropTypes.node,
};

const Toolbar: React.FunctionComponent<
  PropTypes.InferProps<typeof propTypes>
> = ({
  showSearch,
  showHelp,
  showAccount,
  showAdmin,
  helpBody,
  accountBody,
  adminBody,
}) => {

  const [activeMenu, setActiveMenu] = React.useState(Menu.None);
  React.useEffect(() => {
    const listener = (e) => {
      const isTargetingPopup = e.target.closest('.flyout-container') != null;

      if (!isTargetingPopup) {
        setActiveMenu(Menu.None);
    }
    }
    document.body.addEventListener("click", listener);

    return () => {
      document.body.removeEventListener("click", listener);
    };
  });

  return (
    <div className="Grid Toolbar">
      <div className="Grid-cell u-size3of4">
        {showSearch && (
          <Field
            formFieldProps={{
              placeholder: "Find a program, season, or member",
              leftIcon: <Icon className="Icon" name="search" />,
            }}
            name="Sample"
          />
        )}
      </div>
      <div className="Grid-cell u-size1of4 u-flex u-flexAlignContentCenter u-flexJustifyEvenly u-padXs u-posRelative flyout-container">
        <span style={{ cursor: "pointer" }} onClick={() => setActiveMenu(Menu.Help)}>
          {showHelp && (
            <Icon
              className="Icon"
              name="info"
              style={{
                border: "1px solid black",
                borderRadius: "12px",
                padding: "4px",
                width: "24px",
                height: "24px",
                marginRight: "4px",
              }}
            />
          )}
        </span>
        {activeMenu == Menu.Help && <div className="u-posAbsolute Toolbar-flyout" style={{left: "-60px"}}>{helpBody}</div>}
        <span style={{ cursor: "pointer" }} onClick={() => setActiveMenu(Menu.Account)}>
          {showAccount && (
            <Icon
              className="Icon"
              name="user"
              style={{
                border: "1px solid black",
                borderRadius: "12px",
                padding: "4px",
                width: "24px",
                height: "24px",
                marginRight: "4px",
              }}
            />
          )}
        </span>
        {activeMenu == Menu.Account && <div className="u-posAbsolute Toolbar-flyout" style={{left: "-10px"}}>{accountBody}</div>}
        <span style={{ cursor: "pointer" }} onClick={() => setActiveMenu(Menu.Admin)}>
          {showAdmin && (
            <Icon
              className="Icon"
              name="notifications"
              style={{
                border: "1px solid black",
                borderRadius: "12px",
                padding: "4px",
                width: "24px",
                height: "24px",
                marginRight: "4px",
              }}
            />
          )}
        </span>
        {activeMenu == Menu.Admin && <div className="u-posAbsolute Toolbar-flyout">{adminBody}</div>}
      </div>
    </div>
  );
};

Toolbar.propTypes = propTypes;

Toolbar.defaultProps = {
  showAccount: true,
  showSearch: false,
  showAdmin: true,
  showHelp: true,
};

export default Toolbar;
