import * as React from 'react';
import { Icon } from '../Icon';

type Props = {
  onClick: (expanded: boolean) => void;
}

const ListToggle: React.FunctionComponent<Props> = ({ onClick }: Props) => {
  const [expanded, setExpanded] = React.useState(false);

  const toggleState = () => {
    setExpanded(!expanded);
    onClick(!expanded);
  }

  return (
    <a
      onClick={ () => toggleState() }
      className='u-borderNone u-padNone u-colorInfo'
    >
      { expanded === true ? <Icon name='right' /> : <Icon name='down' /> }
    </a>
  );
};

export default ListToggle;
