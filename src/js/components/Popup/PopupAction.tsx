import * as React from "react";

interface State {
  isPopupOpen: boolean;
}

interface Action {
  text: string;
  callback: () => void;
}

interface Props {
  text: string | React.ReactElement;
  actions: Array<Action>;
  popupStyle?: React.CSSProperties;
  direction?: "down" | "right" | "left" | "rightHang" | "leftHang" | "overlay";
}

export default class PopUpAction extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isPopupOpen: false
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
      isPopupOpen: false
    });
  }

  togglePopup() {
    let isPopupOpen = this.state.isPopupOpen;
    this.setState({
      isPopupOpen: !isPopupOpen
    });
  }

  render() {
    return (
      <div className="Popup Popup--hover">
        <button
          className="Button Button--small"
          onClick={this.togglePopup.bind(this)}
        >
          {this.props.text}
        </button>
        <div
          className={
            "Popup-container " +
            (this.props.direction
              ? ` Popup-container--${this.props.direction}`
              : "") +
            (this.state.isPopupOpen ? " is-open" : "")
          }
          style={this.props.popupStyle}
        >
          <div className="Popup-content">
            <div className="u-textLeft">
              {this.props.actions.map(action => {
                return (
                  <div key={action.text}>
                    <p
                      className="u-padEndsSm u-padSidesMd"
                      style={{ cursor: "pointer" }}
                      onClick={action.callback}
                    >
                      {action.text}
                    </p>
                    <hr className="Divider u-spaceEndsNone" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
