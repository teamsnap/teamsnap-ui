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

stories.add('PopupActions', () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', minHeight: '100px' }}>
      <div>
        <PopupAction
          text="..."
          actions={actions}
          direction={['down', 'left']}
          popupStyle={{ width: '150px' }}
        />
      </div>
    </div>
  );
});

stories.add('PopupActions - Down & Left', () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', minHeight: '100px' }}>
      <div>
        <PopupAction
          text="..."
          actions={actions}
          direction={['down', 'left']}
          popupStyle={{ width: '150px' }}
        />
      </div>
    </div>
  );
});

stories.add('PopupActions - Down & Right', () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', minHeight: '100px' }}>
      <div>
        <PopupAction
          text="..."
          actions={actions}
          direction={['down', 'right']}
          popupStyle={{ width: '150px' }}
        />
      </div>
    </div>
  );
});

stories.add('PopupActions - Down & Left Hang', () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', minHeight: '100px' }}>
      <div>
        <PopupAction
          text="..."
          actions={actions}
          direction={['down', 'leftHang']}
          popupStyle={{ width: '150px' }}
        />
      </div>
    </div>
  );
});

stories.add('PopupActions - Down & Right Hang', () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', minHeight: '100px' }}>
      <div>
        <PopupAction
          text="..."
          actions={actions}
          direction={['down', 'rightHang']}
          popupStyle={{ width: '150px' }}
        />
      </div>
    </div>
  );
});

stories.add('PopupActions - Overlay', () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', minHeight: '100px' }}>
      <div>
        <PopupAction
          text="..."
          actions={actions}
          direction={['overlay']}
          popupStyle={{ width: '150px' }}
        />
      </div>
    </div>
  );
});

stories.add('PopupConfirm', () => {
  const popupText = <h4>Do you really want to hurt me? Do you really want to make me cry?</h4>;
  const onAccept = () => {
    alert('You said yes!');
  };
  const onCancel = () => {
    alert('Good. I dont want to hurt or cry.');
  };
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', minHeight: '100px', paddingTop: '2rem' }}
    >
      <div>
        <PopupConfirm
          onAccept={onAccept}
          onCancel={onCancel}
          buttonText="Perform the Culture Club!"
          popUpText={popupText}
        />
      </div>
    </div>
  );
});
