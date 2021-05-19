import * as React from 'react';
import { Loader } from '../Loader';
import { Button } from '../Button';

export enum ModalLoadingType {
  JELLO = 'jello',
  PULSE = 'pulse',
  SPIN = 'spin'
}

interface Props {
  heading: string;
  loadingType: ModalLoadingType;
  loadingText?: string;
  message?: string;
  show: boolean;
  handleClose: any;
}

const LoaderModal: React.FC<Props> = ({
  heading,
  loadingType,
  loadingText,
  message,
  show,
  handleClose
}: Props) => {
  return (
    <div className={`Modal ${show ? 'Modal--open' : 'Modal--closed'}`} data-modal='modal-one'>
      <div className='Modal__content'>
        <div className='Modal__header'>
          <h2 style={{ marginTop: '20px' }}>{heading}</h2>
        </div>

        <div className='Modal__body'>
          <Loader
            type={ ModalLoadingType[loadingType] }
            text={loadingText}
            message={message}
          />

          <div className='Modal__footer'>
            <Button
              label='Cancel'
              color='negative'
              onClick={handleClose}
              icon='dismiss'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoaderModal;
