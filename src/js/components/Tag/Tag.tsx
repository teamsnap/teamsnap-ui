import * as React from 'react';
import { Icon } from '../Icon';

type Props = {
  text: string;
  icon?: string;
  mods?: string;
}

const Tag: React.FunctionComponent<Props> = ({ icon, mods, text }: Props) => {
  let classes = mods ? `Tag ${mods}` : 'Tag';

  return (
    <span className={ classes }>
      { icon &&
        <Icon
          className='Icon u-spaceRightXs'
          style={{
            width: '1.0em',
            height: '1.0em',
          }}
          name={ icon }
        />
      }
      { text }
    </span>
  )
};

export default Tag;
