import * as React from "react";
import { PopupConfirm } from ".";

interface State {
  isPopupOpen: boolean;
  isConfirmOpen: boolean;
  selectedAction: Action;
}

export interface Action {
  text: string;
  callback: () => void;
  requiresConfirmation?: boolean;
  confirmationText?: string | React.ReactElement;
}

interface Props {
  text: string | React.ReactElement;
  actions: Array<Action>;
  popupStyle?: React.CSSProperties;
  direction?: (
    | "down"
    | "right"
    | "left"
    | "rightHang"
    | "leftHang"
    | "overlay")[];
}

export default class PopUpAction extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isPopupOpen: false,
      isConfirmOpen: false,
      selectedAction: {} as Action
    };
  }

  componentDidMount() {
    document.body.addEventListener("click", this.handleBodyClick.bind(this));
  }

  componentWillUnmount() {
    document.body.removeEventListener("click", this.handleBodyClick.bind(this));
  }

  handleBodyClick() {
    this.setState({
      isPopupOpen: false,
      isConfirmOpen: false
    });
  }

  togglePopup() {
    let isPopupOpen = this.state.isPopupOpen;
    this.setState({
      isPopupOpen: !isPopupOpen
    });
  }

  handleActionClick(action: Action) {
    if (action.requiresConfirmation) {
      this.setState({
        ...this.state,
        isConfirmOpen: true,
        selectedAction: action
      });
    } else {
      action.callback();
    }
  }

  render() {
    const dirString = this.props.direction.reduce((acc, cur) => {
      return acc + ` Popup-container--${cur}`;
    }, "");
    return (
      <>
        <div className="Popup Popup--hover">
          <button
            className="Button Button--small"
            onClick={this.togglePopup.bind(this)}
          >
            {this.props.text}
          </button>
          <div
            className={"Popup-container " + dirString}
            style={this.props.popupStyle}
          >
            <div className="Popup-content">
              <div className="u-textLeft">
                {this.props.actions.map(action => {
                  return (
                    <div key={action.text}>
                      <button
                        tabIndex={0}
                        className="u-padEndsSm u-padSidesMd"
                        style={{
                          cursor: "pointer",
                          appearance: "none",
                          border: "none",
                          background: "none",
                          width: "100%",
                          textAlign: "left"
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
              "Popup-container Popup-container--overlay" +
              (this.state.selectedAction.requiresConfirmation &&
              this.state.isConfirmOpen
                ? " is-open"
                : "")
            }
          >
            <div className="Popup-content u-padMd">
              <h3 className="u-spaceBottomSm u-textCenter">Are you sure?</h3>
              <p className="u-textLeft">
                {this.state.selectedAction.confirmationText}
              </p>
              <div className="u-textCenter u-spaceTopMd">
                <button
                  onClick={() =>
                    this.setState({
                      ...this.state,
                      isConfirmOpen: false,
                      selectedAction: {} as Action
                    })
                  }
                  className="u-spaceRightSm Button Button--negative"
                >
                  Cancel
                </button>
                <button
                  onClick={this.state.selectedAction.callback}
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
