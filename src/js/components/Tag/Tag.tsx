import * as React from 'react';

type Props = {
  text: string;
}

const Tag: React.FunctionComponent<Props> = ({ text }: Props) => (
    <span className='Tag'>{ text }</span>
);

export default Tag;
