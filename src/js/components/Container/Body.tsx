import * as React from 'react';

export interface BodyProps {
  children: React.ReactNode;
  grow?: boolean;
  className?: string;
  style?: object;
  testId?: string;
}

const Body = ({
  children,
  grow = true,
  className = '',
  style = {},
  testId,
}: BodyProps) => {
  const bodyClassName = `Container-body ${className} ${grow ? 'Container-body--grow' : ''}`;

  return (
    <div
      className={ bodyClassName }
      style={ { ...style } }
      data-testid={ testId }
    >
      { children }
    </div>
  )
};

export default Body;
