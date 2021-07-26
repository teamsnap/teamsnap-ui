/**
 * @name Toolbar
 *
 * @description
 * An element used to provide contextually based actions for the content below. *
 *
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Icon } from '../Icon';

enum Menu {
  None,
  Account,
  Admin,
  Help,
}

const propTypes = {
  showHelp: PropTypes.bool,
  showAccount: PropTypes.bool,
  showAdmin: PropTypes.bool,
  helpBody: PropTypes.node,
  accountBody: PropTypes.node,
  adminBody: PropTypes.node,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

const Toolbar: React.FunctionComponent<PropTypes.InferProps<typeof propTypes>> =
  ({
    showHelp,
    showAccount,
    showAdmin,
    helpBody,
    accountBody,
    adminBody,
    children,
  }) => {
    const [activeMenu, setActiveMenu] = React.useState(Menu.None);
    React.useEffect(() => {
      const listener = (e) => {
        const isTargetingPopup = e.target.closest('.flyout-container') != null;

        if (!isTargetingPopup) {
          setActiveMenu(Menu.None);
        }
      };
      document.body.addEventListener('click', listener);

      return () => {
        document.body.removeEventListener('click', listener);
      };
    });

    return (
      <div className="Grid Toolbar">
        {children}

        <div className="Grid-cell u-flexAuto u-sizeFit u-flex u-flexAlignContentCenter u-flexJustifyEnd u-padXs flyout-container">
          <div className="u-posRelative">
            <span
              style={{ cursor: 'pointer' }}
              onClick={() => setActiveMenu(Menu.Help)}
            >
              {showHelp && (
                <Icon
                  className="Icon u-spaceLeftLg"
                  name="help"
                  style={{
                    border: '1px solid black',
                    borderRadius: '12px',
                    padding: '4px',
                    width: '24px',
                    height: '24px',
                  }}
                />
              )}
            </span>
            {activeMenu == Menu.Help && (
              <div className="u-posAbsolute Toolbar-flyout">{helpBody}</div>
            )}
          </div>
          <div className="u-posRelative">
            <span
              style={{ cursor: 'pointer' }}
              onClick={() => setActiveMenu(Menu.Account)}
            >
              {showAccount && (
                <Icon
                  className="Icon u-spaceLeftLg"
                  name="user"
                  style={{
                    border: '1px solid black',
                    borderRadius: '12px',
                    padding: '4px',
                    width: '24px',
                    height: '24px',
                  }}
                />
              )}
            </span>
            {activeMenu == Menu.Account && (
              <div className="u-posAbsolute Toolbar-flyout">{accountBody}</div>
            )}
          </div>
          <div className="u-posRelative">
            <span
              style={{ cursor: 'pointer' }}
              onClick={() => setActiveMenu(Menu.Admin)}
            >
              {showAdmin && (
                <Icon
                  className="Icon u-spaceLeftLg"
                  name="wrench"
                  style={{
                    border: '1px solid black',
                    borderRadius: '12px',
                    padding: '4px',
                    width: '24px',
                    height: '24px',
                  }}
                />
              )}
            </span>
            {activeMenu == Menu.Admin && (
              <div className="u-posAbsolute Toolbar-flyout">{adminBody}</div>
            )}
          </div>
        </div>
      </div>
    );
  };

Toolbar.propTypes = propTypes;

Toolbar.defaultProps = {
  showAccount: true,
  showAdmin: true,
  showHelp: true,
};

export default Toolbar;
