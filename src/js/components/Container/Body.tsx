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
  const bodyClassName = `
    Container-body
    ${className}
  `;

  return (
    <div
      className={ `${bodyClassName} ${grow ? 'Container-body--grow' : ''}` }
      style={ { ...style } }
      data-testid={ testId }
    >
      { children }
    </div>
  )
};

export default Body;
