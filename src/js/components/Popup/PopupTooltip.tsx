import * as React from 'react';
import * as PropTypes from 'prop-types';

const propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  testId: PropTypes.string,
  ariaDescribeBy: PropTypes.string,
};

type Props = React.FunctionComponent<PropTypes.InferProps<typeof propTypes>>;

const PopupTooltip: Props = ({ text, testId, ariaDescribeBy, children }) => {
  const buttonRef = React.useRef<HTMLButtonElement | null>(null);
  const tooltipRef = React.useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = React.useState({ top: 0, left: 0 });
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  const describedby = ariaDescribeBy ? ariaDescribeBy.toLocaleLowerCase().replace(/ /g, '-') : null;

  React.useEffect(() => {
    if (isPopupOpen) {
      const button = buttonRef.current.getBoundingClientRect();
      const tooltip = tooltipRef.current.getBoundingClientRect();
      const buttonOffset = button.width / 2;
      const tooltipOffset = tooltip.width / 2;
      setPosition({
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
        <span aria-describedby={describedby} ref={buttonRef}>
          {children}
        </span>
        <div
          role="tooltip"
          id={describedby}
          aria-hidden={isPopupOpen ? true : false}
          ref={tooltipRef}
          className={`Popup-container ${isPopupOpen ? 'is-open' : ''}`}
          style={{ top: `${position.top}px`, left: `${position.left}px` }}
        >
          <div className="Popup-content u-padEndsXs u-padSidesMd u-colorNeutral3">{text}</div>
        </div>
      </div>
    </>
  );
};

export default PopupTooltip;
