import * as React from 'react';

import PasswordToggleInput from './PasswordToggleInput';

export default {
  title: 'Components/Forms/PasswordToggleInput',
};

export const Default = () => {
  console.log('Hello');

  const otherProps = {
    placeholder: 'something',
    name: 'juaquin',
    type: 'text',
    className: 'u-padSm'
  }

  return (
    <PasswordToggleInput
      className="u-xs-fontSizeLg u-fontSizeMd"
      {...otherProps}
    />
  )
}
