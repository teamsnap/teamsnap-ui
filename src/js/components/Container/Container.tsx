import * as React from 'react';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  style?: object;
  testId?: string;
}

const Container = ({
  children,
  className = '',
  style = {},
  testId,
}: ContainerProps) => {
  const containerClassName = `Container ${className}`;

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
