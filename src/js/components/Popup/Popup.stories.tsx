import * as React from 'react';
import { storiesOf } from '@storybook/react';
import PopupAction from './PopupAction';
import PopupConfirm from './PopupConfirm';

const stories = storiesOf('Popup', module);

export default {
  title: 'Popup',
  component: PopupAction,
};

const actions = [
  {
    text: 'Log to console',
    callback: () => {
      console.log('Logging to console');
    },
    requiresConfirmation: true,
    confirmationText: 'Do you really want to write to the console?',
  },
  {
    text: 'JavaScript Alert',
    callback: () => {
      alert('whoa!');
    },
  },
];

stories.add('PopupActions', () => (
  <PopupAction
    text="..."
    actions={actions}
    direction={['down', 'left']}
    popupStyle={{ width: '150px' }}
  />
));

stories.add('PopupConfirm', () => {
  const popupText = <h4>Do you really want to hurt me? Do you really want to make me cry?</h4>;

  const onAccept = () => {
    alert('You said yes!');
  };

  const onCancel = () => {
    alert('Good. I dont want to hurt or cry.');
  };

  return (
    <PopupConfirm
      onAccept={onAccept}
      onCancel={onCancel}
      buttonText="Perform the Culture Club!"
      popUpText={popupText}
    />
  );
});
