import * as React from 'react';

export interface HeaderProps {
  children: React.ReactNode;
  className?: string;
  style?: object;
  testId?: string;
}

const Header: React.FunctionComponent<HeaderProps>= ({
  children,
  className = '',
  style = {},
  testId,
}) => {
  return (
    <div
      className={ `Container-header ${className}` }
      style={ style }
      data-testid={ testId }
    >
      { children }
    </div>
  )
};

export default Header;
