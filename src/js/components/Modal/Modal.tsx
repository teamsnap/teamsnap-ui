import * as React from 'react';
import { Button } from '../Button';

export interface Props {
  heading: React.ReactNode;
  show: boolean;
  children: React.ReactNode;
  showClose?: boolean;
  allowOverlayClose?: boolean;
  style?: React.CSSProperties;
  closeFn?: () => void;
  isFullBleed?: boolean;
}

const Modal: React.FC<Props> = ({
  heading,
  show,
  children,
  showClose,
  closeFn,
  allowOverlayClose,
  style,
  isFullBleed,
}: Props) => {
  React.useEffect(() => {
    if (allowOverlayClose) {
      const toggleModal = (event: any) => {
        if (!document.querySelector('.Modal-content').contains(event.target)) {
          closeFn?.();
        }
      };

      document.body.addEventListener('click', toggleModal, { capture: true });

      return () => {
        document.body.removeEventListener('click', toggleModal);
      };
    }

    return () => {};
  }, []);

  React.useEffect(() => {
    document.body.classList.toggle('Modal--open', show);
  }, [show]);

  return (
    <div
      className={`Modal ${show ? 'Modal--open' : 'Modal--closed'} ${
        isFullBleed ? 'Modal--full-bleed' : ''
      }`}
    >
      <div className="Modal-content u-posRelative" style={{ ...(style || {}) }}>
        <div className="Modal-header u-flex u-flexJustifyBetween">
          <div className="u-sizeFill">
            <h2>{heading}</h2>
          </div>
          {showClose && (
            <div className="Modal-close">
              <Button
                type="link"
                onClick={() => closeFn?.()}
                icon="dismiss"
                mods="u-colorNeutral9"
              />
            </div>
          )}
        </div>
        <div className="Modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
