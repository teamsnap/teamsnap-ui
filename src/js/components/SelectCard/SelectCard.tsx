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
  children?: React.ReactNode;
}

const SelectCard: React.FunctionComponent<Props> = ({
  className,
  mods,
  iconName,
  text,
  iconStyle,
  style,
  children,
  ...props
}: Props) => {

  const [selected, setSelected] = React.useState(false);

  const handleClick = () => {
    setSelected(!selected);
  };

  const cardClasses = getClassName(
    className,
    selected && `is-selected`,
    mods
  );

  return (
    <div className={cardClasses} style={style} {...props} onClick={handleClick}>
      {
        children ||
        (<div className="Card--container">
          <div className="Card--icon">
            <Icon
              name={iconName} style={iconStyle}
            />
          </div>
          <input type="checkbox" name="option" value={text}/>
          <label htmlFor="option">{text}</label>
        </div>)
      }
    </div>
  );
};

SelectCard.defaultProps = {
  className: "Card",
  mods: null,
  iconName: "roster",
  text: "Select me!",
  iconStyle: {height:'50px', width:'50px'},
  style: {},
  children: null
};

export default SelectCard;
