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

const propTypes = {
  showSearch: PropTypes.bool,
  showHelp: PropTypes.bool,
  showAccount: PropTypes.bool,
  accountName: PropTypes.string,
  showActivity: PropTypes.bool,
};

const Tooltip: React.FunctionComponent<
  PropTypes.InferProps<typeof propTypes>
> = ({ showSearch, accountName, showHelp, showAccount, showActivity }) => {
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
      <div className="Grid-cell u-size1of4 u-flex u-flexAlignContentCenter u-flexJustifyEvenly u-padXs">
        <span style={{ cursor: "pointer" }}>
          {showHelp && (
            <>
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
              <span>Help</span>
            </>
          )}
        </span>
        <span style={{ cursor: "pointer" }}>
          {showAccount && (
            <>
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
              { accountName || "Account" }
            </>
          )}
        </span>
        <span style={{ cursor: "pointer" }}>
          {showActivity && (
            <>
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
              Activity
            </>
          )}
        </span>
      </div>
    </div>
  );
};

Tooltip.propTypes = propTypes;

Tooltip.defaultProps = {
  accountName: "Account",
  showAccount: true,
  showSearch: false,
  showActivity: true,
  showHelp: true
};

export default Tooltip;
