import * as React from 'react';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

export enum ContainerDirection {
  Column,
  Row,
};

interface ContainerProps {
  children: React.ReactNode;
  direction?: ContainerDirection;
  className?: string;
  style?: object;
  testId?: string;
}

const Container = ({
  children,
  direction = ContainerDirection.Column,
  className = '',
  style = {},
  testId,
}: ContainerProps) => {
  let hasHeader = false;
  let hasFooter = false;

  React.Children.map(children, (child: { type: string }) => {
    switch(child.type as React.ReactNode) {
      case Header: {
        hasHeader = true;
        break;
      }
      case Footer: {
        hasFooter = true;
        break;
      }
      default:
        break;
    }
  });

  const hasHeaderClassName = hasHeader ? 'Container--has-header' : '';
  const hasFooterClassName = hasFooter ? 'Container--has-footer' : '';
  const flexDirectionClassName = direction === ContainerDirection.Column ? 'u-flexCol' : '';

  const containerClassName = `
    Container
    ${hasHeaderClassName}
    ${hasFooterClassName}
    ${flexDirectionClassName}
    ${className}
  `;

  return (
    <div
      className={ containerClassName }
      style={ style }
      data-test-id={ testId }
    >
      { children }
    </div>
  );
};

Container.Header = Header;
Container.Body = Body;
Container.Footer = Footer;

export default Container;
