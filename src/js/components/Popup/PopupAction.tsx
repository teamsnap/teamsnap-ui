import * as React from 'react';
import * as PropTypes from 'prop-types';

interface State {
  hoverPopupOpen: boolean;
  clickPopupOpen: boolean;
  isConfirmOpen: boolean;
  selectedAction: any;
  centerX: number;
  centerY: number;
}

const propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
      callback: PropTypes.func.isRequired,
      requiresConfirmation: PropTypes.bool,
      confirmationText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    })
  ),
  popupStyle: PropTypes.object,
  direction: PropTypes.arrayOf(
    PropTypes.oneOf(['down', 'right', 'left', 'rightHang', 'leftHang', 'overlay'])
  ),
  showOnHover: PropTypes.bool,
  testId: PropTypes.string,
  selectorRef: PropTypes.any,
  originButtonStyle: PropTypes.object
};

type Props = PropTypes.InferProps<typeof propTypes>;

export default class PopUpAction extends React.Component<Props, State> {
  // eslint-disable-next-line react/static-property-placement
  static defaultProps = {
    showOnHover: true,
  }

  buttonTrigger: React.RefObject<HTMLButtonElement>;

  centerFn: any;
  
  handleBodyClickFn: any;

  constructor(props) {
    super(props);
    this.buttonTrigger = React.createRef();
    this.state = {
      hoverPopupOpen: false,
      clickPopupOpen: false,
      isConfirmOpen: false,
      selectedAction: {},
      centerX: 0,
      centerY: 0,
    };

    this.centerFn = this.centerContent.bind(this);
    this.handleBodyClickFn = this.handleBodyClick.bind(this);
  }
  
  componentDidUpdate() {
    const {clickPopupOpen, hoverPopupOpen} = this.state;
    if (clickPopupOpen || hoverPopupOpen) {
      document.body.addEventListener('click', this.handleBodyClickFn, true);
      window.addEventListener('scroll', this.centerFn, true);
    } else {
      document.body.removeEventListener('click', this.handleBodyClickFn, true);
      window.removeEventListener('scroll', this.centerFn, true);
    }
  }

  handleBodyClick(e: any) {
    this.centerFn();
    const isTargetingPopup = e.target.closest('.Popup') != null;
    
    if (!isTargetingPopup) {
      this.setState({
        hoverPopupOpen: false,
        isConfirmOpen: false,
        clickPopupOpen: false,
      });
    }
  }

  handleActionClick(action) {
    const { state } = this;

    if (action.requiresConfirmation) {
      this.setState({
        ...state,
        isConfirmOpen: true,
        selectedAction: action,
      });
    } else {
      action.callback();
    }
  }

  centerContent() {
    if (this.buttonTrigger && this.buttonTrigger.current) {
      const { left, top, width, height } = this.buttonTrigger.current.getBoundingClientRect()
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      this.setState({
        centerX,
        centerY,
      });
    }
  }

  togglePopup(e) {
    e.stopPropagation();

    const { clickPopupOpen } = this.state;

    this.setState({
      hoverPopupOpen: false,
      clickPopupOpen: !clickPopupOpen,
    });

    this.centerFn();
  }

  render() {
    const { actions, direction, popupStyle, text, showOnHover, testId, originButtonStyle } = this.props;
    const { state } = this;
    const { isConfirmOpen, hoverPopupOpen, selectedAction, clickPopupOpen } = state;
    const { callback, confirmationText, requiresConfirmation } = selectedAction;

    const dirString = direction.reduce((acc, cur) => {
      return `${acc} Popup-container--${cur}`;
    }, '');
    return (
      <>
        <div 
            data-testid={testId}
            className={`Popup ${showOnHover && 'Popup--hover'}`} 
            onMouseEnter={() => {
              this.centerFn();
              if (showOnHover) this.setState({hoverPopupOpen: true});
            }}
            onMouseLeave={() => showOnHover ? this.setState({hoverPopupOpen: false}) : null}
          >
          <button
            ref={this.buttonTrigger}
            type="button"
            className="Button Button--small"
            onClick={this.togglePopup.bind(this)}
            style={originButtonStyle}
          >
            {text}
          </button>
          { (hoverPopupOpen || clickPopupOpen) && 
            <div
              className={`Popup-container ${dirString} is-open`}
              style={{
                ...popupStyle,
                left: `${state.centerX}px`,
                top: `${state.centerY}px`,
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
                          onClick={this.handleActionClick.bind(this, action)}
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
          }
        </div>
        <div className="Popup">
          <div
            className={`Popup-container Popup-container--overlay ${
              requiresConfirmation && isConfirmOpen ? 'is-open' : ''
            }`}
            style={{
              left: `${state.centerX}px`,
              top: `${state.centerY}px`,
            }}
          >
            <div className="Popup-content u-padMd">
              <h3 className="u-spaceBottomSm u-textCenter">Are you sure?</h3>
              <p className="u-textLeft">{confirmationText}</p>
              <div className="u-textCenter u-spaceTopMd">
                <button
                  type="button"
                  onClick={() =>
                    this.setState({
                      ...state,
                      isConfirmOpen: false,
                      selectedAction: {},
                    })
                  }
                  className="u-spaceRightSm Button Button--negative"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={(...args) => {
                    callback(args);
                    this.setState({
                      ...state,
                      isConfirmOpen: false,
                      selectedAction: {},
                    });
                  }}
                  className="Button Button--primary"
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
}
