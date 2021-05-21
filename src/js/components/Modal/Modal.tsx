import * as React from 'react';
import { Button } from '../Button';

interface Props {
  heading: string;
  show: boolean;
  handleClose: any;
  children: React.ReactNode;
}

const Modal: React.FC<Props> = ({
  heading,
  show,
  handleClose,
  children
}: Props) => {
  return (
    <div className={`Modal ${show ? 'Modal--open' : 'Modal--closed'}`}>
      <div className='Modal-content'>
        <div className='Modal-header'>
          <h2 style={{ marginTop: '20px' }}>{heading}</h2>
        </div>

        <div className='Modal-body'>
          { children }

          <div className='Modal-footer'>
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

export default Modal;
