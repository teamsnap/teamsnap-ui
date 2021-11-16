import * as React from 'react';
import { Button } from '../Button';
import { useOnClickOutside, useBodyScrollLock } from '../../hooks';

export interface Props {
  heading: React.ReactNode;
  show: boolean;
  children: React.ReactNode;
  closeButton: React.ReactNode;
  showClose?: boolean;
  allowOverlayClose?: boolean;
  style?: React.CSSProperties;
  testId?: string;
  closeFn?: () => void;
  fullscreen?: boolean;
}

const Modal: React.FC<Props> = ({
  heading,
  show,
  children,
  closeButton,
  showClose,
  closeFn,
  allowOverlayClose,
  style,
  testId,
  fullscreen,
}: Props) => {
  const { setIsBodyScrollLocked } = useBodyScrollLock();

  React.useEffect(() => {
    setIsBodyScrollLocked(show);
    return () => setIsBodyScrollLocked(false);
  }, [show]);

  const modalContentRef = React.useRef();

  const handleClickOutside = React.useCallback(() => {
    if (allowOverlayClose && closeFn && show) {
      setIsBodyScrollLocked(false);
      closeFn();
    }
  }, [allowOverlayClose, closeFn, show]);

  useOnClickOutside(modalContentRef, handleClickOutside);

  return (
    <div
      className={`Modal ${show ? 'Modal--open' : 'Modal--closed'} ${
        fullscreen ? 'Modal--fullscreen' : ''
      }`}
      data-testid={testId || 'modal'}
    >
      <div
        ref={modalContentRef}
        className="Modal-content u-posRelative"
        style={{ ...(style || {}) }}
      >
        <div className="Modal-header u-flex u-flexJustifyBetween">
          <div className="u-sizeFill">
            <h2 data-testid="modal-heading">{heading}</h2>
          </div>          
          {showClose && closeButton ? closeButton : (
            <div className="Modal-close">
              <Button
                type="link"
                onClick={() => closeFn?.()}
                icon="dismiss"
                mods="u-colorNeutral9"
                otherProps={{ 'data-testid': 'modal-heading-close-btn' }}
              />
            </div>
          )}
        </div>
        <div className="Modal-body" data-testid="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
