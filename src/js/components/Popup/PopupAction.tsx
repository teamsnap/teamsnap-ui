import * as React from 'react';
import * as PropTypes from 'prop-types';

interface State {
  isPopupOpen: boolean;
  isConfirmOpen: boolean;
  selectedAction: any;
}

const propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      callback: PropTypes.func.isRequired,
      requiresConfirmation: PropTypes.bool,
      confirmationText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    })
  ),
  popupStyle: PropTypes.object,
  direction: PropTypes.arrayOf(
    PropTypes.oneOf(['down', 'right', 'left', 'rightHang', 'leftHang', 'overlay'])
  ),
};

type Props = PropTypes.InferProps<typeof propTypes>;

export default class PopUpAction extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      isPopupOpen: false,
      isConfirmOpen: false,
      selectedAction: {},
    };
  }

  componentDidMount() {
    document.body.addEventListener('click', this.handleBodyClick.bind(this));
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.handleBodyClick.bind(this));
  }

  handleBodyClick(e: any) {
    const isTargetingPopup = e.target.closest('.Popup-content') != null;

    if (!isTargetingPopup) {
      this.setState({
        isPopupOpen: false,
        isConfirmOpen: false,
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

  togglePopup(e) {
    e.stopPropagation();

    const { isPopupOpen } = this.state;

    this.setState({
      isPopupOpen: !isPopupOpen,
    });
  }

  render() {
    const { actions, direction, popupStyle, text } = this.props;
    const { state } = this;
    const { isConfirmOpen, isPopupOpen, selectedAction } = state;
    const { callback, confirmationText, requiresConfirmation } = selectedAction;

    const dirString = direction.reduce((acc, cur) => {
      return `${acc} Popup-container--${cur}`;
    }, '');
    return (
      <>
        <div className="Popup Popup--hover">
          <button
            type="button"
            className="Button Button--small"
            onClick={this.togglePopup.bind(this)}
          >
            {text}
          </button>
          <div
            className={`Popup-container ${dirString} ${isPopupOpen ? 'is-open' : ''}`}
            style={popupStyle}
          >
            <div className="Popup-content">
              <div className="u-textLeft">
                {actions.map((action) => {
                  return (
                    <div key={action.text}>
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
        </div>
        <div className="Popup">
          <div
            className={`Popup-container Popup-container--overlay ${
              requiresConfirmation && isConfirmOpen ? 'is-open' : ''
            }`}
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
