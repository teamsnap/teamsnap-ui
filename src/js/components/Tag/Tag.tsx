import React, { FunctionComponent } from 'react';

type Props = {
  text: string;
}

const Tag: FunctionComponent<Props> = ({ text }: Props) => (
    <span className='Tag'>{ text }</span>
);

export default Tag;
