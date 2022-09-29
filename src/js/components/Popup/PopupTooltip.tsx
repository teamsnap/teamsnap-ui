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
  const buttonRef = React.useRef<HTMLButtonElement | null>(null);
  const tooltipRef = React.useRef<HTMLDivElement | null>(null);
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [center, setCenter] = React.useState<{ centerX: number, centerY: number }>({ centerX: 0, centerY: 0 });
  const describedby = ariaDescribeBy ? ariaDescribeBy.toLocaleLowerCase().replace(/ /g, '-') : null;

  const centerContent = React.useCallback(() => {
    if (buttonRef && buttonRef.current) {
      const { left, top, width, height } = buttonRef.current.getBoundingClientRect()
      const centerX = left + width / 2;
      const centerY = top - height;

      setCenter({
        centerX,
        centerY,
      });
    }
  }, []);

  React.useEffect(() => {
    if (isPopupOpen) {
      window.addEventListener('scroll', centerContent, true);
    } else {
      window.removeEventListener('scroll', centerContent, true);
    }
  }, [isPopupOpen]);

  return (
    <>
      <div
        className={`Popup Popup--tooltip ${mods}`}
        data-testid={testId}
        onMouseEnter={() => {
          centerContent() 
          setIsPopupOpen(true)
        }}
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
          style={{ top: `${center.centerY}px`, left: `${center.centerX}px` }}
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
