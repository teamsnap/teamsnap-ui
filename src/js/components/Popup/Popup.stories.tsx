import * as React from 'react';
import PopupAction from './PopupAction';
import PopupTooltip from './PopupTooltip';
import PopupConfirmComponent from './PopupConfirm';
import { Icon } from '../Icon';

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
        text={<Icon name="more-horiz" />}
        actions={actions}
        direction={['down', 'overlay']}
        popupStyle={{ width: '150px' }}
      />
    </div>
  </div>
);

export const PopupActionsNoHover = () => (
  <div style={{ display: 'flex', justifyContent: 'center', minHeight: '100px' }}>
    <div>
      <PopupAction
        text={<Icon name="more-horiz" />}
        actions={actions}
        direction={['down', 'overlay']}
        popupStyle={{ width: '150px' }}
        showOnHover={false}
      />
    </div>
  </div>
);

export const PopupActionsDownLeft = () => (
  <div style={{ display: 'flex', justifyContent: 'center', minHeight: '100px' }}>
    <div>
      <PopupAction
        text={<Icon name="more-horiz" />}
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
        text={<Icon name="more-horiz" />}
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
        text={<Icon name="more-horiz" />}
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
        text={<Icon name="more-horiz" />}
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
        text={<Icon name="more-horiz" />}
        actions={actions}
        direction={['overlay']}
        popupStyle={{ width: '150px' }}
      />
    </div>
  </div>
);

export const PopupActionsCustomizedOrigin = () => (
  <div style={{ display: 'flex', justifyContent: 'center', minHeight: '100px' }}>
    <div>
      <PopupAction
        text={<img alt='teamsnap-logo' src="https://res-4.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/v1398359819/ebi2jfu0t7embtj1i35w.png" />}
        actions={actions}
        direction={['down', 'rightHang']}
        showOnHover={false}
        popupStyle={{ width: '150px' }}
        buttonStyle={{
          height: '40px',
          width: '40px',
          borderRadius: '20px',
        }}
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

export const PopupTooltipExample = () => (
  <div
    style={{ display: 'flex', justifyContent: 'center', minHeight: '100px', paddingTop: '100px' }}
  >
    <PopupTooltip text="I'm a tooltip!" ariaDescribeBy="Tooltip Example">
      Hover Me
    </PopupTooltip>
  </div>
);
