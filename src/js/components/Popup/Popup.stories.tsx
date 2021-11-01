import * as React from 'react';
import PopupAction from './PopupAction';
import PopupConfirmComponent from './PopupConfirm';

export default {
  title: 'Components/Feedback/Popup',
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

export const PopupActions = () => (
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

export const PopupActionsDownLeft = () => (
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

export const PopupActionsDownRight = () => (
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

export const PopupActionsDownLeftHang = () => (
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

export const PopupActionsDownRightHang = () => (
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

export const PopupActionsOverlay = () => (
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

export const PopupConfirm = () => {
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
        <PopupConfirmComponent
          onAccept={onAccept}
          onCancel={onCancel}
          buttonText="Perform the Culture Club!"
          popUpText={popupText}
        />
      </div>
    </div>
  );
};
