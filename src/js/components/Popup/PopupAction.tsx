import * as React from 'react';

type Action = {
  requiresConfirmation?: boolean
  text: string | React.ReactElement
  callback: (x?: [React.MouseEvent<HTMLButtonElement, MouseEvent>]) => void
  confirmationText?: string | React.ReactElement
}

type Props = {
  text: string | React.ReactElement
  showOnHover?: boolean
  testId?: string
  buttonStyle?: object
  popupStyle: object
  direction: ('down' | 'right' | 'left' | 'rightHang' | 'leftHang' | 'overlay')[]
  actions: Action[]
}

const PopUpAction = ({
  showOnHover = true,
  actions,
  direction,
  popupStyle,
  text,
  testId,
  buttonStyle
}: Props) => {
  const [hoverPopupOpen, setHoverPopupOpen] = React.useState(false)
  const [clickPopupOpen, setClickPopupOpen] = React.useState(false)
  const [isConfirmOpen, setIsConfirmOpen] = React.useState(false)
  const [selectedAction, setSelectedAction] = React.useState<Action | null>(null)
  const [centerX, setCenterX] = React.useState(0)
  const [centerY, setCenterY] = React.useState(0)

  const buttonTrigger = React.useRef<HTMLButtonElement>();
  
  const centerContent = () => {
    if (buttonTrigger && buttonTrigger.current) {
      const { left, top, width, height } = buttonTrigger.current.getBoundingClientRect()
      setCenterX(left + width / 2)
      setCenterY(top + height / 2)
    }
  }

  const handleBodyClick = (e: any) => {
    centerContent()
    const isTargetingPopup = e.target.closest('.Popup') != null;
    
    if (!isTargetingPopup) {
      setHoverPopupOpen(false)
      setIsConfirmOpen(false)
      setClickPopupOpen(false)
    }
  }

  React.useEffect(() => {
    if (clickPopupOpen || hoverPopupOpen) {
      document.body.addEventListener('click', handleBodyClick, true);
      window.addEventListener('scroll', centerContent, true);
    } else {
      document.body.removeEventListener('click', handleBodyClick, true);
      window.removeEventListener('scroll', centerContent, true);
    }
  }, [clickPopupOpen, hoverPopupOpen, handleBodyClick, centerContent])

  const handleActionClick = (action: Action) => {
    if (action.requiresConfirmation) {
      setIsConfirmOpen(true)
      setSelectedAction(action)
    } else {
      action.callback();
    }
  }

  const togglePopup = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();

    setHoverPopupOpen(false)
    setClickPopupOpen(!clickPopupOpen)

    centerContent()
  }

  const { callback = undefined, confirmationText = undefined, requiresConfirmation = undefined } = selectedAction || {};

  const dirString = direction.reduce((acc, cur) => {
    return `${acc} Popup-container--${cur}`;
  }, '');

  return (
    <>
      <div
        data-testid={testId}
        className={`Popup ${showOnHover && 'Popup--hover'}`}
        onMouseEnter={() => {
          centerContent();
          if (showOnHover) setHoverPopupOpen(true);
        }}
        onMouseLeave={() => showOnHover && setHoverPopupOpen(false)}
      >
        <button
          ref={buttonTrigger}
          type="button"
          className="Button Button--small"
          onClick={(e) => togglePopup(e)}
          style={buttonStyle}
          data-testid={`${testId}-button`}
        >
          {text}
        </button>

        <div
          className={`Popup-container ${dirString} is-open ${
            hoverPopupOpen || clickPopupOpen ? '' : 'u-hidden'
          }`}
          style={{
            ...popupStyle,
            left: `${centerX}px`,
            top: `${centerY}px`,
          }}
        >
          <div className="Popup-content">
            <div className="u-textLeft">
              {actions.map((action, i) => {
                return (
                  <div key={i}>
                    <button
                      type="button"
                      tabIndex={0}
                      className="u-padEndsSm u-padSidesMd"
                      style={{
                        cursor: 'pointer',
                        appearance: 'none',
                        border: 'none',
                        background: 'none',
                        width: '100%',
                        textAlign: 'left',
                      }}
                      onClick={() => handleActionClick(action)}
                      data-testid={`${testId}-action-${i}`}
                    >
                      {action.text}
                    </button>
                    <hr className="Divider u-spaceEndsNone" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="Popup" data-testid="Popup-confirm">
        <div
          className={`Popup-container Popup-container--overlay ${
            requiresConfirmation && isConfirmOpen ? 'is-open' : ''
          }`}
          style={{
            left: `${centerX}px`,
            top: `${centerY}px`,
          }}
        >
          <div className="Popup-content u-padMd">
            <h3 className="u-spaceBottomSm u-textCenter">Are you sure?</h3>
            <p className="u-textLeft">{confirmationText}</p>
            <div className="u-textCenter u-spaceTopMd">
              <button
                type="button"
                onClick={() => {
                  setIsConfirmOpen(false);
                  setSelectedAction(null);
                }}
                className="u-spaceRightSm Button Button--negative"
                data-testid={`${testId}-cancel`}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={(...args) => {
                  if (callback) callback(args);
                  setIsConfirmOpen(false);
                  setSelectedAction(null);
                }}
                className="Button Button--primary"
                data-testid={`${testId}-confirm`}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  
}

export default PopUpAction
