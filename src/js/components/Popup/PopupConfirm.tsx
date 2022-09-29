import * as React from 'react';
import * as PropTypes from 'prop-types';

const propTypes = {
  buttonText: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
  popUpText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  popupStyle: PropTypes.object,
  onAccept: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  testId: PropTypes.string,
};

type Props = PropTypes.InferProps<typeof propTypes>;

const Popup = ({ buttonText, popUpText, popupStyle, onAccept, onCancel, testId }: Props) => {
  const popupRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const [isPopupOpen, setIsPopupOpen] = React.useState<boolean>(false);
  const [center, setCenter] = React.useState<{ centerX: number, centerY: number }>({ centerX: 0, centerY: 0 });

  const centerContent = React.useCallback(() => {
    if (triggerRef && triggerRef.current) {
      const { left, top, width, height } = triggerRef.current.getBoundingClientRect()
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      setCenter({
        centerX,
        centerY,
      });
    }
  }, []);

  const handleBodyClick = React.useCallback(() => {
    setIsPopupOpen(false)
  }, []);

  React.useEffect(() => {
    centerContent();
    if (!isPopupOpen) {
      window.removeEventListener('scroll', centerContent, true);
      document.body.removeEventListener('click', handleBodyClick, true);
    } else {
      window.addEventListener('scroll', centerContent, true);
      document.body.addEventListener('click', handleBodyClick, true);
    }
  }, [isPopupOpen]);

  const togglePopup = () => setIsPopupOpen(!isPopupOpen);


  return (
    <div className="Popup" data-testid={testId} ref={popupRef}>
      <button ref={triggerRef} type="button" className="Button Button--small" onClick={togglePopup}>
        {buttonText}
      </button>
      <div
        className={`Popup-container Popup-container--overlay ${isPopupOpen ? 'is-open' : ''}`}
        style={{
          ...popupStyle,
          top: center.centerY,
          left: center.centerX,
        }}
      >
        <div className="Popup-content u-padMd">
          <div className="u-textLeft">{popUpText}</div>
          <div className="u-textCenter u-spaceTopMd">
            <button
              type="button"
              onClick={onCancel}
              className="u-spaceRightSm Button Button--negative"
            >
              Cancel
            </button>
            <button type="button" onClick={onAccept} className="Button Button--primary">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
