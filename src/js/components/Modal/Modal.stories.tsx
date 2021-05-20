import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Modal from './Modal';
import { Button } from '../Button';
import { Loader } from '../Loader';

const stories = storiesOf('Modal', module);

stories.add('Default', () => {
  const [sending, setSending] = React.useState(false);

  return (
    <>
      <Button
        label='Test Modal'
        onClick={ () => setSending(true) }
      />

      <Modal
        heading='Sending'
        show={ sending }
        handleClose={() => setSending(false)}
      >
        <Loader
          type='spin'
          text='Sending'
          message='Some really long message here'
        />
      </Modal>
    </>
  )
});
