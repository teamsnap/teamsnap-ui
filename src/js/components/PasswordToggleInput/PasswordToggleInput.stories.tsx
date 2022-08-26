import * as React from 'react';

import PasswordToggleInput from './PasswordToggleInput';

export default {
  title: 'Components/Forms/PasswordToggleInput',
};

export const Default = () => {
  const otherProps = {
    placeholder: 'something',
    name: 'juaquin',
    type: 'text',
    className: 'u-padSm u-padSidesMd'
  }

  return (
    <PasswordToggleInput
      className="u-xs-fontSizeLg u-fontSizeMd"
      {...otherProps}
    />
  )
}
