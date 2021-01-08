import * as React from "react";
import * as PropTypes from "prop-types";

interface State {
  isPopupOpen: boolean;
}

export default class Popup extends React.Component<
  PropTypes.InferProps<typeof Popup.propTypes>,
  State
> {
  static propTypes = {
    popUpMods: PropTypes.string,
    popUpText: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
      .isRequired,
    direction: PropTypes.arrayOf(PropTypes.oneOf(["down", "right", "left", "rightHang", "leftHang", "overlay"])),
    popupStyle: PropTypes.object,
    buttonText: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.element])
      .isRequired,
    buttonMods: PropTypes.string,
    confirmButtonText: PropTypes.string,
    confirmButtonMods: PropTypes.string,
    cancelButtonText: PropTypes.string,
    cancelButtonMods: PropTypes.string,
    onAccept: PropTypes.func.isRequired,
    onCancel: PropTypes.func
  };

  static defaultProps = {
    direction: ["overlay"],
    popUpMods: "",
    buttonMods: "Button--small",
    confirmButtonText: "Confirm",
    confirmButtonMods: "Button--primary",
    cancelButtonText: "Cancel",
    cancelButtonMods: "Button--negative",
  };

  popupRef: PropTypes.InferType<PropTypes.ReactElementLike>;

  constructor(props) {
    super(props);
    this.state = {
      isPopupOpen: false
    };
    this.popupRef = React.createRef();
  }

  handleBodyClick() {
    if (this.popupRef && this.popupRef.current)
      this.setState({
        isPopupOpen: false
      });
  }

  togglePopup() {
    const { isPopupOpen } = this.state;

    if (!isPopupOpen) {
      document.body.addEventListener("click", this.handleBodyClick.bind(this), { capture: true });
    } else {
      document.body.removeEventListener(
        "click",
        this.handleBodyClick.bind(this)
      );
    }

    this.setState({
      isPopupOpen: !isPopupOpen
    });
  }

  render() {
    const dirString = this.props.direction.reduce((acc, cur) => {
      return acc + ` Popup-container--${cur}`;
    }, "");

    return (
      <div className={`Popup ${this.props.popUpMods}`} ref={this.popupRef}>
        <button
          className={`Button ${this.props.buttonMods}`}
          onClick={this.togglePopup.bind(this)}
        >
          {this.props.buttonText}
        </button>
        <div
          className={`Popup-container ${dirString} ${this.state.isPopupOpen ? "is-open" : ""}`}
          style={this.props.popupStyle}
        >
          <div className="Popup-content u-padMd">
            <div className="u-textLeft">{this.props.popUpText}</div>
            <div className="u-textCenter u-spaceTopMd">
              <button
                onClick={this.props.onCancel}
                className={`u-spaceRightSm Button ${this.props.cancelButtonMods}`}
              >
                {this.props.cancelButtonText}
              </button>
              <button
                onClick={this.props.onAccept}
                className={`Button ${this.props.confirmButtonMods}`}
              >
                {this.props.confirmButtonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
