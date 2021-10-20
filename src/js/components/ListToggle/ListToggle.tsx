import * as React from 'react';
import { Icon } from '../Icon';

export interface Props {
  onClick: () => void;
  testId?: string;
}

const ListToggle: React.FC<Props> = ({ onClick, testId }: Props) => {
  const [expanded, setExpanded] = React.useState<boolean>(false);

  const toggleState = (isExpanded) => {
    setExpanded(!isExpanded);
    onClick();
  };

  return (
    <button
      type="button"
      className="u-borderNone u-padNone u-colorInfo"
      style={{ backgroundColor: 'transparent' }}
      onClick={() => toggleState(expanded)}
      data-testid={testId}
    >
      {expanded === true ? <Icon name="down" /> : <Icon name="right" />}
    </button>
  );
};

export default ListToggle;
