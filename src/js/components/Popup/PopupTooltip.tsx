import * as React from 'react';
import * as PropTypes from 'prop-types';

export enum PopupTooltipVariant {
  LIGHT,
  DARK,
}

const propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  testId: PropTypes.string,
  ariaDescribeBy: PropTypes.string,
  mods: PropTypes.string,
  textHighlightColor: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  variant: PropTypes.oneOf([PopupTooltipVariant.LIGHT, PopupTooltipVariant.DARK]),
};

type Props = PropTypes.InferProps<typeof propTypes>;

const PopupTooltip = ({
  text,
  testId,
  ariaDescribeBy,
  mods,
  textHighlightColor,
  children,
  variant = PopupTooltipVariant.DARK,
}: Props) => {
  console.log(variant);
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
        className={`Popup Popup--tooltip ${mods}`}
        data-testid={testId}
        onMouseEnter={() => setIsPopupOpen(true)}
        onMouseLeave={() => setIsPopupOpen(false)}
      >
        <span aria-describedby={describedby} ref={buttonRef} className={textHighlightColor}>
          {children}
        </span>
        <div
          role="tooltip"
          id={describedby}
          aria-hidden={!!isPopupOpen}
          ref={tooltipRef}
          className={`Popup-container ${isPopupOpen ? 'is-open' : ''} ${
            variant === PopupTooltipVariant.LIGHT
              ? 'Popup-container--light'
              : 'Popup-container--dark'
          }`}
          style={{ top: `${position.top}px`, left: `${position.left}px` }}
        >
          <div
            className={`Popup-content u-padEndsSm u-padSidesMd u-colorNeutral3 ${
              variant === PopupTooltipVariant.LIGHT ? 'Popup-content--light' : 'Popup-tooltip--dark'
            }`}
          >
            {text}
          </div>
        </div>
      </div>
    </>
  );
};

export default PopupTooltip;
