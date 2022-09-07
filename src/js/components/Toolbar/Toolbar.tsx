/**
 * @name Toolbar
 *
 * @description
 * An element used to provide contextually based actions for the content below. *
 *
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';

import { Button } from '../Button';
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
  testId: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

type Props = PropTypes.InferProps<typeof propTypes>;

const Toolbar = ({
  showHelp,
  showAccount,
  showAdmin,
  helpBody,
  accountBody,
  adminBody,
  testId,
  children,
}: Props) => {
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

  const btnStyle = { color: '#000', marginTop: '-5px' };
  const iconStyle = {
    border: '1px solid black',
    borderRadius: '12px',
    padding: '4px',
    width: '24px',
    height: '24px',
  };

  return (
    <div className="Grid Toolbar" data-testid={testId}>
      {children}

      <div className="Grid-cell u-sizeFit u-flex u-flexAlignContentCenter u-flexJustifyEnd u-padXs flyout-container">
        <div>
          <Button type="link" style={btnStyle} onClick={() => setActiveMenu(Menu.Help)}>
            {showHelp && <Icon className="Icon u-spaceLeftLg" name="help" style={iconStyle} />}
          </Button>
          {activeMenu === Menu.Help && (
            <div className="u-posAbsolute Toolbar-flyout">{helpBody}</div>
          )}
        </div>
        <div>
          <Button type="link" style={btnStyle} onClick={() => setActiveMenu(Menu.Account)}>
            {showAccount && <Icon className="Icon u-spaceLeftLg" name="user" style={iconStyle} />}
          </Button>
          {activeMenu === Menu.Account && (
            <div className="u-posAbsolute Toolbar-flyout">{accountBody}</div>
          )}
        </div>
        {showAdmin && (
          <div>
            <Button type="link" style={btnStyle} onClick={() => setActiveMenu(Menu.Admin)}>
              <Icon className="Icon u-spaceLeftLg" name="wrench" style={iconStyle} />
            </Button>
            {activeMenu === Menu.Admin && (
              <div className="u-posAbsolute Toolbar-flyout">{adminBody}</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

Toolbar.propTypes = propTypes;

Toolbar.defaultProps = {
  showAccount: true,
  showAdmin: true,
  showHelp: true,
  testId: null,
};

export default Toolbar;
