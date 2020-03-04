import * as React from "react";
import * as PropTypes from "prop-types";
import PopUpWrapper from "./PopupWrapper";

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
        confirmationText: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.element
        ])
      })
    ),
    popupStyle: PropTypes.object,
    direction: PropTypes.arrayOf(
      PropTypes.oneOf([
        "down",
        "right",
        "left",
        "rightHang",
        "leftHang",
        "overlay"
      ])
    )
  };

  render() {
    return (
      <PopUpWrapper
        actions={this.props.actions}
        direction={this.props.direction}
        popupStyle={this.props.popupStyle}
      >
        <button className="Button Button--small">{this.props.text}</button>
      </PopUpWrapper>
    );
  }
}
