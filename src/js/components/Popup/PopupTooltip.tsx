import * as React from 'react';
import * as PropTypes from 'prop-types';

const propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  popupStyle: PropTypes.object,
  testId: PropTypes.string,
};

type Props = React.FunctionComponent<PropTypes.InferProps<typeof propTypes>>;

const PopupTooltip: Props = ({ text, testId, children }) => {
  const buttonRef = React.useRef<HTMLButtonElement | null>(null);
  const tooltipRef = React.useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = React.useState<{ top: number; left: number }>({ top: 0, left: 0 });
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  React.useEffect(() => {
    if (isPopupOpen) {
      const button = buttonRef.current.getBoundingClientRect();
      const tooltip = tooltipRef.current.getBoundingClientRect();
      const buttonOffset = button.width / 2;
      const tooltipOffset = tooltip.width / 2;
      setPos({
        top: buttonRef.current.getBoundingClientRect().top - 10,
        left: button.left + buttonOffset - tooltipOffset,
      });
    }
  }, [isPopupOpen]);

  return (
    <>
      <div
        className="Popup Popup--tooltip"
        data-testid={testId}
        onMouseEnter={() => setIsPopupOpen(true)}
        onMouseLeave={() => setIsPopupOpen(false)}
      >
        <button ref={buttonRef} type="button" className="Button Button--text">
          {children}
        </button>
        {isPopupOpen && (
          <div
            ref={tooltipRef}
            className={`Popup-container`}
            style={{ top: `${pos.top}px`, left: `${pos.left}px` }}
          >
            <div className="Popup-content u-padEndsXs u-padSidesMd u-colorNeutral3">{text}</div>
          </div>
        )}
      </div>
    </>
  );
};

export default PopupTooltip;
