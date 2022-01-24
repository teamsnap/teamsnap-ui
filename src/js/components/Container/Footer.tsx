import * as React from 'react';

export interface FooterProps {
  children: React.ReactNode;
  className?: string;
  style?: object;
  testId?: string;
}

const Footer = ({
  children,
  className = '',
  style = {},
  testId,
}: FooterProps) => (
  <div
    className={ `Container-footer ${className}` }
    style={ style }
    data-testid={ testId }
  >
    { children }
  </div>
);

export default Footer;
