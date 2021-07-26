import * as React from 'react';
import * as PropTypes from 'prop-types';

interface State {
  isPopupOpen: boolean;
}

export default class Popup extends React.Component<
  PropTypes.InferProps<typeof Popup.propTypes>,
  State
> {
  static propTypes = {
    buttonText: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
      .isRequired,
    popUpText: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
      .isRequired,
    popupStyle: PropTypes.object,
    onAccept: PropTypes.func.isRequired,
    onCancel: PropTypes.func,
  };

  popupRef: PropTypes.InferType<PropTypes.ReactElementLike>;

  constructor(props) {
    super(props);
    this.state = {
      isPopupOpen: false,
    };
    this.popupRef = React.createRef();
  }

  handleBodyClick() {
    if (this.popupRef && this.popupRef.current)
      this.setState({
        isPopupOpen: false,
      });
  }

  togglePopup() {
    const { isPopupOpen } = this.state;

    if (!isPopupOpen) {
      document.body.addEventListener('click', this.handleBodyClick.bind(this));
    } else {
      document.body.removeEventListener(
        'click',
        this.handleBodyClick.bind(this)
      );
    }

    this.setState({
      isPopupOpen: !isPopupOpen,
    });
  }

  render() {
    return (
      <div className="Popup" ref={this.popupRef}>
        <button
          className="Button Button--small"
          onClick={this.togglePopup.bind(this)}
        >
          {this.props.buttonText}
        </button>
        <div
          className={
            'Popup-container Popup-container--overlay' +
            (this.state.isPopupOpen ? ' is-open' : '')
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
