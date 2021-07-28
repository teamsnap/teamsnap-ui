import * as React from 'react';

interface Props {
  buttonText: string | Function;
  popUpText: string | React.ReactNode;
  popupStyle?: object;
  onAccept: React.Dispatch<React.SetStateAction<{}>>;
  onCancel?: React.Dispatch<React.SetStateAction<{}>>;
}

const Popup: React.FC<Props> = ({
  buttonText,
  popUpText,
  popupStyle,
  onAccept,
  onCancel,
}: Props) => {
  const popupRef = React.useRef<HTMLDivElement>(null);
  const [isPopupOpen, setIsPopupOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (!isPopupOpen) {
      const handleBodyClick = () => setIsPopupOpen(false);

      document.body.addEventListener('click', handleBodyClick, { capture: true });

      return () => {
        document.body.removeEventListener('click', handleBodyClick);
      };
    }

    return () => {};
  }, []);

  const togglePopup = () => setIsPopupOpen(!isPopupOpen);

  return (
    <div className="Popup" ref={popupRef}>
      <button type="button" className="Button Button--small" onClick={togglePopup}>
        {buttonText}
      </button>
      <div
        className={`Popup-container Popup-container--overlay ${isPopupOpen ? 'is-open' : ''}`}
        style={popupStyle}
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
