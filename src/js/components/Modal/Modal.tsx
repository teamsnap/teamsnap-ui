import * as React from 'react';
import { Icon } from '../Icon';

interface Props {
  heading: React.ReactNode;
  show: boolean;
  children: React.ReactNode;
  showClose?: boolean;
  allowOverlayClose?: boolean;
  style?: React.CSSProperties;
  closeFn?: () => void;
}

const Modal: React.FC<Props> = ({
  heading,
  show,
  children,
  showClose,
  closeFn,
  allowOverlayClose,
  style
}: Props) => {

  React.useEffect(() => {
    if (allowOverlayClose) {
      const toggleModal = (event: any) => {
        if (!document.querySelector('.Modal-content').contains(event.target)) {
          closeFn?.();
        }
      }

      document.body.addEventListener('click', toggleModal, { capture: true });

      return () => {
        document.body.removeEventListener('click', toggleModal);
      }
    }
  },[]);

  return (
    <div className={`Modal ${show ? 'Modal--open' : 'Modal--closed'}`}>
      <div className={`Modal-content u-posRelative`} style={{ width: '50%', ...(style || {})}}>
        <div className='Modal-header u-flex u-flexJustifyBetween'>
          <div className="u-sizeFill">
            <h2>{heading}</h2>
          </div>
          { showClose &&
            <div className="Modal-close">
              <button onClick={() => closeFn?.()} className="Button Button--text"><Icon name="dismiss"/></button>
            </div>
          }
        </div>
        <div className='Modal-body'>
          { children }
        </div>
      </div>
    </div>
  )
}

export default Modal;
