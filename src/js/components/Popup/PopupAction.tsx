import * as React from 'react';
import * as PropTypes from 'prop-types';

interface State {
  isPopupOpen: boolean;
  isConfirmOpen: boolean;
  selectedAction: any;
}

export default class PopUpAction extends React.Component<
  PropTypes.InferProps<typeof PopUpAction.propTypes>,
  State
> {
  static propTypes = {
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

  togglePopup() {
    const {isPopupOpen} = this.state;
    this.setState({
      isPopupOpen: !isPopupOpen,
    });
  }

  handleActionClick(action) {
    if (action.requiresConfirmation) {
      this.setState({
        ...this.state,
        isConfirmOpen: true,
        selectedAction: action,
      });
    } else {
      action.callback();
    }
  }

  render() {
    const dirString = this.props.direction.reduce((acc, cur) => {
      return `${acc  } Popup-container--${cur}`;
    }, '');
    return (
      <>
        <div className="Popup Popup--hover">
          <button className="Button Button--small" onClick={this.togglePopup.bind(this)}>
            {this.props.text}
          </button>
          <div
            className={`Popup-container ${dirString} ${this.state.isPopupOpen ? 'is-open' : ''}`}
            style={this.props.popupStyle}
          >
            <div className="Popup-content">
              <div className="u-textLeft">
                {this.props.actions.map((action) => {
                  return (
                    <div key={action.text}>
                      <button
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
            className={
              `Popup-container Popup-container--overlay${ 
              this.state.selectedAction.requiresConfirmation && this.state.isConfirmOpen
                ? ' is-open'
                : ''}`
            }
          >
            <div className="Popup-content u-padMd">
              <h3 className="u-spaceBottomSm u-textCenter">Are you sure?</h3>
              <p className="u-textLeft">{this.state.selectedAction.confirmationText}</p>
              <div className="u-textCenter u-spaceTopMd">
                <button
                  onClick={() =>
                    this.setState({
                      ...this.state,
                      isConfirmOpen: false,
                      selectedAction: {},
                    })
                  }
                  className="u-spaceRightSm Button Button--negative"
                >
                  Cancel
                </button>
                <button
                  onClick={(...args) => {
                    this.state.selectedAction.callback(args);
                    this.setState({
                      ...this.state,
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
