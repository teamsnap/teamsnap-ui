import * as React from 'react';
import { Icon } from '../Icon';
import { getClassName } from '../../utils/helpers';

export interface Props {
  className?: string;
  mods?: string;
  iconName?: string;
  text?: string;
  iconStyle?: React.CSSProperties;
  style?: React.CSSProperties;
  testId?: string;
  children?: React.ReactNode;
}

const SelectCard: React.FunctionComponent<Props> = ({
  className,
  mods,
  iconName,
  text,
  iconStyle,
  style,
  testId,
  children,
  ...props
}: Props) => {
  const [selected, setSelected] = React.useState(false);

  const handleClick = (e) => {
    const KEY_ENTER = 13;
    if (!e.which || e.which === KEY_ENTER) {
      setSelected(!selected);
    }
  };

  const cardClasses = getClassName(className, selected && 'is-selected', mods);

  return (
    <div
      className={cardClasses}
      style={style}
      data-testid={testId}
      {...props}
      onClick={handleClick}
      onKeyDown={handleClick}
      role="checkbox"
      aria-checked={selected}
      tabIndex={0}
    >
      {children || (
        <div className="Card--container">
          <div className="Card--icon">
            <Icon name={iconName} style={iconStyle} />
          </div>
          <input type="checkbox" name="option" value={text} />
          <label htmlFor="option">{text}</label>
        </div>
      )}
    </div>
  );
};

SelectCard.defaultProps = {
  className: 'Card',
  mods: null,
  iconName: 'roster',
  text: 'Select me!',
  iconStyle: { height: '50px', width: '50px' },
  style: {},
  testId: null,
  children: null,
};

export default SelectCard;