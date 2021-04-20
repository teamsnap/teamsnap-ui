import React, { FunctionComponent, useState } from 'react';
import { Icon } from '../Icon';

type Props = {
  onClick: (expanded: boolean) => void;
}

const ListToggle: FunctionComponent<Props> = ({ onClick }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const toggleState = () => {
    setExpanded(!expanded);
    onClick(!expanded);
  }

  return (
    <a
      onClick={ () => toggleState() }
      className='u-borderNone u-padNone u-colorInfo'
    >
      { expanded === true ? <Icon name='down' /> : <Icon name='right' /> }
    </a>
  );
};

export default ListToggle;
