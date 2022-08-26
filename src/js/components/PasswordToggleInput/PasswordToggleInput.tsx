import * as React from 'react';
import { Icon } from '../Icon';

interface Props {
  className?: string;
  onBlur?: (e: any) => void;
}

const PasswordToggleInput = ({ className = '', onBlur, ...rest }: Props) => {
  const [visible, setVisible] = React.useState<boolean>(false);
  const [inputActive, setInputActive] = React.useState<boolean>(false);

  return (
    <div
      className={`PasswordToggleInput Grid-cell u-flex u-border u-borderRadiusLg u-padLeftXs u-padRightMd u-flexAlignItemsCenter ${inputActive ? 'PasswordToggleInput--active' : ''} ${className}`}
      data-testid="password-toggle-input"
      onKeyDown={() => setVisible(visible)}
      onClick={() => setVisible(!visible)}
      role="button"
      tabIndex={0}
    >
      <input
        className="u-sizeFull u-borderNone u-xs-fontSizeLg u-fontSizeMd"
        {...rest}
        type={visible ? 'text' : 'password'}
        onFocus={() => setInputActive(!inputActive)}
        onBlur={(e) => {
          setInputActive(!inputActive);

          if (onBlur) {
            onBlur(e);
          }
        }}
      />

      <Icon name={visible ? 'visibility-off' : 'visibility'} />
    </div>
  );
};

export default PasswordToggleInput;
