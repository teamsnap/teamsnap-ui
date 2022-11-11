import * as React from 'react';
import { Icon } from '../Icon';

export interface Props {
  isExpanded?: boolean;
  onClick: () => void;
  testId?: string;
}

const ListToggle: React.FC<Props> = ({ isExpanded, onClick, testId }: Props) => {
  const [expanded, setExpanded] = React.useState<boolean>(isExpanded ?? false);

  const toggleState = (expansionState) => {
    setExpanded(!expansionState);
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
