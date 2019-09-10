import * as React from "react";

interface State {
  isPopupOpen: boolean;
}

interface Props {
  buttonText: string | React.ReactElement;
  popUpText: string | React.ReactElement;
  popupStyle?: React.CSSProperties;
  onAccept: () => void;
  onCancel?: () => void;
}

export default class Popup extends React.Component<Props, State> {
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
      <div className="Popup">
        <button
          className="Button Button--small"
          onClick={this.togglePopup.bind(this)}
        >
          {this.props.buttonText}
        </button>
        <div
          className={
            "Popup-container Popup-container--overlay" +
            (this.state.isPopupOpen ? " is-open" : "")
          }
          style={this.props.popupStyle}
        >
          <div className="Popup-content u-padMd">
            <div className="u-textLeft">{this.props.popUpText}</div>
            <div className="u-textCenter u-spaceTopMd">
              <button
                onClick={this.props.onCancel}
                className="u-spaceRightSm Button Button--negative"
              >
                Cancel
              </button>
              <button
                onClick={this.props.onAccept}
                className="Button Button--primary"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
